import TopBar2 from "../components/TopBar21";

const Event4 = () => {
  return (
    <div className="w-full h-[990px] relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[232px] box-border gap-[648px] leading-[normal] tracking-[normal] text-left text-base text-generic-white font-paragraph-medium-medium mq450:gap-[162px] mq725:gap-[324px]">
      <main className="self-stretch flex flex-col items-end justify-start gap-[15px] shrink-0 [debug_commit:1de1738] max-w-full">
        <TopBar2 />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <button className="cursor-pointer [border:none] py-3 px-6 bg-secondary-100 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-powderblue-200">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-center">
              Your registration was successful
            </div>
          </button>
        </div>
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-primary-500 font-paragraph-medium-medium">
          <div className="w-[646px] rounded-md bg-generic-white flex flex-col items-start justify-start py-10 px-6 box-border gap-[40px] max-w-full mq650:gap-[20px] mq650:pt-[26px] mq650:pb-[26px] mq650:box-border">
            <div className="flex flex-col items-center justify-start gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                Congratulations!
              </h3>
              <div className="flex flex-col items-start justify-start gap-[30px] max-w-full text-base text-primary-900">
                <div className="relative leading-[24px] inline-block max-w-full">
                  <p className="m-0">{`Thank you for registering for Ladies picnic! Your ticket purchase has been `}</p>
                  <p className="m-0">
                    successfully purchased. Here are the details:
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px] text-primary-500">
                  <div className="relative font-medium">
                    <span className="leading-[24px]">Event name:</span>
                    <span className="text-lg leading-[28px]">
                      {" "}
                      Ladies Picnic
                    </span>
                  </div>
                  <div className="relative font-medium">
                    <span className="leading-[24px]">Date:</span>
                    <span className="text-lg leading-[28px]">
                      {" "}
                      Sat, Mar 27, 2024
                    </span>
                  </div>
                  <div className="relative font-medium whitespace-nowrap">
                    <span className="leading-[24px]">Time:</span>
                    <span className="text-lg leading-[28px]"> 10:00 AM</span>
                  </div>
                  <div className="relative font-medium">
                    <span className="leading-[24px]">{`Location: `}</span>
                    <span className="text-lg leading-[28px]">
                      Dee’s Hotel, Toronto
                    </span>
                  </div>
                </div>
                <div className="relative leading-[24px] text-black">
                  <p className="m-0">
                    Your ticket have been emailed to you separately. Please make
                    sure to keep
                  </p>
                  <p className="m-0">
                    them safe until the event. If you have any questions or need
                    further assistance,
                  </p>
                  <p className="m-0">feel free to contact us.</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-center justify-center hover:bg-slateblue">
                <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[123px]">
                  View my tickets
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[115px]">
                  Explore events
                </div>
              </button>
            </div>
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

export default Event4;
