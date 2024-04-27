const FrameComponent1 = () => {
  return (
    <div className="self-stretch rounded-2xl bg-neutral-100 flex flex-row items-center justify-between py-2.5 px-[11px] gap-[20px] text-left text-lg text-black font-paragraph-medium-medium border-[1px] border-solid border-neutral-200">
      <div className="w-8 rounded-6xs bg-primary-500 flex flex-row items-center justify-center p-1 box-border">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/frame-43.svg"
        />
      </div>
      <div className="relative leading-[28px] inline-block min-w-[9px]">1</div>
      <div className="w-8 flex flex-row items-center justify-center p-1 box-border">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/frame-52.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
