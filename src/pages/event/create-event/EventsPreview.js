import TopBar from "../../../components/TopBar1";
import FrameComponent from "../../../components/FrameComponent5";
import { useContext, useEffect } from "react";
import { EventContextProvider } from "../../../contexts/EventProvider";

const EventPreview = () => {
  const event = useContext(EventContextProvider)

  useEffect(() => {
    alert(event)
  }, [])
  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[60px] box-border gap-[24px] leading-[normal] tracking-[normal]">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <TopBar />
      <main className="w-[1401px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
          <div className="flex flex-col items-start justify-start gap-[6px] text-13xl">
            <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi mq750:text-[26px]">
              {"WOmen in tech"}
            </h1>
            <div className="flex flex-row items-start justify-start gap-[8px] text-3xl text-neutral-700">
              <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lg">
                Event code: AHDFG123
              </h2>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-22.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
            <img
              className="h-[372px] flex-1 relative rounded-md max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/frame-151@2x.png"
            />
          </div>
          <div className="w-[337px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[96px] mq450:text-lgi mq450:leading-[26px]">
                  Ladies picnic
                </h1>
                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                  <div className="w-2.5 h-2.5 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                </div>
                <div className="flex-1 relative tracking-[-0.02em] leading-[32px] font-semibold text-primary-500 inline-block min-w-[96px] mq450:text-lgi mq450:leading-[26px]">
                  From N2,000
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-base">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/frame-31.svg"
                />
                <div className="relative leading-[24px] inline-block min-w-[87px]">
                  Sat, Mar 27
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="w-2 h-2 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                </div>
                <div className="relative leading-[24px] inline-block min-w-[72px] whitespace-nowrap">
                  10:00 AM
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-base">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-4.svg"
              />
              <div className="relative leading-[24px]">
                Dee’s Hotel, Utako Abuja
              </div>
            </div>
          </div>
          <div className="w-[1012px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[16px] max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              About this event
            </h1>
            <div className="self-stretch relative text-base leading-[24px]">
              "Escape the hustle and bustle of daily life and join us for a
              serene afternoon at our Ladies Picnic Event! Indulge in delicious
              treats, sip refreshing drinks, and enjoy delightful company amidst
              nature's beauty. Let's create unforgettable memories together in a
              blissful setting. Don't miss out – reserve your spot now!"
            </div>
          </div>
          <div className="w-[470px] flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[30px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                Organized by
              </h1>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[62px] text-base mq675:gap-[31px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[18px] min-w-[205px] mq450:flex-wrap">
                  <img
                    className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/frame-155@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[155px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[112px]">
                        Fatima Ahmad
                      </div>
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <div className="w-2 h-2 relative rounded-xl bg-primary-500 overflow-hidden shrink-0" />
                      </div>
                      <div className="relative leading-[24px] text-neutral-700 inline-block min-w-[98px]">
                        121 followers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <button className="cursor-pointer [border:none] py-2.5 px-6 bg-primary-500 rounded-md flex flex-row items-start justify-start hover:bg-slateblue">
                    <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[44px]">
                      Follow
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-primary-600">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[55px] mq450:text-lgi mq450:leading-[26px]">
                Tags
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="flex flex-row items-start justify-start gap-[13px] max-w-full mq675:flex-wrap">
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[35px]">
                      Picnic
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[73px]">
                      Ladies event
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[105px]">
                      OutdoorGathering
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[39px]">
                      Nature
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[13px] mq675:flex-wrap">
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[82px]">
                      FoodAndDrink
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[60px]">
                      Relaxation
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[66px]">
                      Community
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[61px]">
                      Friendship
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default EventPreview;
