import { useEffect, useState } from "react";
import FrameComponent1 from "../../components/FrameComponent11";
import FrameComponent from "../../components/FrameComponent6";
import TopBar from "../../components/TopBar2";
import { getDocFromFirestore } from "../../api/crud/firebaseCrud";
import { useCommunityContext } from "../../contexts/CommunityProvider";

const CommunityView = ({setPage, page}) => {
  const [communities, setCommunities] = useState([])
  const [error, setError] = useState("")
  //const {community, setCommunity} = useCommunityContext()


  useEffect(() => {
    getCommunities()
  }, [])

  /*useEffect(() => {
    alert(events)
  }, [events])*/

  const getCommunities = async () => {
    const collectionName = "Community"
    const res = await getDocFromFirestore(collectionName)
    if(res.status == 200){
      //alert("Success")
      alert(JSON.stringify(res.data))
      setCommunities(res.data)
      
    }else{
      //alert("Error")
      setError(res.message)
    }

  }

  const handleCLick = (event) => {
    s//etCommunity(event)
    //setPage("SingleEvent")
  }


  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-xl text-neutral-900 font-paragraph-medium-medium">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[1]"
        alt=""
        src="/image-231@2x.png"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[2]"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="box-border overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] max-w-full border-r-[1px] border-solid border-neutral-300 mq450:gap-[25px] mq450:pl-5 mq450:pr-5 mq450:pb-[226px] mq450:box-border mq1050:pt-5 mq1050:pb-[348px] mq1050:box-border">
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
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/explore-svgrepocom8.svg"
              />
              <div className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                Explore
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-13.svg"
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
      <main className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-904px]">
        <section className="h-[904px] w-[1109px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-6 px-6 pb-0 box-border gap-[16px] max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium mq450:h-auto">
          <div className="w-[1013px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full shrink-0 text-9xl text-generic-white">
            <div className="flex-1 rounded-md overflow-hidden flex flex-row items-start justify-between py-11 px-6 box-border bg-[url('/public/frame-205@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] mq450:flex-wrap">
              <div className="w-[259px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-semibold font-inherit mq450:text-3xl mq450:leading-[29px]">
                    Ladies club
                  </h2>
                  <div className="relative text-base leading-[24px] font-medium inline-block min-w-[101px]">
                    121 members
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] py-2.5 px-4 bg-primary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
                    <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[88px]">
                      Create event
                    </div>
                  </button>
                  <button className="cursor-pointer py-2 px-[15px] bg-primary-50 rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                    <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[91px]">
                      Create a post
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                    loading="lazy"
                    alt=""
                    src="/frame-12341.svg"
                  />
                  <img
                    className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
                    loading="lazy"
                    alt=""
                    src="/frame-207.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent1 />
          <img
            className="w-[674px] relative max-h-full hidden max-w-full"
            alt=""
          />
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 shrink-0 text-lg">
            <div className="relative leading-[28px] font-semibold inline-block min-w-[49px] shrink-0 [debug_commit:1de1738]">
              Posts
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[26px] shrink-0">
            <div className="flex flex-row items-start justify-start gap-[8px] shrink-0 [debug_commit:1de1738]">
              <img
                className="h-10 w-10 relative rounded-[65.96px] overflow-hidden shrink-0 object-cover"
                loading="lazy"
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
          </div>
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-12 pb-2 box-border max-w-full shrink-0 text-black mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
            <div className="w-[939px] relative leading-[24px] inline-block shrink-0 [debug_commit:1de1738] max-w-full">
              Surrounded by laughter, good food, and the warmth of friendship,
              today's Ladies Picnic Event was pure bliss! From delightful
              conversations to the serene backdrop of nature, every moment was a
              treasure. Here's to making memories that last a lifetime!
              #PicnicPerfection #FriendshipGoals #NatureEscape"
            </div>
          </div>
          <div className="w-[1013px] h-11 shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-2.5 box-border gap-[16px] [debug_commit:1de1738] max-w-full text-xs mq450:h-auto">
            <div className="w-[960px] flex flex-row items-start justify-end py-0 px-[18px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] mq450:flex-wrap">
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
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
              alt=""
            />
          </div>
          <img
            className="w-[674px] relative max-h-full hidden max-w-full"
            alt=""
          />
          <div className="w-[1042px] flex flex-row items-start justify-start pt-0 px-[29px] pb-2 box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-end justify-start gap-[12px] shrink-0 [debug_commit:1de1738] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
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
                  <div className="h-12 w-[940px] relative leading-[24px] inline-block shrink-0 max-w-full">
                    "Today's Tech Expo was a whirlwind of innovation, from
                    mind-bending AI to game-changing gadgets - feeling energized
                    and excited about the future of tech!"
                  </div>
                </div>
              </div>
              <img
                className="w-[940px] relative rounded-md max-h-full overflow-hidden object-cover max-w-full"
                alt=""
                src="/frame-1731@2x.png"
              />
            </div>
          </div>
          <div className="w-[674px] flex flex-col items-end justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full text-xs">
            <div className="w-[660px] flex flex-row items-start justify-end py-0 px-[59px] box-border max-w-full mq750:pl-[29px] mq750:pr-[29px] mq750:box-border">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                alt=""
              />
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                alt=""
              />
            </div>
          </div>
          <FrameComponent />
          <img
            className="w-[674px] relative max-h-full hidden max-w-full"
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
            className="w-[674px] relative max-h-full shrink-0 [debug_commit:1de1738] max-w-full"
            alt=""
          />
        </section>
      </main>
      <header className="w-[1110px] h-14 sticky box-border overflow-hidden shrink-0 hidden top-[0] z-[99] max-w-full text-left text-sm text-neutral-600 font-paragraph-medium-medium border-b-[1px] border-solid border-neutral-300">
        <div className="absolute top-[12px] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
          <img
            className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-33.svg"
          />
          <div className="absolute top-[6px] left-[34px] leading-[20px] inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
          <img
            className="absolute top-[7px] left-[171px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="/frame-42.svg"
          />
          <div className="absolute top-[6px] left-[193px] leading-[20px] inline-block min-w-[38px]">
            Abuja
          </div>
          <img
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_20px)] w-px h-[20.5px]"
            alt=""
            src="/queue-manager.svg"
          />
        </div>
        <img
          className="absolute top-[13px] left-[1006px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/variable-manager.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
        <div className="absolute top-[calc(50%_-_18px)] left-[16px] rounded-md flex flex-row items-center justify-center py-1 px-2.5 gap-[10px] text-lg text-black">
          <div className="relative leading-[28px] font-medium inline-block min-w-[98px] whitespace-nowrap">
            Ladies club
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/frame-35.svg"
          />
        </div>
      </header>
      <TopBar />
    </div>
  );
};

export default CommunityView;
