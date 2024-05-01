import { useCallback } from "react";
import IputField from "./IputField";
import { useNavigate } from "react-router-dom";
import {loginWithGoogle, loginWithFacebook, loginWithApple, loginWithEmailAndPassword, sendPasswordResetLinkToEmail } from '../api/auth/firebaseAuth'
import { userForgetPasswordSchema } from "../validators/user.validation";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"

const LargeButtonSendLink = () => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit, formState:{errors}} = useForm({ resolver: yupResolver(userForgetPasswordSchema)})
  const [error, setError] = useState('')
  const [actionButton, setActionButton] = useState("Send email")
  
  
const onSubmit = async (data) => {
    alert(JSON.stringify(data))
    try{
        setActionButton('Loading...')
        const res = await sendPasswordResetLinkToEmail(data.email)
        if(res.status === 200){
            // setNotification(true)
            //alert('Sent')
            navigate('/forgot-password-message')
            //alert('Logged in: ' + res.data.userCredentials)
        }else{
            alert("error: " + res.status)
            setError(res.message)
        }
        alert('Okay')
    }catch(error){
        alert('error: ' + error)
        setError('something went wrong')
    } 
    setActionButton("Send email")
    //navigate("/verification-message")
 }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 rounded-md bg-generic-white flex flex-col items-center justify-start py-10 px-6 box-border gap-[30px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-5xl text-neutral-900 font-paragraph-medium-medium mq450:gap-[15px] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
          Forgot your password?
        </h3>
        <div className="self-stretch relative text-base leading-[24px] text-primary-900 text-center">
          <p className="m-0">{`Enter your email and we will send you a link to reset `}</p>
          <p className="m-0">your password</p>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
          
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
            {errors.email && <p className="text-red-500 text-[18px] -mt-2 ml-2">{errors.email?.message}</p>}
          
          </div>
      <button type="submit" className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-gray-300 text-left inline-block min-w-[86px]">
          {actionButton}
        </div>
      </button>
    </form>
  );
};

export default LargeButtonSendLink;
