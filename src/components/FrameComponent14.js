const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-primary-800 font-paragraph-medium-medium">
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
  );
};

export default FrameComponent1;
