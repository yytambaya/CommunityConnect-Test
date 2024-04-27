import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Signup1 = () => {
  const navigate = useNavigate();

  const onAgeFieldContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-row items-start justify-start pt-[30.1px] px-[30px] pb-[59px] box-border gap-[259px] leading-[normal] tracking-[normal] mq725:gap-[65px] mq450:gap-[32px] mq975:flex-wrap mq1000:gap-[129px]">
      <img
        className="h-[47px] w-[181px] relative object-cover"
        loading="lazy"
        alt=""
        src="/asset-4-1-1@2x.png"
      />
      <div className="w-[500px] flex flex-col items-start justify-start pt-[31.9px] px-0 pb-0 box-border min-w-[500px] max-w-full mq725:min-w-full mq975:flex-1">
        <form className="m-0 self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-xl bg-generic-white box-border overflow-hidden flex flex-col items-start justify-start py-9 px-[59px] gap-[16px] max-w-full border-[1px] border-solid border-neutral-300 mq725:py-5 mq725:px-[29px] mq725:box-border mq975:pt-[23px] mq975:pb-[23px] mq975:box-border">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-2">
            <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left mq450:text-base mq450:leading-[22px]">
              Create your account
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-300">
              <img
                className="h-6 w-6 relative object-contain min-h-[24px]"
                alt=""
                src="/image-23@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left">
                  Sign up with Google
                </div>
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-300">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/facebook-svgrepocom1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left">
                  Sign up with Facebook
                </div>
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-300">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/apple173-svgrepocom.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left inline-block min-w-[127px]">
                  Sign up with Apple
                </div>
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[110px]">
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/vector-41.svg"
              />
            </div>
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-black text-left inline-block min-w-[12px] mq450:w-full mq450:h-3">
              or
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[110px]">
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/vector-51.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
            <div
              className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full cursor-pointer"
              onClick={onAgeFieldContainerClick}
            >
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[45px]">
                  Name
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                  <input
                    className="w-[63px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400 text-left inline-block p-0"
                    placeholder="Full name"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                  Email Address
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                  <input
                    className="w-[136px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400 text-left inline-block whitespace-nowrap p-0"
                    placeholder="example@email.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <input
                  className="w-[75px] [border:none] [outline:none] font-medium font-paragraph-medium-medium text-base bg-[transparent] h-6 relative leading-[24px] text-primary-900 text-left inline-block p-0"
                  placeholder="Password"
                  type="text"
                />
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] gap-[20px] border-[1px] border-solid border-neutral-100">
                  <div className="w-[90px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                      <div className="h-1.5 w-1.5 relative rounded-4xs bg-neutral-400 overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[302px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[12px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[31px]">
                Age
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
                <div className="relative text-base leading-[24px] font-paragraph-medium-medium text-primary-900 text-left">
                  I am 18 of years or older
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between py-[7px] pr-[7px] pl-[13px] relative gap-[20px] mq450:flex-wrap">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.08)] rounded-10xs bg-whitesmoke box-border border-[1px] border-solid border-lightgray-100" />
              <div className="w-[130px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
                <img
                  className="self-stretch h-7 relative max-w-full overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/robot1.svg"
                />
              </div>
              <div className="w-[66px] flex flex-col items-end justify-start pt-1.5 pb-[0.5px] pr-[5.6px] pl-[5px] box-border gap-[7.3px] z-[1]">
                <div className="flex flex-row items-start justify-end py-0 pr-[12.8px] pl-3.5">
                  <img
                    className="h-[28.5px] w-[28.6px] relative"
                    loading="lazy"
                    alt=""
                    src="/recaptcha-symbol.svg"
                  />
                </div>
                <img
                  className="self-stretch h-[19.7px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/text.svg"
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center whitespace-nowrap hover:bg-slateblue">
            <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-gray-300 text-left inline-block min-w-[119px]">
              Create account
            </div>
          </button>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
            <div className="relative text-xs leading-[20px] text-left">
              <span className="font-semibold font-paragraph-medium-medium text-neutral-500">
                By creating an account, you accept our
              </span>
              <span className="font-paragraph-medium-medium text-gray-400">{` `}</span>
              <span className="[text-decoration:underline] font-semibold font-paragraph-medium-medium text-primary-600">
                terms and conditions
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-neutral-900 text-left whitespace-nowrap">
                Already have an account?
              </div>
              <div className="relative text-base [text-decoration:underline] leading-[24px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[47px] whitespace-nowrap">
                Log in
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup1;
