import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[1297px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
      <div className="w-[569px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <button onClick={() => navigate('/app/events')} className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
          <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[94px]">
            Publish now
          </div>
        </button>
        <button className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
          <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[78px]">
            Edit event
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
