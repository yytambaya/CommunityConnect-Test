import { useMemo } from "react";

const IputField = ({ label, placeholder, propMinWidth, propMinWidth1 }) => {
  const labelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const placeholderStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-base text-primary-900 font-paragraph-medium-medium">
      <div
        className="relative leading-[24px] font-medium inline-block min-w-[45px]"
        style={labelStyle}
      >
        {label}
      </div>
      <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 whitespace-nowrap text-sm border-[1px] border-solid border-neutral-100">
        <div
          className="relative leading-[20px] inline-block min-w-[63px]"
          style={placeholderStyle}
        >
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default IputField;
