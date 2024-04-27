import { useMemo } from "react";

const FrameComponent = ({ createAccount, propDisplay, propMinWidth }) => {
  const createAccountStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
      <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
        <div
          className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[65px]"
          style={createAccountStyle}
        >
          {createAccount}
        </div>
      </button>
      <button className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[54px]">
          Cancel
        </div>
      </button>
    </div>
  );
};

export default FrameComponent;
