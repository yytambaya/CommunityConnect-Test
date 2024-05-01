import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent2 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/app/events");
  }, [navigate]);

  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[66px] box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-base text-generic-white font-paragraph-medium-medium">
      <header className="self-stretch h-14 sticky box-border overflow-hidden shrink-0 hidden top-[0] z-[99] text-left text-base text-primary-900 font-paragraph-medium-medium border-b-[1px] border-solid border-neutral-300">
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-1237.svg"
        />
        <div className="absolute top-[16px] left-[66px] leading-[24px] font-medium inline-block min-w-[110px] whitespace-nowrap">
          Request event
        </div>
        <div className="absolute top-[12px] left-[1030px] rounded-md box-border w-[286px] h-8 overflow-hidden text-sm text-neutral-600 border-[1px] border-solid border-neutral-300">
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
          className="absolute top-[13px] left-[1336px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-1235.svg"
        />
        <img
          className="absolute top-[13px] left-[1378px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
      </header>
      <div className="self-stretch bg-primary-700 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border [row-gap:20px] max-w-full z-[1] mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:pb-5 mq1150:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-cover"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 min-w-[152px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
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
              <div className="relative leading-[24px] font-medium inline-block min-w-[110px]">
                Request event
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
                src="/frame-123-15.svg"
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
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
        <div className="w-[395px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="overflow-x-auto flex flex-col items-center justify-start gap-[24px] max-w-full">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              Request for an event
            </h2>
            <div className="w-[395px] flex flex-col items-start justify-start gap-[24px] max-w-full text-base">
              <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="relative leading-[24px] font-medium inline-block min-w-[90px]">
                  Event name
                </div>
                <div className="rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 pr-8 pl-[15px] whitespace-nowrap text-sm text-neutral-400 border-[1px] border-solid border-neutral-200">
                  <div className="relative leading-[20px]">
                    Give us a glimpse of your vision with a catchy title
                  </div>
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="relative leading-[24px] font-medium">
                  Event description
                </div>
                <textarea
                  className="bg-neutral-100 h-[131px] w-auto [outline:none] self-stretch rounded-md box-border flex flex-row items-start justify-start py-2.5 px-4 font-paragraph-medium-medium text-sm text-neutral-400 border-[1px] border-solid border-neutral-200"
                  placeholder="Share all the exciting details about your dream event"
                  rows={7}
                  cols={19}
                />
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="relative leading-[24px] font-medium inline-block min-w-[111px]">
                  Preferred date
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-between py-3 px-4 whitespace-nowrap gap-[20px] text-sm text-neutral-400 border-[1px] border-solid border-neutral-200">
                  <div className="relative leading-[20px]">
                    Choose when works for you
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/frame-34.svg"
                  />
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="relative leading-[24px] font-medium inline-block min-w-[110px]">
                  Preferred time
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-between py-3 px-4 whitespace-nowrap gap-[20px] text-sm text-neutral-400 border-[1px] border-solid border-neutral-200">
                  <div className="relative leading-[20px]">
                    Choose when works for you
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/frame-34.svg"
                  />
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="relative leading-[24px] font-medium">
                  Location preferrence
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-[281px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400 text-left inline-block p-0"
                    placeholder="where would you want to host your event?"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="relative leading-[24px] font-medium">
                  Enter your budget
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-[30px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-800 text-left inline-block p-0"
                    placeholder="0.00"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="relative leading-[24px] font-medium inline-block max-w-full">
                    How much do you want to charge for tickets?
                  </div>
                  <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 text-sm text-neutral-800 border-[1px] border-solid border-neutral-200">
                    <div className="relative leading-[20px] inline-block min-w-[30px]">
                      0.00
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[14px] text-sm">
                  <div className="h-6 w-[42px] relative rounded-2xl bg-neutral-200 overflow-hidden shrink-0">
                    <div className="absolute top-[3px] left-[2px] rounded-81xl bg-primary-500 w-[18px] h-[18px] overflow-hidden" />
                  </div>
                  <div className="relative leading-[20px] font-medium inline-block min-w-[105px]">
                    Tickets are free
                  </div>
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="relative leading-[24px] font-medium inline-block min-w-[104px]">
                  Event privacy
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-between py-2 px-4 gap-[20px] text-sm text-neutral-800 border-[1px] border-solid border-neutral-200">
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative leading-[20px] inline-block min-w-[41px]">
                      Public
                    </div>
                    <div className="relative text-xs leading-[20px] text-neutral-400">
                      Anyone can access the community
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-34.svg"
                  />
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="relative leading-[24px] font-medium inline-block min-w-[55px]">
                  Mentor
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-between py-3 px-4 whitespace-nowrap gap-[20px] text-sm text-neutral-400 border-[1px] border-solid border-neutral-200">
                  <div className="relative leading-[20px]">
                    Choose the kind of mentor you want
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/frame-34.svg"
                  />
                </div>
              </div>
              <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="relative leading-[24px] font-medium inline-block max-w-full">
                  Any specific requirements or preferences?
                </div>
                <textarea
                  className="bg-neutral-100 h-[131px] w-auto [outline:none] self-stretch rounded-md box-border flex flex-row items-start justify-start py-2.5 px-4 font-paragraph-medium-medium text-sm text-neutral-400 border-[1px] border-solid border-neutral-200"
                  placeholder="Let us know, and we'll do our best to accommodate."
                  rows={7}
                  cols={19}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[20px] font-medium">
                    Select the categories your event belong to
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq450:flex-wrap">
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[39px]">
                        Sports
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[35px]">
                        Music
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[28px]">
                        Tech
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[49px]">
                        Lifestyle
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start whitespace-nowrap hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[80px]">{`Food & Drinks`}</div>
                    </button>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[42px]">
                        Charity
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
                        Online
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[47px]">
                        Concert
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start hover:bg-gainsboro-300">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[58px]">
                        Education
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <button onClick={() => navigate('/app/event/event-preview')} className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[119px]">
                Submit request
              </div>
            </button>
            <button onClick={() => navigate("/app/events")} className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[54px]">
                Cancel
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateEvent2;
