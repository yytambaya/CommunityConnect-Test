const EmailVerificationMessage = () => {
  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-row items-start justify-start pt-1.5 px-[30px] pb-[565px] box-border gap-[203px] leading-[normal] tracking-[normal] text-left text-5xl text-neutral-900 font-paragraph-medium-medium mq450:gap-[25px] mq725:gap-[51px] mq1050:flex-wrap mq1050:gap-[101px]">
      <div className="w-[181px] flex flex-col items-start justify-start pt-[24.1px] px-0 pb-0 box-border">
        <img
          className="cursor-pointer  self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/asset-4-1-1@2x.png"
        />
      </div>
      <div className="w-[612px] flex flex-col items-start justify-start gap-[39px] max-w-full mq725:gap-[19px]">
        <header className="flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full text-center text-xs text-primary-900 font-paragraph-medium-medium mq725:pl-[37px] mq725:pr-[37px] mq725:box-border">
          <div className="rounded-md bg-secondary-100 flex flex-row items-start justify-start py-3 px-6 box-border max-w-full">
            <div className="relative leading-[20px] font-medium">
              <p className="m-0">
                A message with a confirmation link has been sent to your email
                address.
              </p>
              <p className="m-0">
                Please follow the link to activate your account
              </p>
            </div>
          </div>
        </header>
        <div className="self-stretch rounded-md bg-generic-white flex flex-col items-start justify-start py-10 px-6 box-border gap-[30px] max-w-full mq725:gap-[15px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                Please verify your email
              </h3>
            </div>
            <div className="relative text-base leading-[24px] text-primary-900 text-center">
              <p className="m-0">
                We’ve sent you a link to verify the email address you provided.
                Please click
              </p>
              <p className="m-0">
                the link in the email to verify, then log in.
              </p>
              <p className="m-0">
                If you can’t find it, you can resend the email
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center max-w-full">
            <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 w-[380px] rounded-md flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-slateblue">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left">
                Resend confirmation mail
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationMessage;
