import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Profile1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <form className="m-0 w-[1440px] h-[960px] bg-generic-white max-w-full overflow-hidden leading-[normal] tracking-[normal] mq1150:h-auto mq1150:min-h-[960]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] border-r-[1px] border-solid border-neutral-300">
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <h3 className="m-0 relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left mq450:text-base mq450:leading-[22px]">
            CommunityConnect
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/frame11.svg"
              />
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-neutral-500 text-left inline-block min-w-[52px]">
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
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-neutral-500 text-left inline-block min-w-[58px]">
                Explore
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-11.svg"
              />
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-neutral-500 text-left inline-block min-w-[88px]">
                Community
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-23.svg"
              />
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[49px]">
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
      <header className="absolute top-[0px] left-[330px] bg-generic-white box-border w-[1110px] h-14 overflow-hidden hidden border-b-[1px] border-solid border-neutral-300 border-l-[1px]">
        <div className="absolute top-[13px] left-[24px] w-[49px] h-6" />
        <div className="absolute top-[calc(50%_-_16px)] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
          <img
            className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-33.svg"
          />
          <div className="absolute top-[6px] left-[34px] text-sm leading-[20px] font-paragraph-medium-medium text-neutral-600 text-left inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
          <img
            className="absolute top-[7px] left-[171px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-42.svg"
          />
          <div className="absolute top-[6px] left-[193px] text-sm leading-[20px] font-paragraph-medium-medium text-neutral-600 text-left inline-block min-w-[38px]">
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
          src="/variable-access.svg"
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
        <div className="absolute top-[16px] left-[66px] text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[88px] whitespace-nowrap">
          Community
        </div>
      </header>
      <button className="cursor-pointer [border:none] pt-2 px-2 pb-1 bg-[transparent] absolute top-[96px] left-[733px] flex flex-row items-start justify-start border-b-[3px] border-solid border-primary-500">
        <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-primary-500 text-left">
          Your communities
        </div>
      </button>
      <div className="absolute top-[104px] left-[933px] text-lg leading-[28px] font-paragraph-medium-medium text-gray-100 text-left inline-block min-w-[97px]">
        Subscribed
      </div>
      <div className="absolute top-[164px] left-[648px] w-[476px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[13px] pl-[11px] gap-[20px] border-[1px] border-solid border-neutral-200">
          <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-primary-900 text-left">
            Women in Tech
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-51.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[13px] pl-[11px] gap-[20px] border-[1px] border-solid border-neutral-200">
          <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[112px]">
            Ladies Picnic
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-51.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[13px] pl-[11px] gap-[20px] border-[1px] border-solid border-neutral-200">
          <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-primary-900 text-left">{`All about FinTech `}</div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-51.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border [row-gap:20px] max-w-full z-[2] mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:pb-5 mq1150:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-cover"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 min-w-[130px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              alt=""
              src="/frame-123-2.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[88px]">
                Community
              </div>
            </div>
          </div>
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full mq450:flex-wrap">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative text-sm leading-[20px] font-paragraph-medium-medium text-neutral-600 text-left inline-block min-w-[47px]">{`Search `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[7px]">
              <img
                className="self-stretch w-px relative max-h-full min-h-[21px]"
                alt=""
                src="/queue-manager.svg"
              />
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                    type="radio"
                  />
                </div>
                <div className="relative text-sm leading-[20px] font-paragraph-medium-medium text-neutral-600 text-left inline-block min-w-[38px]">
                  Abuja
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                alt=""
                src="/frame-123-13.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile1;
