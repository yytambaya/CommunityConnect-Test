import TopNav1 from "../components/TopNav1";
import TopBar1 from "../components/TopBar11";
import FrameComponent3 from "../components/FrameComponent31";

const Event3 = () => {
  return (
    <div className="w-full h-[990px] relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[196px] box-border gap-[612px] leading-[normal] tracking-[normal] text-left text-base text-generic-white font-paragraph-medium-medium mq450:gap-[153px] mq750:gap-[306px] mq1150:h-auto">
      <TopNav1 />
      <main className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:1de1738] max-w-full">
        <TopBar1 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <FrameComponent3 />
        </section>
      </main>
      <div className="w-[1424px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[380px] flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="self-stretch h-12 rounded-md bg-primary-500 flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap">
            <div className="self-stretch w-[100px] relative leading-[24px] font-semibold inline-block">
              Create event
            </div>
          </div>
          <div className="self-stretch h-12 rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-3 px-5 text-primary-600 border-[1px] border-solid border-primary-100">
            <div className="self-stretch w-[54px] relative leading-[24px] font-semibold inline-block">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event3;
