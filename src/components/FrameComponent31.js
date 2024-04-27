import FrameComponent4 from "./FrameComponent41";
import FrameComponent from "./FrameComponent8";

const FrameComponent3 = () => {
  return (
    <div className="w-[614px] flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium mq750:gap-[20px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Payment method
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
          <div className="flex flex-row items-start justify-start gap-[7px] max-w-full">
            <div className="relative leading-[24px]">
              Logged in as email@example.com
            </div>
            <div className="relative [text-decoration:underline] leading-[24px] text-primary-500 inline-block min-w-[68px]">
              Not you?
            </div>
          </div>
          <FrameComponent4 />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-lg">
        <div className="relative leading-[28px] font-medium">Order summary</div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[24px] text-base text-black">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="relative leading-[24px] inline-block min-w-[17px]">
              1x
            </div>
            <div className="relative leading-[24px] inline-block min-w-[51px] whitespace-nowrap">
              $15.00
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl text-primary-500 mq450:flex-wrap">
            <div className="relative tracking-[-0.02em] leading-[28px] font-medium inline-block min-w-[46px] mq450:text-base mq450:leading-[22px]">
              Total
            </div>
            <div className="relative tracking-[-0.02em] leading-[28px] font-medium inline-block min-w-[64px] whitespace-nowrap mq450:text-base mq450:leading-[22px]">
              $15.00
            </div>
          </div>
        </div>
      </div>
      <FrameComponent
        createAccount="Checkout"
        propDisplay="inline-block"
        propMinWidth="75px"
      />
    </div>
  );
};

export default FrameComponent3;
