import { useMemo } from "react";

const LogicGate = ({
  vIP,
  prop,
  propLeft,
  propBorderRadius,
  propMinWidth,
  propMinWidth1,
  propMargin,
}) => {
  const logicGateStyle = useMemo(() => {
    return {
      left: propLeft,
      borderRadius: propBorderRadius,
    };
  }, [propLeft, propBorderRadius]);

  const vIPStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      margin: propMargin,
    };
  }, [propMinWidth1, propMargin]);

  return (
    <div
      className="absolute top-[144px] left-[991px] bg-generic-white box-border w-[212px] overflow-hidden flex flex-col items-end justify-start pt-3 pb-[22px] pr-[9px] pl-0 gap-[16px] text-left text-base text-primary-800 font-paragraph-medium-medium border-t-[1px] border-solid border-neutral-100 border-r-[1px] border-b-[1px]"
      style={logicGateStyle}
    >
      <div className="mr-[-11px] w-[214px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border gap-[15px] text-9xl text-primary-500">
        <div className="flex flex-row items-start justify-start py-0 pr-[58px] pl-[58.5px]">
          <button className="cursor-pointer [border:none] py-1 px-[11px] bg-primary-50 rounded-3xl flex flex-row items-start justify-start hover:bg-thistle-100">
            <div
              className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[29px]"
              style={vIPStyle}
            >
              {vIP}
            </div>
          </button>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[60px] pl-[58.5px]">
          <div
            className="relative tracking-[-0.02em] leading-[36px] font-semibold inline-block min-w-[95px] whitespace-nowrap mq450:text-3xl mq450:leading-[29px]"
            style={divStyle}
          >
            {prop}
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
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/checkline.svg"
          />
          <div className="flex-1 relative leading-[24px]">Priority Support</div>
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
  );
};

export default LogicGate;
