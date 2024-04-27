import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  const onComponent13ContainerClick = useCallback(() => {
    navigate("/post");
  }, [navigate]);

  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-xl text-neutral-900 font-paragraph-medium-medium mq450:h-auto mq450:min-h-[960]">
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
      <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] border-r-[1px] border-solid border-neutral-300">
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            CommunityConnect
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px] text-base text-neutral-500">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/frame11.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[52px]">
                Events
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-12.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                Explore
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-11.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[88px]">
                Community
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-2.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[49px]">
                Profile
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-primary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[88px]">
                Create event
              </div>
            </button>
            <button className="cursor-pointer py-2 px-[15px] bg-primary-50 rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[98px]">
                Request event
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[56px] left-[331px] w-[674px] h-[904px] overflow-hidden flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border gap-[15px] max-w-full text-base text-primary-900 mq450:h-auto">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-[26px] box-border max-w-full text-sm text-neutral-600">
          <div
            className="flex-1 rounded-7xl box-border overflow-hidden flex flex-row items-start justify-start py-[7px] px-3 gap-[8px] shrink-0 [debug_commit:1de1738] max-w-full cursor-pointer border-[1px] border-solid border-neutral-300 mq450:flex-wrap"
            onClick={onComponent13ContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-74-5@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="relative leading-[20px]">
                Share your experience
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
          alt=""
          src="/vector-9.svg"
        />
        <div className="w-[642px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-74-11@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[104px]">
                  Khairat Adam
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px] text-xs text-neutral-600">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[44px]">
                    2hr ago
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="w-1 h-1 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                  </div>
                  <div className="relative leading-[20px] font-medium text-secondary-500 inline-block min-w-[53px]">
                    #SDS123
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-black">
              <div className="w-[542px] relative leading-[24px] inline-block shrink-0 max-w-full">
                Surrounded by laughter, good food, and the warmth of friendship,
                today's Ladies Picnic Event was pure bliss! From delightful
                conversations to the serene backdrop of nature, every moment was
                a treasure. Here's to making memories that last a lifetime!
                #PicnicPerfection #FriendshipGoals #NatureEscape"
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xs">
              <div className="w-[545px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame-32.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative leading-[20px] inline-block min-w-[13px]">
                      15
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame-41.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative leading-[20px] inline-block min-w-[13px]">
                      15
                    </div>
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
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
          loading="lazy"
          alt=""
          src="/vector-9.svg"
        />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
          alt=""
        />
        <div className="w-[644px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px] shrink-0 [debug_commit:1de1738] max-w-full">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[8px]">
              <img
                className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-74-11@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[100px]">
                  Jessica John
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px] text-xs text-neutral-600">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[44px] z-[1]">
                    2hr ago
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="w-1 h-1 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                  </div>
                  <div className="relative leading-[20px] font-medium text-secondary-500 inline-block min-w-[53px] z-[1]">
                    #SDS123
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-black">
              <div className="w-[542px] relative leading-[24px] inline-block shrink-0 max-w-full">
                "Today's Tech Expo was a whirlwind of innovation, from
                mind-bending AI to game-changing gadgets - feeling energized and
                excited about the future of tech!"
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1 box-border max-w-full">
              <img
                className="w-[542px] relative rounded-md max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/frame-173@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xs">
              <div className="w-[542px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame-32.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative leading-[20px] inline-block min-w-[13px]">
                      15
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame-7.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative leading-[20px] inline-block min-w-[13px]">
                      15
                    </div>
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
        </div>
        <div className="self-stretch h-px flex flex-row items-start justify-start relative shrink-0 [debug_commit:1de1738]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/vector-9.svg"
            />
          </div>
        </div>
        <div className="w-[642px] flex flex-row items-start justify-start pt-0 px-[26px] pb-[183px] box-border max-w-full shrink-0">
          <div className="h-[38px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[22px] shrink-0 [debug_commit:1de1738] max-w-full mq450:h-auto">
            <div className="h-[38px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] shrink-0 [debug_commit:1de1738]">
              <img
                className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-74-11@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[104px]">
                  Khairat Adam
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px] text-xs text-neutral-600">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[44px] z-[1]">
                    2hr ago
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="w-1 h-1 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                  </div>
                  <div className="relative leading-[20px] font-medium text-secondary-500 inline-block min-w-[53px] z-[1]">
                    #SDS123
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0 text-black">
              <div className="w-[545px] flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
                  <div className="h-[120px] flex-1 relative leading-[24px] inline-block max-w-full">
                    Surrounded by laughter, good food, and the warmth of
                    friendship, today's Ladies Picnic Event was pure bliss! From
                    delightful conversations to the serene backdrop of nature,
                    every moment was a treasure. Here's to making memories that
                    last a lifetime! #PicnicPerfection #FriendshipGoals
                    #NatureEscape"
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xs text-primary-900 mq450:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                    />
                    <div className="w-[13px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <div className="self-stretch h-5 relative leading-[20px] inline-block">
                        15
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                    />
                    <div className="w-[13px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <div className="self-stretch h-5 relative leading-[20px] inline-block">
                        15
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
          <img
            className="flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
            alt=""
          />
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
          alt=""
        />
        <div className="w-[644px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-end justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
              <div className="w-[161px] h-11 flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-74-11@2x.png"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="w-[100px] h-6 relative leading-[24px] font-medium inline-block">
                    Jessica John
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[6px] text-xs text-neutral-600">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[6px]">
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium z-[1]">
                        2hr ago
                      </div>
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <div className="w-1 h-1 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 relative leading-[20px] font-medium text-secondary-500 z-[1]">
                      #SDS123
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full text-black">
                <div className="h-[72px] w-[542px] relative leading-[24px] inline-block shrink-0 max-w-full">
                  "Today's Tech Expo was a whirlwind of innovation, from
                  mind-bending AI to game-changing gadgets - feeling energized
                  and excited about the future of tech!"
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <img
                  className="w-[542px] relative rounded-md max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                  alt=""
                  src="/frame-173@2x.png"
                />
              </div>
            </div>
            <div className="w-[542px] flex flex-row items-start justify-between gap-[20px] max-w-full text-xs mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                />
                <div className="w-[13px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch h-5 relative leading-[20px] inline-block">
                    15
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                />
                <div className="w-[13px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch h-5 relative leading-[20px] inline-block">
                    15
                  </div>
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
          alt=""
        />
      </div>
      <div className="absolute top-[0px] right-[0px] box-border w-[435px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[625px] gap-[29px] max-w-full text-sm text-neutral-600 border-l-[1px] border-solid border-neutral-300">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-3 px-6 pb-2.5 gap-[20px] border-b-[1px] border-solid border-neutral-300 mq450:flex-wrap">
          <div className="w-[286px] rounded-md box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-1 px-3 gap-[82px] border-[1px] border-solid border-neutral-300">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px]">{`Search `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[5.5px]">
              <img
                className="self-stretch w-px relative max-h-full min-h-[21px]"
                alt=""
                src="/queue-manager.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[38px]">
                Abuja
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                alt=""
                src="/variable-access.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-6 box-border max-w-full text-neutral-700">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="relative leading-[20px] font-medium">
                Suggested accounts
              </div>
              <div className="relative leading-[20px] font-semibold text-primary-500 inline-block min-w-[47px]">
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
                  <div className="relative leading-[20px] inline-block min-w-[107px]">
                    Kathryn Murphy
                  </div>
                </div>
                <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
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
                  <div className="relative leading-[20px] inline-block min-w-[85px]">
                    Jane Cooper
                  </div>
                </div>
                <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
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
                  <div className="relative leading-[20px] inline-block min-w-[98px]">
                    Esther Howard
                  </div>
                </div>
                <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
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
                  <div className="relative leading-[20px] inline-block min-w-[88px]">
                    Jenny Wilson
                  </div>
                </div>
                <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
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
                  <div className="relative leading-[20px] inline-block min-w-[107px]">
                    Ronald Richards
                  </div>
                </div>
                <button className="cursor-pointer py-[3px] px-3 bg-primary-50 w-16 rounded-md box-border flex flex-row items-center justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
                    Follow
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[330px] box-border w-[675px] h-14 overflow-hidden hidden text-lg text-black border-b-[1px] border-solid border-neutral-300">
        <div className="absolute top-[14px] left-[25px] leading-[28px] font-medium inline-block min-w-[73px]">
          Timeline
        </div>
      </div>
      <header className="absolute top-[0px] left-[calc(50%_-_720px)] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border max-w-full z-[2] text-left text-sm text-neutral-600 font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-cover"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-3.5 px-[25px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <input
            className="w-[65px] [border:none] [outline:none] font-medium font-paragraph-medium-medium text-lg bg-[transparent] h-7 relative leading-[28px] text-generic-white text-left inline-block p-0"
            placeholder="Explore"
            type="text"
          />
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[7px]">
              <img
                className="self-stretch w-px relative max-h-full min-h-[21px]"
                alt=""
                src="/queue-manager.svg"
              />
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                    type="radio"
                  />
                </div>
                <div className="relative leading-[20px] inline-block min-w-[38px]">
                  Abuja
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                alt=""
                src="/frame-123-13.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Post;
