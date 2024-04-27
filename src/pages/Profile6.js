import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Profile6 = () => {
  const navigate = useNavigate();

  const onLabelCollectorContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-primary-800 font-paragraph-medium-medium">
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
          src="/frame-1239.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-123-18.svg"
        />
        <div className="absolute top-[16px] left-[66px] text-base leading-[24px] font-medium text-primary-900 inline-block min-w-[97px]">
          Subscription
        </div>
      </div>
      <h3 className="m-0 absolute top-[88px] left-[355px] text-5xl tracking-[-0.02em] leading-[32px] font-medium font-inherit text-primary-900 mq450:text-lgi mq450:leading-[26px]">
        Select a plan that works for you
      </h3>
      <div className="absolute top-[144px] left-[355px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-generic-white box-border w-[212px] h-[774px] overflow-hidden flex flex-col items-start justify-start pt-3.5 px-0 pb-6 gap-[450px] border-[1px] border-solid border-neutral-100">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px]">
          <div className="flex flex-row items-start justify-start py-0 px-[66px] text-lg text-primary-500">
            <div className="rounded-3xl bg-primary-50 flex flex-row items-start justify-start py-1 px-[11px] whitespace-nowrap">
              <div className="relative leading-[28px] font-medium inline-block min-w-[47px]">{`Basic `}</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[69px] pl-[66px] text-9xl text-primary-500">
            <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[79px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
              $0.00
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px]">
            <img
              className="h-px w-[214px] relative"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Attend Unlimited Number of Events
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Basic Support
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Request Event
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[51px] pl-[47px]">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[567px] bg-generic-white box-border w-[212px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[22px] gap-[114px] border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="bg-primary-500 overflow-hidden flex flex-col items-start justify-start py-3.5 px-[57px] gap-[16px] z-[1] text-9xl text-generic-white">
            <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
              <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[76px]">
                Premium
              </div>
            </button>
            <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[78px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
              $9.99
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[16px]">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px]">
              <img
                className="h-px w-[214px] relative"
                alt=""
                src="/vector-13.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/checkline.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[24px]">
                    Attend Unlimited Number of Events
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/checkline.svg"
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Basic Support
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/checkline.svg"
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Request Event
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/checkline.svg"
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Priority Support
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/checkline.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[24px]">
                  Priority Registration for events
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/checkline.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[24px]">
                  Early Access to Events
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <input
                  className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[24px]">
                  Premium Events
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/checkline.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[24px]">
                  Request Private Event
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Request Specific Mentor
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[21px] pl-[22px]">
          <button className="cursor-pointer py-1 px-[15px] bg-[transparent] rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-500 text-left">
              Cancel Subscription
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[779px] bg-generic-white box-border w-[212px] h-[774px] overflow-hidden flex flex-col items-start justify-start pt-3.5 px-0 pb-6 gap-[74px] border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[62px] pl-[60.5px]">
            <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
              <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[69px]">
                Student
              </div>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[60px] pl-[60.5px] text-9xl text-primary-500">
            <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[79px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
              $4.99
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px]">
            <img
              className="h-px w-[214px] relative"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Attend Unlimited Number of Events
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Basic Support
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Request Event
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline.svg"
              />
              <div className="flex-1 relative leading-[24px]">
                Priority Support
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Priority Registration for events
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Early Access to Events
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <input
                className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px]">
                Premium Events
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Request Private Event
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/checkline.svg"
                />
              </div>
              <div className="flex-1 relative leading-[24px]">
                Request Specific Mentor
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/checkline.svg"
              />
              <div className="flex-1 relative leading-[24px]">Vip Events</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[49px]">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[991px] bg-generic-white box-border w-[212px] overflow-hidden flex flex-col items-end justify-start pt-3 pb-[22px] pr-[9px] pl-0 gap-[16px] border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <div className="mr-[-11px] w-[214px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border gap-[15px] text-9xl text-primary-500">
          <div className="flex flex-row items-start justify-start py-0 pr-[58px] pl-[58.5px]">
            <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
              <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[29px]">
                VIP
              </div>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[60px] pl-[58.5px]">
            <div className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[95px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]">
              $29.99
            </div>
          </div>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/vector-13.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-2 gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Attend Unlimited Number of Events
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Basic Support</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Request Event</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <input
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              type="checkbox"
            />
            <div className="flex-1 relative leading-[24px]">
              Priority Support
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Priority Registration for events
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-2 gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <input
                className="m-0 w-6 h-6 relative overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Early Access to Events
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <input
              className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              type="checkbox"
            />
            <div className="flex-1 relative leading-[24px]">Premium Events</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Request Private Event
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[18px] pr-0 pl-2 gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Request Specific Mentor
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Vip Events</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Vip Support</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-10">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[144px] left-[1203px] rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-generic-white box-border w-[212px] overflow-hidden flex flex-col items-end justify-start pt-3 pb-[22px] pr-[9px] pl-0 gap-[16px] border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]">
        <div className="mr-[-11px] w-[214px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border gap-[15px] text-9xl text-primary-500">
          <div className="flex flex-row items-start justify-start py-0 pr-[53px] pl-[51px]">
            <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
              <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[88px]">
                Corporate
              </div>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[51px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-semibold font-inherit inline-block min-w-[81px] mq450:text-3xl mq450:leading-[29px]">
              Quote
            </h2>
          </div>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/vector-13.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-2 gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Attend Unlimited Number of Events
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Basic Support</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Request Event</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">
              Priority Support
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Priority Registration for events
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-2 gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Early Access to Events
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Premium Events</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Request Private Event
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[18px] pr-0 pl-2 gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/checkline.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px]">
              Request Specific Mentor
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Vip Events</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/checkline.svg"
            />
            <div className="flex-1 relative leading-[24px]">Vip Support</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-10">
          <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-primary-500 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[95px]">
              Start free trial
            </div>
          </button>
        </div>
      </div>
      <header className="absolute top-[0px] left-[calc(50%_-_720px)] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border max-w-full z-[2] text-left text-base text-generic-white font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-cover"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={onLabelCollectorContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              alt=""
              src="/frame-123-25.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[97px] whitespace-nowrap">
                Subscription
              </div>
            </div>
          </div>
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full text-sm text-neutral-600">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
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
                src="/frame-123-32.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="absolute top-[0px] left-[calc(50%_-_720px)] bg-gray-200 w-full overflow-hidden flex flex-row items-start justify-center py-[170px] px-5 box-border min-h-[960px] max-w-full h-full z-[3] text-left text-5xl text-neutral-900 font-paragraph-medium-medium">
        <div className="w-[636px] rounded-xl bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-6 pb-[38px] pr-6 pl-[30px] box-border gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[407px] flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Cancel Subscription
                </h3>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/frame-71.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px] text-center text-base text-primary-900">
            <div className="self-stretch relative leading-[24px]">
              We’re sorry to see you go! Before you go, could you please take a
              moment to let us know what we could be doing better? Your insights
              will help us enhance our platform for all users.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left">
              <div className="relative leading-[24px] font-medium inline-block min-w-[57px]">
                Reason
              </div>
              <div className="self-stretch rounded-md bg-neutral-200 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-300">
                <input
                  className="w-[79px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400 text-left inline-block p-0"
                  placeholder="Placeholder"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[71px]">
                Continue
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[54px]">
                Cancel
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile6;
