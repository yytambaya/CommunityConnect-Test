import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Events2 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full h-[1439px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-neutral-500 font-paragraph-medium-medium mq650:h-auto mq650:min-h-[1139]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[331px] h-[1139px] overflow-hidden flex flex-row items-start justify-start py-[95px] px-[50px] border-r-[1px] border-solid border-neutral-300">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/frame1.svg"
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
                src="/explore-svgrepocom1.svg"
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
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-2.svg"
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
      <main className="absolute top-[56px] left-[331px] w-[1109px] overflow-hidden flex flex-col items-start justify-start pt-[22px] px-[34px] pb-0 box-border gap-[30px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
        <img
          className="w-[1012px] relative rounded-md h-[400px] overflow-hidden object-cover max-w-full"
          alt=""
          src="/tags-t-e-x-t@2x.png"
        />
        <section className="w-[1012px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium mq650:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <div className="flex flex-row items-start justify-start gap-[16px] text-5xl">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                Ladies picnic
              </h3>
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <div className="w-2.5 h-2.5 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
              </div>
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit text-primary-500 inline-block min-w-[50px] mq450:text-lgi mq450:leading-[26px]">
                Free
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px]">
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
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-4.svg"
              />
              <div className="relative leading-[24px]">
                Dee’s Hotel, Toronto
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-[63.5px] bg-primary-500 rounded-md flex flex-row items-start justify-start hover:bg-slateblue">
            <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[65px]">
              Register
            </div>
          </button>
        </section>
        <section className="w-[1012px] flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            About this event
          </h3>
          <div className="self-stretch relative text-base leading-[24px]">
            "Escape the hustle and bustle of daily life and join us for a serene
            afternoon at our Ladies Picnic Event! Indulge in delicious treats,
            sip refreshing drinks, and enjoy delightful company amidst nature's
            beauty. Let's create unforgettable memories together in a blissful
            setting. Don't miss out – reserve your spot now!"
          </div>
        </section>
        <div className="w-[470px] flex flex-col items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[30px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[82px] mq450:text-lgi mq450:leading-[26px]">
              Mentor
            </h3>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[62px] text-base">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[55px] mq450:text-lgi mq450:leading-[26px]">
              Tags
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[13px] max-w-full mq650:flex-wrap">
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[35px]">
                    Picnic
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[73px]">
                    Ladies event
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[105px]">
                    OutdoorGathering
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[39px]">
                    Nature
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px] mq650:flex-wrap">
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[82px]">
                    FoodAndDrink
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[60px]">
                    Relaxation
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[66px]">
                    Community
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[61px]">
                    Friendship
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="w-[1012px] h-[51px] flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[16px] max-w-full">
          <h3 className="m-0 w-[185px] h-8 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block shrink-0 [debug_commit:1de1738] mq450:text-lgi mq450:leading-[26px]">
            About this event
          </h3>
          <div className="self-stretch h-[72px] relative text-base leading-[24px] inline-block shrink-0 [debug_commit:1de1738]">
            "Escape the hustle and bustle of daily life and join us for a serene
            afternoon at our Ladies Picnic Event! Indulge in delicious treats,
            sip refreshing drinks, and enjoy delightful company amidst nature's
            beauty. Let's create unforgettable memories together in a blissful
            setting. Don't miss out – reserve your spot now!"
          </div>
        </div>*/}
      </main>
      <header className="absolute top-[0px] left-[0px] right-[0px] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border max-w-full z-[1] text-left text-base text-generic-white font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-contain"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              loading="lazy"
              alt=""
              src="/frame-1231.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[101px] whitespace-nowrap">
                Ladies Picnic
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
                src="/frame-123-1.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                loading="lazy"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Events2;
