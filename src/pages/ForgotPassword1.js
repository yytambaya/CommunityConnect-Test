import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword1 = () => {
  const navigate = useNavigate();

  const onForgotPasswordContainer1Click = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  return (
    <div
      className="w-full h-[960px] relative bg-primary-700 overflow-hidden flex flex-col items-end justify-start pt-[30.1px] pb-[667px] pr-[451px] pl-[30px] box-border gap-[40.1px] leading-[normal] tracking-[normal] cursor-pointer text-center text-xs text-primary-900 font-paragraph-medium-medium mq450:pr-5 mq450:box-border mq725:gap-[20px] mq725:pr-[225px] mq725:box-border"
      onClick={onForgotPasswordContainer1Click}
    >
      <div className="mt-[-104.10000000000002px] w-[538px] flex flex-row items-start justify-end py-0 px-10 box-border max-w-full shrink-0">
        <div className="flex-1 rounded-xl bg-primary-200 flex flex-row items-start justify-start py-3 px-6 box-border opacity-[0] max-w-full">
          <div className="h-10 flex-1 relative leading-[20px] inline-block max-w-full">
            <p className="m-0">
              A message with a confirmation link has been sent to your email
              address.
            </p>
            <p className="m-0">
              Please follow the link to activate your account
            </p>
          </div>
        </div>
      </div>
      <header className="self-stretch flex flex-col items-start justify-start gap-[31.9px] max-w-full shrink-0 text-left text-5xl text-neutral-900 font-paragraph-medium-medium mq650:gap-[16px]">
        <img
          className="w-[181px] h-[47px] relative object-cover"
          loading="lazy"
          alt=""
          src="/asset-4-1-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[538px] rounded-md bg-generic-white flex flex-col items-start justify-start py-10 px-6 box-border gap-[24px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit whitespace-nowrap">
                Forgot your password?
              </h1>
            </div>
            <div className="relative text-base leading-[24px] text-center text-primary-900">
              <p className="m-0">
                <span className="font-paragraph-medium-medium text-primary-900">{`We just emailed a reset link to `}</span>
                <span className="font-semibold font-paragraph-medium-medium text-primary-500">
                  johndoe@gmail.com
                </span>
                <span>{`. `}</span>
              </p>
              <p className="m-0 whitespace-pre-wrap">
                Click the link, and you’ll be prompted to choose a new password
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ForgotPassword1;
