import FrameComponent2 from "../components/FrameComponent22";
import FrameComponent1 from "../components/FrameComponent14";
import FrameComponent from "../components/FrameComponent10";
import LogicGate from "../components/LogicGate";
import TopBar from "../components/TopBar5";

const Profile = () => {
  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-xl text-neutral-900 font-paragraph-medium-medium">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] border-r-[1px] border-solid border-neutral-300">
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
                src="/explore-svgrepocom9.svg"
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
      <div className="absolute top-[0px] left-[330px] bg-generic-white box-border w-[1110px] h-14 overflow-hidden hidden text-sm text-neutral-600 border-b-[1px] border-solid border-neutral-300 border-l-[1px]">
        <div className="absolute top-[13px] left-[24px] w-[49px] h-6" />
        <div className="absolute top-[calc(50%_-_16px)] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
          <img
            className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame2.svg"
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
          src="/frame-12310.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-123-19.svg"
        />
        <div className="absolute top-[16px] left-[66px] text-base leading-[24px] font-medium text-primary-900 inline-block min-w-[97px]">
          Subscription
        </div>
      </div>
      <h3 className="m-0 absolute top-[88px] left-[355px] text-5xl tracking-[-0.02em] leading-[32px] font-medium font-inherit text-primary-900 mq450:text-lgi mq450:leading-[26px]">
        Select a plan that works for you
      </h3>
      <div className="absolute top-[144px] left-[355px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-generic-white box-border w-[212px] h-[774px] overflow-hidden flex flex-col items-start justify-start pt-3.5 px-0 pb-6 gap-[450px] border-[1px] border-solid border-neutral-100">
        <FrameComponent2 />
        <div className="flex flex-row items-start justify-start py-0 pr-[51px] pl-[47px]">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[567px] bg-generic-white box-border w-[212px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[22px] gap-[114px] border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <FrameComponent1 />
        <div className="flex flex-row items-start justify-start py-0 pr-[21px] pl-[22px]">
          <button className="cursor-pointer py-1 px-[15px] bg-[transparent] rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-500 text-left">
              Cancel Subscription
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[779px] bg-generic-white box-border w-[212px] h-[774px] overflow-hidden flex flex-col items-start justify-start pt-3.5 px-0 pb-6 gap-[74px] border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <FrameComponent />
        <div className="flex flex-row items-start justify-start py-0 px-[49px]">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <LogicGate vIP="VIP" prop="$29.99" />
      <LogicGate
        vIP="Corporate"
        prop="Quote"
        propLeft="1203px"
        propBorderRadius="0px 6px 6px 0px"
        propMinWidth="88px"
        propMinWidth1="81px"
        propMargin="0"
      />
      <TopBar />
      <main className="absolute top-[0px] left-[calc(50%_-_720px)] bg-gray-200 w-full overflow-hidden flex flex-row items-start justify-center py-[170px] px-5 box-border min-h-[960px] max-w-full h-full z-[3] text-left text-5xl text-neutral-900 font-paragraph-medium-medium">
        <div className="w-[636px] rounded-xl bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-6 pb-11 pr-6 pl-[30px] box-border gap-[40px] max-w-full mq650:gap-[20px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[24px] max-w-full">
            <div className="w-[424px] flex flex-row items-start justify-between gap-[20px] max-w-full">
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Subscription Cancelled
                </h3>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/frame-71.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-0 box-border max-w-full text-center text-base text-primary-900">
              <div className="flex-1 relative leading-[24px] inline-block max-w-full">
                <span>{`Your subscription has been cancelled. You will have access to Premium plan until `}</span>
                <span className="font-semibold">6 May 2024</span>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
            <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[41px]">
              Done
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
