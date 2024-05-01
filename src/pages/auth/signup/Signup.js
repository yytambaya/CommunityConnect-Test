import { useNavigate } from "react-router-dom";
import FrameComponent from "../../../components/FrameComponent";

const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full relative bg-primary-700 overflow-hidden flex flex-row items-start justify-start pt-[30.1px] px-[30px] pb-[59px] box-border gap-[259px] leading-[normal] tracking-[normal] mq725:gap-[65px] mq450:gap-[32px] mq975:flex-wrap mq1000:gap-[129px]">
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer h-[47px] w-[181px] relative object-contain"
        loading="lazy"
        alt=""
        src="/asset-4-1-1@2x.png"
      />
      <div className="w-[500px] flex flex-col items-start justify-start pt-[31.9px] px-0 pb-0 box-border min-w-[500px] max-w-full mq725:min-w-full mq975:flex-1">
        <FrameComponent />
      </div>
    </div>
  );
};

export default Signup;
