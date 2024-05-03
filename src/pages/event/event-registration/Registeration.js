import TopBar from "../../../components/TopBar4";
import IputField from "../../../components/IputField1";
import FrameComponent1 from "../../../components/FrameComponent13";
import FrameComponent from "../../../components/FrameComponent8";
import TopNav from "../../../components/TopNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventRegistrationSchema } from "../../../validators/eventRegistration.validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Timestamp } from "firebase/firestore";
import { update } from "firebase/database";
import { addDocToFirestore } from "../../../api/crud/firebaseCrud";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../configs/firebase.config";

const Registration = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors}} = useForm({ resolver: yupResolver(eventRegistrationSchema)})
    let [quantity, setQuantity] = useState(1)
    const [actionButton, setActionButton] = useState("Register")
    const [currentUser, setCurrentUser] = useState(null)
    const ticketFee = 20 
    const eventId = "gsjkllslkmskmslkmlkms"
    let [total, setTotal] = useState(ticketFee)
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                //alert("user logged in: " + user.uid)
                setCurrentUser(user)
            }else{
                //alert("No user session")
            }
        })
      }, [])

    useEffect(() => {
        setTotal( ticketFee * quantity)
    }, [quantity])

    const onSubmit = async (data) => {
        const collectionName = "Registration"
        const payload = {
            eventId: eventId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            ticketQuantity: quantity,
            ticketFee: ticketFee, 
            total: total,
            creator: currentUser.uid,
            created: Timestamp.now(),
            updated: Timestamp.now()
        }
        setActionButton('Loading...')
        const res = await addDocToFirestore(collectionName, payload)
        if(res.status == 200){
            alert('Successful')
        }else{
            setError("Error")
        }
    }

    const handleQuantity = (type) => {
        if(type == "increase"){
            setQuantity(quantity => quantity + 1)
        }else if(type == "decrease"){
            if(quantity >= 2){
                setQuantity(quantity =>  quantity - 1)
            }
        } 
    }


  return (
    <div className="w-full h-[990px] relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[181px] box-border gap-[597px] leading-[normal] tracking-[normal] text-left text-base text-generic-white font-paragraph-medium-medium mq450:gap-[149px] mq750:gap-[298px] mq1150:h-auto">
      <TopNav />
      <main className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:1de1738] max-w-full">
        <TopBar />
        <form onSubmit={handleSubmit(onSubmit)} className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium">
          <div className="w-[614px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-5xl">
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Save a spot
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[7px] max-w-full">
                    <div className="relative leading-[24px]">
                      Logged in as email@example.com
                    </div>
                    <div className="relative [text-decoration:underline] leading-[24px] text-primary-500 inline-block min-w-[68px]">
                      Not you?
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                      
                    <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
              <input
                {...register("firstName")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                placeholder="Enter the name of your event"
                type="text"
              />
            </div>
            
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
                    <input
                        {...register("lastName")}
                        className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                        placeholder="Enter the name of your event"
                        type="text"
                    />
                    
                </div>
                {errors.firstName && <p className="text-red-500 -mt-4">{errors.firstName.message}</p>}
            
                {errors.lastName && <p className="text-red-500 -mt-4">{errors.lastName.message}</p>}
            </div>     
            <div>
                Email Address    
            </div>                
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
              <input
                {...register("email")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                placeholder="Johndoe@gmail.com"
                type="text"
              />
              
            </div>
            {errors.email && <p className="text-red-500 -mt-4">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="w-[161px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[56px]">
                    Tickets
                  </div>
                  
                  <div className="self-stretch rounded-2xl bg-neutral-100 flex flex-row items-center justify-between py-2.5 px-[11px] gap-[20px] text-left text-lg text-black font-paragraph-medium-medium border-[1px] border-solid border-neutral-200">
                    <div onClick={() => {handleQuantity("decrease")}} className="w-8 rounded-6xs cursor-pointer  hover:bg-primary-500 flex flex-row items-center justify-center p-1 box-border">
                        <img
                        className="h-6 w-6  relative overflow-hidden shrink-0"
                        alt=""
                        src="/frame-43.svg"
                        />
                    </div>
                    <div className="relative leading-[28px] inline-block min-w-[9px]">{quantity}</div>
                    <div onClick={() => handleQuantity("increase")} className="w-8 rounded-6xs cursor-pointer  hover:bg-primary-500 flex flex-row items-center justify-center p-1 box-border">
                        <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/frame-52.svg"
                        />
                    </div>
                 </div>


                </div>
              </div>
              <div className="w-[279px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[119px]">
                  Order summary
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[23px]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="relative leading-[24px] inline-block min-w-[17px]">
                      {quantity}x
                    </div>
                    <div className="relative leading-[24px] inline-block min-w-[44px] whitespace-nowrap">
                      ${ticketFee}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[43px]">
                      Total
                    </div>
                    <div className="relative leading-[28px] font-medium inline-block min-w-[51px] whitespace-nowrap">
                      ${total}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
      <button type="submit" className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
        <div
          className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[65px]"
          
        >
          {actionButton}
        </div>
      </button>
      <button className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[54px]">
          Cancel
        </div>
      </button>
    </div>

          </div>
        </form>
      </main>
      <div className="w-[1424px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[380px] flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="self-stretch h-12 rounded-md bg-primary-500 flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap">
            <div className="self-stretch w-[100px] relative leading-[24px] font-semibold inline-block">
              Create event
            </div>
          </div>
          <div className="self-stretch h-12 rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-3 px-5 text-primary-600 border-[1px] border-solid border-primary-100">
            <div className="self-stretch w-[54px] relative leading-[24px] font-semibold inline-block">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
