const FrameComponent1 = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[14px] text-left text-base text-primary-900 font-paragraph-medium-medium">
      <h3 className="m-0 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
        Ladies picnic
      </h3>
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
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/frame-4.svg"
        />
        <div className="relative leading-[24px]">Dee’s Hotel, Toronto</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
