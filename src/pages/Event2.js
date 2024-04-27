import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent21";

const Event2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full h-[990px] relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[304px] box-border gap-[720px] leading-[normal] tracking-[normal] mq450:gap-[180px] mq750:gap-[360px] mq1150:h-auto">
      <header className="self-stretch h-14 sticky box-border overflow-hidden shrink-0 hidden top-[0] z-[99] text-left text-sm text-neutral-600 font-paragraph-medium-medium border-b-[1px] border-solid border-neutral-300">
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-1237.svg"
        />
        <div className="absolute top-[12px] left-[1030px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
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
          className="absolute top-[13px] left-[1336px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-1236.svg"
        />
        <img
          className="absolute top-[13px] left-[1378px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
      </header>
      <section className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-sm text-neutral-600 font-paragraph-medium-medium">
        <div className="self-stretch bg-primary-700 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border [row-gap:20px] max-w-full z-[1] mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:pb-5 mq1150:box-border">
          <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
            <img
              className="w-[131px] h-[34px] relative object-cover"
              loading="lazy"
              alt=""
              src="/asset-4-1-11@2x.png"
            />
          </div>
          <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 min-w-[106px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[12px]"
              onClick={onFrameButtonClick}
            >
              <img
                className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                alt=""
                src="/frame-123-24.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[64px]">
                  Register
                </div>
              </div>
            </button>
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
                  src="/frame-123-31.svg"
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
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <FrameComponent2 />
        </div>
      </section>
      <section className="w-[1424px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-generic-white font-paragraph-medium-medium">
        <div className="w-[380px] flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="self-stretch h-12 rounded-md bg-primary-500 flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap">
            <div className="self-stretch w-[100px] relative leading-[24px] font-semibold inline-block">
              Create event
            </div>
          </div>
          <div className="self-stretch h-12 rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-3 px-5 text-primary-600 border-[1px] border-solid border-primary-100">
            <div className="self-stretch w-[54px] relative leading-[24px] font-semibold inline-block">
              Cancel
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event2;
