import FrameComponent1 from "../components/FrameComponent12";
import FrameComponent from "../components/FrameComponent7";
import TopBar from "../components/TopBar3";

const Profile = () => {
  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-lg text-gray-100 font-paragraph-medium-medium mq450:h-auto mq450:min-h-[960]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] text-xl text-neutral-900 border-r-[1px] border-solid border-neutral-300">
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
                src="/explore-svgrepocom10.svg"
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
      <header className="absolute top-[0px] left-[330px] bg-generic-white box-border w-[1110px] h-14 overflow-hidden hidden text-left text-sm text-neutral-600 font-paragraph-medium-medium border-b-[1px] border-solid border-neutral-300 border-l-[1px]">
        <div className="absolute top-[13px] left-[24px] w-[49px] h-6" />
        <div className="absolute top-[calc(50%_-_16px)] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
          <img
            className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-33.svg"
          />
          <div className="absolute top-[6px] left-[34px] leading-[20px] inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
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
          src="/frame-1236.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-123-17.svg"
        />
        <div className="absolute top-[16px] left-[66px] text-base leading-[24px] font-medium text-primary-900 inline-block min-w-[52px] whitespace-nowrap">
          Events
        </div>
      </header>
      <div className="absolute top-[104px] left-[719px] leading-[28px] inline-block min-w-[87px]">
        Upcoming
      </div>
      <button className="cursor-pointer [border:none] pt-2 px-2 pb-1 bg-[transparent] absolute top-[96px] left-[838px] flex flex-row items-start justify-start border-b-[3px] border-solid border-primary-500">
        <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[88px]">
          My events
        </div>
      </button>
      <div className="absolute top-[104px] left-[974px] leading-[28px] inline-block min-w-[79px]">
        Attended
      </div>
      <div className="absolute top-[164px] left-[530px] rounded-[4.69px] bg-generic-white box-border w-[714px] overflow-hidden flex flex-row items-start justify-start gap-[24px] max-w-full border-[1px] border-solid border-neutral-300 mq450:flex-wrap">
        <img
          className="h-[172px] w-[200px] relative overflow-hidden shrink-0 object-cover mq450:flex-1"
          loading="lazy"
          alt=""
          src="/frame-237@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[227px] mq450:flex-1">
          <FrameComponent1 />
        </div>
      </div>
      <div className="absolute top-[360px] left-[530px] rounded-[4.69px] bg-generic-white box-border overflow-hidden flex flex-row items-start justify-start py-0 pr-[22px] pl-0 gap-[24px] max-w-full border-[1px] border-solid border-neutral-300 mq750:flex-wrap mq750:p-5 mq750:box-border">
        <img
          className="h-[172px] w-[200px] relative overflow-hidden shrink-0 object-cover mq750:flex-1"
          alt=""
          src="/frame-237-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[466px] max-w-full mq750:flex-1 mq750:min-w-full">
          <FrameComponent />
        </div>
      </div>
      <TopBar />
    </div>
  );
};

export default Profile;
