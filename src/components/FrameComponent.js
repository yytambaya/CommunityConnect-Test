import { useCallback } from "react";
import IputField from "./IputField";
import { useNavigate } from "react-router-dom";
import {loginWithGoogle, loginWithFacebook, loginWithApple, signupWithEmailAndPassword } from '../api/auth/firebaseAuth'
import { userSignupSchema } from "../validators/user.validation";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { addDocToFirestore } from "../api/crud/firebaseCrud";

const FrameComponent = () => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit, formState:{errors}} = useForm({ resolver: yupResolver(userSignupSchema)})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [createAccountText, setCreateAccountText] = useState("Create Account")
  
  const onGoogleLogin = async () => {
    try{
        setIsLoading(true)
        const res = await loginWithGoogle()
        if(res.status === 200){
            //alert('Logged in')
            navigate("/app/events")
        }else{
          //alert('Error logging in')
            setError(res.message)
        }
    }catch(error){
        setError('Error: ' + error)
        setIsLoading(false)
        setError('something went wrong')
    }
}

const onFacebookLogin = async () => {
    try{
        setIsLoading(true)
        const res = await loginWithFacebook()
        if(res.status === 200){
            setNotification(true)
        }else{
            setError(res.message)
        }
    }catch(error){
        setIsLoading(false)
        setError('something went wrong')
    }
}


const onAppleLogin = async () => {
    try{
        setIsLoading(true)
        const res = await loginWithFacebook()
        if(res.status === 200){
            setNotification(true)
        }else{
            setError(res.message)
        }
    }catch(error){
        setIsLoading(false)
        setError('something went wrong')
    }
}

const onSubmit = async (data) => {
    //alert(JSON.stringify(data))
    try{
        const collectionName = 'User'
        /*const payload2 = {    
          name: data.name,
          authProvider: "EmailPassword",
          email: data.email,
          password: data.password,
          role: "user",
          emailStatus: 0,
          accountStatus: 1,
          createdDate: Date.now(),
          updatedDate: Date.now()
        }*/
        const payload = {
          name: data.name,
          email: data.email,
          password: data.password
        }
        //setIsLoading(true)
        setCreateAccountText('Loading...')
        //const res = await addDocToFirestore(collectionName, payload)
        const res = await signupWithEmailAndPassword(payload)
        if(res.status === 200){
            //setNotification(true)
            //alert('Signup successful')
            navigate("/app/events")
        }else{
            
            setError(res.message)
        }
        //alert('Okay')
    }catch(error){
        alert('error: ' + error)
        setError('something went wrong')
    } 
    setCreateAccountText("Create Account")
    //navigate("/verification-message")
 }

  const onLargeButtonClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-0 self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-xl bg-generic-white box-border overflow-hidden flex flex-col items-start justify-start py-8 px-[59px] gap-[16px] max-w-full border-[1px] border-solid border-neutral-300 mq725:py-5 mq725:px-[29px] mq725:box-border mq975:pt-[21px] mq975:pb-[21px] mq975:box-border">
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-2">
        <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left mq450:text-base mq450:leading-[22px]">
          Create your account
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <button onClick={(e) => {e.preventDefault(); onGoogleLogin()}} className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-300">
            <img
              
              className="cursor-pointer h-6 w-6 relative object-cover min-h-[24px]"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left">
                Sign up with Google
              </div>
            </div>
          </button>
          <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-300">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/facebook-svgrepocom.svg"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left">
                Sign up with Facebook
              </div>
            </div>
          </button>
          <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-300">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/apple173-svgrepocom.svg"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left inline-block min-w-[127px]">
                Sign up with Apple
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[14px] mq725:flex-wrap">
            <img
              className="h-px w-[170px] relative"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-black text-left inline-block min-w-[12px] mq725:w-full mq725:h-3">
              or
            </div>
            <img
              className="h-px w-[170px] relative"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            {error && <p className="text-red-500">{error}</p>}
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                Name
              </div>
              <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                <input
                  {...register("name")}
                  className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block whitespace-nowrap p-0"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              {errors.name && <p className="text-red-500 -mt-2 ml-2">{errors.name?.message}</p>}
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                Email Address
              </div>
              <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                <input
                  {...register("email")}
                  className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block whitespace-nowrap p-0"
                  placeholder="example@email.com"
                  type="text"
                />
              </div>
              {errors.email && <p className="text-red-500 -mt-2 ml-2">{errors.email?.message}</p>}
            
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                Password
              </div>
              <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                <input
                  {...register("password")}
                  className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block whitespace-nowrap p-0"
                  placeholder="****"
                  type="password"
                />
              </div>
              {errors.password && <p className="text-red-500 -mt-2 ml-2">{errors.password?.message}</p>}
            </div>
            {/*<IputField
              label="Password"
              placeholder=""
              propMinWidth="75px"
              propMinWidth1="79px"
            />*/}
          </div>
        </div>
      </div>
      <div className="w-[302px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[12px]">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[31px]">
            Age
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <input
              {...register("age")}
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              type="checkbox"
            />
            <div className="relative text-base leading-[24px] font-paragraph-medium-medium text-primary-900 text-left">
              I am 18 of years or older
            </div>
          </div>
          {errors.age && <p className="text-red-500 -mt-2 ml-2">{errors.age?.message}</p>}
        </div>
        {/*<div className="self-stretch flex flex-row items-start justify-between py-[7px] pr-[7px] pl-[13px] relative gap-[20px] mq450:flex-wrap">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.08)] rounded-10xs bg-whitesmoke box-border border-[1px] border-solid border-lightgray-100" />
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-7 w-[130px] relative z-[1]"
                alt=""
                src="/robot.svg"
              />
              <img
                className="h-[20.5px] w-[27.6px] absolute !m-[0] top-[2px] left-[5px] z-[2]"
                loading="lazy"
                alt=""
                src="/greentick.svg"
              />
            </div>
          </div>
          <div className="w-[66px] flex flex-col items-end justify-start pt-1.5 pb-[0.5px] pr-[5.6px] pl-[5px] box-border gap-[7.3px] z-[1]">
            <div className="flex flex-row items-start justify-end py-0 pr-[12.8px] pl-3.5">
              <img
                className="h-[28.5px] w-[28.6px] relative"
                loading="lazy"
                alt=""
                src="/recaptcha-symbol.svg"
              />
            </div>
            <img
              className="self-stretch h-[19.7px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/text.svg"
            />
          </div>
        </div>*/}
      </div>
      <button 
        className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center whitespace-nowrap hover:bg-slateblue"
        type={'submit'}
      >
        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[119px]">
          {createAccountText}
        </div>
      </button>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="relative text-xs leading-[20px] text-left">
          <span className="font-semibold font-paragraph-medium-medium text-neutral-500">
            By creating an account, you accept our
          </span>
          <span className="font-paragraph-medium-medium text-gray-400">{` `}</span>
          <span className="[text-decoration:underline] font-semibold font-paragraph-medium-medium text-primary-600">
            terms and conditions
          </span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
          <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-neutral-900 text-left whitespace-nowrap">
            Already have an account?
          </div>
          <div onClick={() => navigate("/login")} className="cursor-pointer relative text-base [text-decoration:underline] leading-[24px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[47px] whitespace-nowrap">
            Log in
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
