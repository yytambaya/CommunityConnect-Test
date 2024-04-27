const Component = ({ frame127, frame }) => {
  return (
    <div className="h-[262px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start text-left text-sm text-primary-900 font-paragraph-medium-medium">
      <img
        className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={frame127}
      />
      <div className="self-stretch h-[122px] relative rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0">
        <div className="absolute top-[8px] left-[12px] w-[163px] h-[72px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
            <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold inline-block">
              Ladies Picnic
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px] text-neutral-800">
              <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                Sat, Mar 27
              </div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
              </div>
              <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                10:00 AM
              </div>
            </div>
            <div className="w-[135px] flex-1 flex flex-row items-start justify-start text-neutral-700">
              <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                Dee’s Hotel, Toronto
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2px] left-[0px] w-full h-9 overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px] text-base text-primary-500">
          <div className="self-stretch w-[29px] relative leading-[24px] font-semibold inline-block whitespace-nowrap">
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
        <img
          className="absolute top-[186px] left-[437px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/image-13@2x.png"
        />
      </div>
    </div>
  );
};

export default Component;
