import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border [row-gap:20px] max-w-full z-[2] text-left text-base text-generic-white font-paragraph-medium-medium mq1150:flex-wrap mq1150:pl-5 mq1150:pr-5 mq1150:pb-5 mq1150:box-border">
      <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
        <img
          className="w-[131px] h-[34px] relative object-cover"
          loading="lazy"
          alt=""
          src="/asset-4-1-11@2x.png"
        />
      </div>
      <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 min-w-[94px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
        <div
          className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <img
            className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
            alt=""
            src="/frame-123-22.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative leading-[24px] font-medium inline-block min-w-[52px]">
              Events
            </div>
          </div>
        </div>
      </div>
      <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full text-sm text-neutral-600 mq450:flex-wrap">
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
  );
};

export default TopBar;
