import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase.config";
import { useUserContext } from "../contexts/userProvider";

const ProfilePersonal = () => {
  const [currentUser, setCurrentUser] = useState()
  const navigate = useNavigate();
  const {user, setUser} = useUserContext()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            alert(JSON.stringify(user))
            setCurrentUser(user)
        }else{
            //alert("No user session")
        }
    })
  }, [])

  const onFrameContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-xl text-neutral-900 font-paragraph-medium-medium">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[1]"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="box-border overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] max-w-full border-r-[1px] border-solid border-neutral-300 mq450:gap-[25px] mq450:pl-5 mq450:pr-5 mq450:pb-[226px] mq450:box-border mq750:pt-5 mq750:pb-[348px] mq750:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            CommunityConnect
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px] text-base text-neutral-500">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/frame11.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[52px]">
                Events
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/explore-svgrepocom8.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                Explore
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-11.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[88px]">
                Community
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-23.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[49px]">
                Profile
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-primary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[88px]">
                Create event
              </div>
            </button>
            <button className="cursor-pointer py-2 px-[15px] bg-[transparent] rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[98px]">
                Request event
              </div>
            </button>
          </div>
        </div>
      </div>
      <Sidebar/>
      <div className="w-[1110px] h-14 relative bg-generic-white box-border overflow-hidden shrink-0 hidden max-w-full z-[3] text-sm text-neutral-600 border-b-[1px] border-solid border-neutral-300 border-l-[1px]">
        <div className="absolute top-[calc(50%_-_16px)] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
          <img
            className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-33.svg"
          />
          <div className="absolute top-[6px] left-[34px] leading-[20px] inline-block min-w-[47px]">{`Search `}</div>
          <img
            className="absolute top-[7px] left-[171px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-42.svg"
          />
          <div className="absolute top-[6px] left-[193px] leading-[20px] inline-block min-w-[38px]">
            Abuja
          </div>
          <img
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_20px)] w-px h-[20.5px]"
            alt=""
            src="/queue-manager.svg"
          />
        </div>
        <img
          className="absolute top-[13px] left-[1006px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/variable-manager.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-123-14.svg"
        />
        <div className="absolute top-[16px] left-[66px] text-base leading-[24px] font-medium text-primary-900 inline-block min-w-[100px]">
          Personal info
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[350px] box-border max-w-full mt-[-864px] text-left text-xl text-primary-900 font-paragraph-medium-medium mq450:pl-5 mq450:box-border mq750:pl-[175px] mq750:box-border">
        <div className="w-[380px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="relative tracking-[-0.02em] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">{`Update your personal info `}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[109px]">
                Email Address
              </div>
              <div className="self-stretch rounded-md bg-neutral-200 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-300">
                <input
                  className="w-[136px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400 text-left inline-block whitespace-nowrap p-0"
                  placeholder={currentUser != null ? currentUser?.email : null}
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[45px]">
                Name
              </div>
              <div className="self-stretch rounded-md bg-neutral-200 flex flex-row items-center justify-start py-3 px-4 whitespace-nowrap text-sm border-[1px] border-solid border-neutral-300">
                <div className="relative leading-[20px] inline-block min-w-[63px]">
                  {currentUser !== null ? currentUser?.email : null}
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[75px]">
                Password
              </div>
              <div className="self-stretch rounded-md bg-neutral-200 flex flex-row items-center justify-start py-3 px-[15px] text-sm border-[1px] border-solid border-neutral-300">
                <div className="relative leading-[20px] inline-block min-w-[85px]">
                  ************
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Header pageName={"Personal details"}/>
    </div>
  );
};

export default ProfilePersonal;
