import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-row items-start justify-start pt-0 px-[30px] pb-[375px] box-border gap-[280px] leading-[normal] tracking-[normal] text-center text-xs text-primary-900 font-paragraph-medium-medium mq975:flex-wrap mq975:gap-[140px] mq700:gap-[70px]">
      <div className="w-[181px] flex flex-col items-start justify-start pt-[30.1px] px-0 pb-0 box-border">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/asset-4-1-1@2x.png"
        />
      </div>
      <div className="h-[585px] w-[458px] flex flex-col items-end justify-start pt-[109px] px-0 pb-0 box-border gap-[119px] max-w-full mq975:pt-[71px] mq975:box-border mq450:gap-[59px] mq450:pt-[46px] mq450:box-border">
        <div className="mt-[-183px] self-stretch rounded-xl bg-primary-200 flex flex-row items-start justify-start py-3 px-6 box-border opacity-[0] shrink-0 [debug_commit:1de1738] max-w-full">
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
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 box-border max-w-full shrink-0">
          <form className="m-0 flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start py-10 px-6 box-border gap-[24px] shrink-0 [debug_commit:1de1738] max-w-full mq700:pt-[26px] mq700:pb-[26px] mq700:box-border">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[79px] pl-[79.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <h3 className="m-0 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left mq450:text-lgi mq450:leading-[26px]">
                Reset your password
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[30px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[18.5px]">
                <div className="w-[358px] relative text-base leading-[24px] font-paragraph-medium-medium text-primary-900 text-center inline-block">
                  <p className="m-0">{`Choose a new and secure password to protect `}</p>
                  <p className="m-0">your account</p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                New Password
              </div>
              <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                <input
                  className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block whitespace-nowrap p-0"
                  placeholder="****"
                  type="password"
                />
              </div>
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                Confirm Password
              </div>
              <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-start py-3 px-4 border-[1px] border-solid border-neutral-100">
                <input
                  className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block whitespace-nowrap p-0"
                  placeholder="****"
                  type="password"
                />
              </div>
            </div>
                
                {/*<div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <input
                    className="w-[114px] [border:none] [outline:none] font-medium font-paragraph-medium-medium text-base bg-[transparent] h-6 relative leading-[24px] text-primary-900 text-left inline-block p-0"
                    placeholder="New Password"
                    type="text"
                  />
                  <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] gap-[20px] border-[1px] border-solid border-neutral-200">
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
                      src="/large-button.svg"
                    />
                  </div>
                </div>*/}
                {/*<div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <input
                    className="w-[141px] [border:none] [outline:none] font-medium font-paragraph-medium-medium text-base bg-[transparent] h-6 relative leading-[24px] text-primary-900 text-left inline-block p-0"
                    placeholder="Confirm Password"
                    type="text"
                  />
                  <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] gap-[20px] border-[1px] border-solid border-neutral-200">
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
                      src="/large-button.svg"
                    />
                  </div>
                </div>*/}
              </div>
            </div>
            <button onClick={() => navigate("/password-reset-message")} className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-gray-300 text-left">
                Change password
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
