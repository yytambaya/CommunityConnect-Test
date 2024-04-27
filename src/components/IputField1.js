import { useMemo } from "react";

const IputField = ({ label, placeholder, propWidth }) => {
  const iputFieldStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[194px] text-left text-base text-primary-900 font-paragraph-medium-medium"
      style={iputFieldStyle}
    >
      <div className="relative leading-[24px] font-medium inline-block min-w-[89px]">
        {label}
      </div>
      <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
        <input
          className="w-[33px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block p-0"
          placeholder="John"
          type="text"
        >
          {placeholder}
        </input>
      </div>
    </div>
  );
};

export default IputField;
