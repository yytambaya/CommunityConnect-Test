import FrameComponent from "./FrameComponent9";

const Frame = () => {
  return (
    <div className="w-[1440px] bg-generic-white max-w-full overflow-hidden flex flex-row items-start justify-start pt-[90px] px-[280px] pb-[244px] box-border gap-[193.5px] leading-[normal] tracking-[normal] text-left text-xl text-black font-paragraph-medium-medium mq450:gap-[24px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[48px] mq800:pl-[70px] mq800:pr-[70px] mq800:box-border mq1325:flex-wrap mq1325:gap-[97px] mq1325:pl-[140px] mq1325:pr-[140px] mq1325:box-border">
      <FrameComponent basicMentor="Basic Mentor" />
      <div className="flex flex-col items-center justify-start gap-[10px]">
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
          <button className="cursor-pointer py-0.5 px-2.5 bg-success-50 rounded-3xl flex flex-row items-center justify-start whitespace-nowrap border-[1px] border-solid border-success-200 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkseagreen">
            <div className="relative text-lg leading-[28px] font-medium font-paragraph-medium-medium text-success-500 text-left">
              Premium Mentor
            </div>
          </button>
        </div>
      </div>
      <FrameComponent
        basicMentor="VIP Mentor"
        basicMentorBorder="1px solid #fde68a"
        basicMentorBackgroundColor="#fffbeb"
        propColor="#ffd700"
        propMinWidth="96px"
      />
    </div>
  );
};

export default Frame;
