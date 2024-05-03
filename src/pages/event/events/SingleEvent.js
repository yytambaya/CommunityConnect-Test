import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../../../contexts/EventProvider";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

const SingleEvent = ({setPage, page}) => {
  const navigate = useNavigate();
  const {event, setEvent} = useEventContext()

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
      
      <Sidebar/>

      <main className="absolute top-[56px] left-[331px] w-[1109px] overflow-hidden flex flex-col items-start justify-start pt-[22px] px-[34px] pb-0 box-border gap-[30px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
        <img
          className="w-[1012px] relative rounded-md h-[400px] overflow-hidden object-cover max-w-full"
          alt=""
          src={event.imageURL}
        />
        <section className="w-[1012px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium mq650:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[14px]">
            <div className="flex flex-row items-start justify-start gap-[16px] text-5xl">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                {event.title}
              </h3>
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <div className="w-2.5 h-2.5 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
              </div>
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit text-primary-500 inline-block min-w-[50px] mq450:text-lgi mq450:leading-[26px]">
                {event.ticketFee == 0? "free" : event.ticketFee}
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-31.svg"
              />
              <div className="relative leading-[24px] inline-block min-w-[87px]">
                {"event.startDate"}
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-2 h-2 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
              </div>
              <div className="relative leading-[24px] inline-block min-w-[72px] whitespace-nowrap">
                {"event.endDate"}
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-4.svg"
              />
              <div className="relative leading-[24px]">
                {event.location}
              </div>
            </div>
          </div>
          <button onClick={() => navigate("/app/register-event")} className="cursor-pointer [border:none] py-3 px-[63.5px] bg-primary-500 rounded-md flex flex-row items-start justify-start hover:bg-slateblue">
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
            {event.description}
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
                {event.categories.map((cat, i) => 
                <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[35px]">
                    {cat}
                  </div>
                </button>
                )}
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
      <Header/>
    </div>
  );
};

export default SingleEvent;
