const FrameComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium">
      <div className="w-[150px] h-11 flex flex-row items-center justify-center gap-[8px]">
        <img
          className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-74-11@2x.png"
        />
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch h-6 relative leading-[24px] font-medium inline-block">
            Hauwa Adam
          </div>
          <div className="w-11 flex-1 flex flex-row items-center justify-start text-xs text-neutral-600">
            <div className="self-stretch flex-1 relative leading-[20px] font-medium">
              2hr ago
            </div>
          </div>
        </div>
      </div>
      <div className="w-[259px] h-6 flex flex-row items-start justify-start py-0 px-12 box-border text-black">
        <div className="self-stretch flex-1 relative leading-[24px]">
          I totally enjoyed it too
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 box-border max-w-full text-xs">
        <div className="w-[545px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
            />
            <div className="w-[13px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch h-5 relative leading-[20px] inline-block">
                15
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
            />
            <div className="w-[13px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch h-5 relative leading-[20px] inline-block">
                15
              </div>
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
