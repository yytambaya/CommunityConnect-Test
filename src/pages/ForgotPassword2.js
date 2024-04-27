const ForgotPassword2 = () => {
  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-col items-end justify-start pt-1.5 pb-[613px] pr-[412px] pl-[30px] box-border gap-[31.9px] leading-[normal] tracking-[normal] text-left text-5xl text-neutral-900 font-paragraph-medium-medium mq450:pr-5 mq450:box-border mq725:gap-[16px] mq725:pr-[206px] mq725:box-border">
      <header className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="w-[847.5px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:w-[533.5px]">
          <div className="w-[181px] flex flex-col items-start justify-start pt-[24.1px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/asset-4-1-1@2x.png"
            />
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-secondary-100 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-powderblue-200 mq450:hidden">
            <div className="relative text-xs leading-[20px] font-paragraph-medium-medium text-primary-900 text-center">
              Your password has been successfully changed
            </div>
          </button>
        </div>
      </header>
      <div className="w-[615px] rounded-md bg-generic-white flex flex-col items-start justify-start py-10 px-6 box-border gap-[30px] max-w-full mq650:gap-[15px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              Reset your password
            </h3>
          </div>
          <div className="relative text-base leading-[24px] text-primary-900 text-center">
            Your password has been reset, you can now login using the new
            password.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 w-[380px] rounded-md flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-slateblue">
            <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left">
              Continue to login
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
