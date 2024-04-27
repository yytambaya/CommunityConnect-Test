import { useMemo } from "react";

const FrameComponent = ({
  basicMentor,
  basicMentorBorder,
  basicMentorBackgroundColor,
  propColor,
  propMinWidth,
}) => {
  const premiumMentorBoxStyle = useMemo(() => {
    return {
      border: basicMentorBorder,
      backgroundColor: basicMentorBackgroundColor,
    };
  }, [basicMentorBorder, basicMentorBackgroundColor]);

  const basicMentorStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className="flex flex-col items-center justify-start gap-[10px] text-left text-xl text-black font-paragraph-medium-medium">
      <img
        className="w-[140px] h-[140px] relative rounded-81xl overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/frame-232@2x.png"
      />
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="relative tracking-[-0.02em] leading-[28px] font-medium inline-block min-w-[88px] mq450:text-base mq450:leading-[22px]">
          John Doe
        </div>
        <button
          className="cursor-pointer py-0.5 px-2.5 bg-primary-50 rounded-3xl flex flex-row items-center justify-start whitespace-nowrap border-[1px] border-solid border-neutral-200 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray-200"
          style={premiumMentorBoxStyle}
        >
          <div
            className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[113px]"
            style={basicMentorStyle}
          >
            {basicMentor}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
