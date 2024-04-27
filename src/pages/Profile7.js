import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Profile7 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-generic-white font-paragraph-medium-medium mq1150:h-auto mq1150:min-h-[960]">
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
      <header className="absolute top-[0px] left-[330px] bg-generic-white box-border w-[1110px] h-14 overflow-hidden hidden text-left text-sm text-neutral-600 font-paragraph-medium-medium border-b-[1px] border-solid border-neutral-300 border-l-[1px]">
        <div className="absolute top-[13px] left-[24px] w-[49px] h-6" />
        <div className="absolute top-[calc(50%_-_16px)] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
          <img
            className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame2.svg"
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
          src="/frame-12311.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-1237.svg"
        />
        <div className="absolute top-[16px] left-[66px] text-base leading-[24px] font-medium text-primary-900 inline-block min-w-[97px] whitespace-nowrap">
          Subscription
        </div>
      </header>
      <h3 className="m-0 absolute top-[88px] left-[355px] text-5xl tracking-[-0.02em] leading-[32px] font-medium font-inherit text-primary-900 mq450:text-lgi mq450:leading-[26px]">
        Select a plan that works for you
      </h3>
      <div className="absolute top-[144px] left-[355px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-generic-white box-border w-[351px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[528px] gap-[24px] text-9xl border-[1px] border-solid border-neutral-100">
        <img
          className="w-[214px] h-px relative hidden"
          alt=""
          src="/vector-13.svg"
        />
        <div className="self-stretch bg-primary-500 overflow-hidden flex flex-col items-center justify-start py-3.5 px-5 gap-[16px]">
          <button className="cursor-pointer [border:none] py-1 px-[11px] bg-generic-white rounded-3xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-100">
            <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[47px]">{`Basic `}</div>
          </button>
          <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[79px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
            $0.00
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-[36.5px] text-base text-primary-800">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/checkline1.svg"
              />
              <div className="relative leading-[24px]">
                Ticket Revenue Cut: 30%
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="relative leading-[24px]">
                Sponsorship Revenue Cut: 60%
              </div>
            </div>
            <div className="w-[194px] flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Basic Support
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[144px] left-[706px] bg-generic-white box-border w-[349px] overflow-hidden flex flex-col items-end justify-start pt-3 px-0 pb-[22px] gap-[370px] text-primary-800 border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
            <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
              <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[76px]">
                Premium
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[14px] text-9xl text-primary-500">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5">
              <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[96px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
                $49.99
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-131.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="relative leading-[24px]">
                Ticket Revenue Cut: 15%
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-[36.5px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="relative leading-[24px]">
                Sponsorship Revenue Cut: 45%
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Basic Support
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Priority Support
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline1.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Unlimited Number of Attendees
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[1055px] bg-generic-white box-border w-[351px] h-[774px] overflow-hidden flex flex-col items-end justify-start pt-3.5 px-0 pb-6 gap-[250px] max-w-full text-primary-800 border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
          <div className="w-[305px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
              <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[29px]">
                VIP
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-9xl text-primary-500">
            <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[96px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
              $99.99
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-13-1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="relative leading-[24px]">
                Ticket Revenue Cut: 10%
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-[36.5px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <input
                className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                type="checkbox"
              />
              <div className="relative leading-[24px]">
                Sponsorship Revenue Cut: 35%
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <input
                className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px]">
                Basic Support
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <input
                className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px]">
                Priority Support
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline1.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Unlimited Number of Attendees
              </div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="flex-1 relative leading-[24px]">Vip Support</div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="flex-1 relative leading-[24px]">Vip Events</div>
            </div>
          </div>
          <div className="w-[267px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline1.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Corporate Events
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
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
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 min-w-[139px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              alt=""
              src="/frame-123-23.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[97px]">
                Subscription
              </div>
            </div>
          </div>
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full text-sm text-neutral-600 mq450:flex-wrap">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px]">{`Search `}</div>
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
                <div className="relative leading-[20px] inline-block min-w-[38px]">
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
                src="/frame-123-34.svg"
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
    </div>
  );
};

export default Profile7;
