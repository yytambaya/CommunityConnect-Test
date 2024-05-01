import { useNavigate } from "react-router-dom";
import LargeButtonSendLink from "../../../components/LargeButtonSendLink";

const ForgotPassword = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-row items-start justify-start pt-0 px-[30px] pb-[475px] box-border gap-[280px] leading-[normal] tracking-[normal] text-center text-xs text-primary-900 font-paragraph-medium-medium mq975:flex-wrap mq975:gap-[140px] mq700:gap-[70px]">
      <div className="w-[181px] flex flex-col items-start justify-start pt-[30.1px] px-0 pb-0 box-border">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/asset-4-1-1@2x.png"
        />
      </div>
      <div className="h-[485px] w-[458px] flex flex-col items-start justify-start pt-[109px] px-0 pb-0 box-border gap-[119px] max-w-full mq450:gap-[59px] mq700:pt-[71px] mq700:box-border">
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
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[7px] box-border max-w-full shrink-0">
          <LargeButtonSendLink />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
