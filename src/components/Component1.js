const Component1 = ({ parallelProcessor, frame }) => {
  return (
    <div className="w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start text-left text-sm text-primary-900 font-paragraph-medium-medium">
      <img
        className="self-stretch h-[140px] relative rounded-t-md rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={parallelProcessor}
      />
      <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[42px] box-border gap-[4px] mq450:h-auto">
        <div className="flex flex-row items-start justify-start py-0 px-3 shrink-0">
          <div className="flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-base leading-[24px] font-semibold inline-block min-w-[102px]">
                Ladies Picnic
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                  Sat, Mar 27
                </div>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                </div>
                <div className="relative leading-[20px] font-medium inline-block min-w-[64px] whitespace-nowrap">
                  10:00 AM
                </div>
              </div>
              <div className="flex flex-row items-start justify-start text-neutral-700">
                <div className="relative leading-[20px] font-medium">
                  Dee’s Hotel, Toronto
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[467px] flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-[204%] gap-[20px] text-base text-primary-500 mq450:flex-wrap">
          <div className="h-[132px] w-[230px] flex flex-col items-start justify-start">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 gap-[20px]">
              <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                $10
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  alt=""
                  src={frame}
                />
              </div>
            </div>
          </div>
          <img
            className="h-[30px] w-[30px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Component1;
