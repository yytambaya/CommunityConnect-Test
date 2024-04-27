const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[14px] text-left text-base text-primary-800 font-paragraph-medium-medium">
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
        <img className="h-px w-[214px] relative" alt="" src="/vector-13.svg" />
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
          <div className="flex-1 relative leading-[24px]">Basic Support</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/checkline.svg"
          />
          <div className="flex-1 relative leading-[24px]">Request Event</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
