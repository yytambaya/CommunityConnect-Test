import { useMemo } from "react";

const IputField1 = ({ label, placeholder, propWidth, propFlex }) => {
  const iputField1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-base text-primary-900 font-paragraph-medium-medium"
      style={iputField1Style}
    >
      <div className="relative leading-[24px] font-medium inline-block min-w-[100px]">
        {label}
      </div>
      <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 text-sm border-[1px] border-solid border-neutral-100">
        <div className="relative leading-[20px]">{placeholder}</div>
      </div>
    </div>
  );
};

export default IputField1;
