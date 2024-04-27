const TopBar3 = () => {
  return (
    <header className="self-stretch bg-primary-700 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border top-[0] z-[99] sticky max-w-full text-left text-lg text-generic-white font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
      <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
        <img
          className="w-[131px] h-[34px] relative object-cover"
          loading="lazy"
          alt=""
          src="/asset-4-1-11@2x.png"
        />
      </div>
      <div className="h-14 flex-1 relative bg-primary-700 box-border overflow-hidden max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
        <div className="absolute top-[14px] left-[25px] leading-[28px] font-medium hidden whitespace-nowrap">
          Explore
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
              loading="lazy"
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
              loading="lazy"
              alt=""
              src="/frame-123-31.svg"
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
  );
};

export default TopBar3;
