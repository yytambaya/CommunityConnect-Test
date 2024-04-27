const Login1 = () => {
  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-row items-start justify-start pt-[30.1px] px-[30px] pb-20 box-border gap-[259px] leading-[normal] tracking-[normal] mq725:gap-[65px] mq450:gap-[32px] mq975:flex-wrap mq1000:gap-[129px]">
      <img
        className="h-[47px] w-[181px] relative object-cover"
        loading="lazy"
        alt=""
        src="/asset-4-1-1@2x.png"
      />
      <div className="w-[500px] flex flex-col items-start justify-start pt-[49.9px] px-0 pb-0 box-border min-w-[500px] max-w-full mq725:min-w-full mq450:pt-[21px] mq450:box-border mq975:flex-1 mq975:pt-8 mq975:box-border">
        <form className="m-0 self-stretch shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] rounded-xl bg-generic-white box-border overflow-hidden flex flex-col items-start justify-start pt-[34px] px-[59px] pb-[78px] gap-[20px] max-w-full border-[1px] border-solid border-neutral-300 mq725:pl-[29px] mq725:pr-[29px] mq725:box-border mq450:pt-5 mq450:pb-[33px] mq450:box-border mq975:pt-[22px] mq975:pb-[51px] mq975:box-border">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-1">
            <h2 className="m-0 relative text-xl tracking-[-0.02em] leading-[28px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left inline-block min-w-[63px] mq450:text-base mq450:leading-[22px]">
              Sign in
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
              <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-400">
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px]"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left">
                    Sign in with Google
                  </div>
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-400">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/facebook-svgrepocom3.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left">
                    Sign in with Facebook
                  </div>
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded flex flex-row items-start justify-center gap-[14px] border-[1px] border-solid border-neutral-400">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/apple173-svgrepocom1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-neutral-900 text-left inline-block min-w-[122px]">
                    Sign in with Apple
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[109px]">
                  Email Address
                </div>
                <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
                  <input
                    className="w-[134px] [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-primary-900 text-left inline-block whitespace-nowrap p-0"
                    placeholder="johndoe@email.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[75px]">
                    Password
                  </div>
                  <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] gap-[20px] border-[1px] border-solid border-neutral-200">
                    <div className="w-[90px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                        <div className="h-1.5 w-1.5 relative rounded-4xs bg-primary-900 overflow-hidden shrink-0" />
                      </div>
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame.svg"
                    />
                  </div>
                </div>
                <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                  Your password must be at least 6 characters
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="m-0 h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    type="checkbox"
                  />
                  <div className="relative text-xs leading-[20px] font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[83px]">
                    Remember me
                  </div>
                </div>
                <div className="relative text-xs [text-decoration:underline] leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[103px]">
                  Forgot password?
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
                <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[43px]">
                  Login
                </div>
              </button>
              <div className="relative text-xs leading-[20px] text-left">
                <span className="font-paragraph-medium-medium">
                  <span className="text-neutral-700">
                    By signing in, you accept our
                  </span>
                  <span className="text-gray-400">{` `}</span>
                </span>
                <span className="[text-decoration:underline] font-medium font-paragraph-medium-medium text-primary-500">
                  terms and conditions
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[58px] pl-[58.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-neutral-900 text-left">
                Already have an account?
              </div>
              <div className="relative text-base [text-decoration:underline] leading-[24px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[58px] whitespace-nowrap">
                Sign up
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login1;
