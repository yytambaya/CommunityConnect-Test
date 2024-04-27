import TopNav from "../components/TopNav";
import TopBar from "../components/TopBar4";
import IputField from "../components/IputField1";
import FrameComponent1 from "../components/FrameComponent13";
import FrameComponent from "../components/FrameComponent8";

const Event1 = () => {
  return (
    <div className="w-full h-[990px] relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[181px] box-border gap-[597px] leading-[normal] tracking-[normal] text-left text-base text-generic-white font-paragraph-medium-medium mq450:gap-[149px] mq750:gap-[298px] mq1150:h-auto">
      <TopNav />
      <main className="self-stretch flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:1de1738] max-w-full">
        <TopBar />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium">
          <div className="w-[614px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-5xl">
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Save a spot
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[7px] max-w-full">
                    <div className="relative leading-[24px]">
                      Logged in as email@example.com
                    </div>
                    <div className="relative [text-decoration:underline] leading-[24px] text-primary-500 inline-block min-w-[68px]">
                      Not you?
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                      <IputField label="First name*" placeholder="John" />
                      <IputField
                        label="Last name*"
                        placeholder="Doe"
                        propWidth="unset"
                      />
                    </div>
                    <IputField
                      label="Email address*"
                      placeholder="Johndoe@gmail.com"
                      propWidth="unset"
                    />
                  </div>
                </div>
                <div className="w-[161px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[56px]">
                    Tickets
                  </div>
                  <FrameComponent1 />
                </div>
              </div>
              <div className="w-[279px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[119px]">
                  Order summary
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[23px]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="relative leading-[24px] inline-block min-w-[17px]">
                      1x
                    </div>
                    <div className="relative leading-[24px] inline-block min-w-[44px] whitespace-nowrap">
                      $0.00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[43px]">
                      Total
                    </div>
                    <div className="relative leading-[28px] font-medium inline-block min-w-[51px] whitespace-nowrap">
                      $0.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent createAccount="Register" />
          </div>
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

export default Event1;
