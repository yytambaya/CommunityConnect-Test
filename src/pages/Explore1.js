import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent4";
import TopBar from "../components/TopBar";

const Explore = () => {
  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-neutral-500 font-paragraph-medium-medium mq450:h-auto mq450:min-h-[960]">
      <img
        className="absolute top-[100px] left-[calc(50%_-_720px)] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-231@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[331px] h-[960px] overflow-hidden flex flex-row items-start justify-start py-[95px] px-[71px] border-r-[1px] border-solid border-neutral-300">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/frame11.svg"
              />
              <div className="relative leading-[24px] font-medium">Events</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/explore-svgrepocom4.svg"
              />
              <div className="relative leading-[24px] font-medium">Explore</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-11.svg"
              />
              <div className="relative leading-[24px] font-medium">
                Community
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-2.svg"
              />
              <div className="relative leading-[24px] font-medium">Profile</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-primary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left">
                Create event
              </div>
            </button>
            <button className="cursor-pointer py-2 px-[15px] bg-primary-50 rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-500 text-left">
                Request event
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[56px] left-[331px] w-[674px] h-[904px] overflow-hidden flex flex-col items-start justify-start gap-[15.5px] max-w-full text-primary-900 mq450:h-auto">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
          alt=""
          src="/vector-91.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 px-6 shrink-0">
          <div className="flex flex-row items-start justify-start gap-[8px] shrink-0 [debug_commit:1de1738]">
            <img
              className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-74-11@2x.png"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[24px] font-medium">
                  Khairat Adam
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/successfilled-svgrepocom.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px] text-xs text-neutral-600">
                <div className="relative leading-[20px] font-medium">
                  2hr ago
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="w-1 h-1 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                </div>
                <div className="relative leading-[20px] font-medium text-secondary-500">
                  #SDS123
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-[60px] box-border max-w-full shrink-0 text-black">
          <div className="w-[545px] flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
              <div className="flex-1 relative leading-[24px] inline-block max-w-full">
                Surrounded by laughter, good food, and the warmth of friendship,
                today's Ladies Picnic Event was pure bliss! From delightful
                conversations to the serene backdrop of nature, every moment was
                a treasure. Here's to making memories that last a lifetime!
                #PicnicPerfection #FriendshipGoals #NatureEscape"
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xs text-primary-900 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <input
                  className="cursor-pointer m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  type="radio"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[20px]">15</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <input
                  className="cursor-pointer m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  type="radio"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[20px]">15</div>
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-5.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] shrink-0 [debug_commit:1de1738] max-w-full text-sm text-neutral-600">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-9.svg"
          />
          <div className="w-[656px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
            <div className="flex-1 rounded-7xl box-border overflow-hidden flex flex-row items-start justify-between py-[7px] pr-[13px] pl-[11px] max-w-full gap-[20px] border-[1px] border-solid border-neutral-300 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74-5@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative leading-[20px]">Post your reply</div>
                </div>
              </div>
              <img
                className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                alt=""
                src="/frame-1232.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent3 />
        <FrameComponent2 successFilledSvgrepocom="/successfilled-svgrepocom-1.svg" />
        <FrameComponent2 successFilledSvgrepocom="/successfilled-svgrepocom-2.svg" />
        <FrameComponent1 />
        <div className="flex flex-row items-start justify-start py-0 px-6 box-border max-w-full shrink-0">
          <FrameComponent />
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
          alt=""
        />
      </div>
      <div className="absolute top-[0px] right-[0px] box-border w-[435px] overflow-hidden flex flex-row items-start justify-start py-[85px] px-6 min-h-[960px] max-w-full text-sm text-neutral-700 border-l-[1px] border-solid border-neutral-300">
        <div className="w-[378px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="relative leading-[20px] font-medium">
              Suggested accounts
            </div>
            <div className="relative leading-[20px] font-semibold text-primary-500">
              See All
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-primary-900">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74@2x.png"
                />
                <div className="relative leading-[20px]">Kathryn Murphy</div>
              </div>
              <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left">
                  Follow
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74-1@2x.png"
                />
                <div className="relative leading-[20px]">Jane Cooper</div>
              </div>
              <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left">
                  Follow
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74-2@2x.png"
                />
                <div className="relative leading-[20px]">Esther Howard</div>
              </div>
              <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left">
                  Follow
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74-3@2x.png"
                />
                <div className="relative leading-[20px]">Jenny Wilson</div>
              </div>
              <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left">
                  Follow
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74-4@2x.png"
                />
                <div className="relative leading-[20px]">Ronald Richards</div>
              </div>
              <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left">
                  Follow
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TopBar />
    </div>
  );
};

export default Explore;
