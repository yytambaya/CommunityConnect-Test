import { useEffect, useState } from "react";
import { useCommunityContext } from "../../contexts/CommunityProvider";
import { useNavigate } from "react-router-dom";
import { getDocFromFirestore } from "../../api/crud/firebaseCrud";

const CommunityList = ({setPage, page}) => {
  const [communities, setCommunities] = useState([])
  const [error, setError] = useState("")
  const {community, setCommunity} = useCommunityContext()

  const navigate = useNavigate();


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
      //alert(JSON.stringify(res.data))
      setCommunities(res.data)
      
    }else{
      //alert("Error")
      setError(res.message)
    }

  }

  const handleCLick = (com) => {
    setCommunity(com)
    setPage("SingleCommunity")
  }

    
    return (
      <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-base text-neutral-500 font-paragraph-small-regular">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[1]"
          alt=""
          src="/image-23@2x.png"
        />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden z-[2]"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="w-[331px] box-border overflow-hidden flex flex-row items-start justify-start max-w-full border-r-[1px] border-solid border-neutral-300">
          <div className="relative text-xl tracking-[-0.02em] leading-[28px] font-semibold text-neutral-900 hidden mq450:text-base mq450:leading-[22px]">
            CommunityConnect
          </div>
          <div className="hidden flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-col items-start justify-start py-0 pr-[29px] pl-0 gap-[30px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/frame.svg"
                />
                <div className="relative leading-[24px] font-medium inline-block min-w-[52px]">
                  Events
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/explore-svgrepocom.svg"
                />
                <div className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                  Explore
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/frame-1.svg"
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
            <div className="w-[157px] flex flex-col items-start justify-start gap-[24px] text-sm text-primary-500">
              <div className="self-stretch rounded-md bg-primary-500 flex flex-row items-center justify-center py-2.5 px-4 whitespace-nowrap text-generic-white">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[88px]">
                  Create event
                </div>
              </div>
              <div className="rounded-md bg-primary-50 flex flex-row items-center justify-center py-2 px-[15px] whitespace-nowrap border-[1px] border-solid border-primary-100">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[125px]">
                  Create community
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-50 flex flex-row items-center justify-center py-2 px-4 whitespace-nowrap border-[1px] border-solid border-primary-100">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[98px]">
                  Request event
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-generic-white box-border overflow-hidden flex flex-col items-start justify-start pt-[26px] px-[50px] pb-[471px] gap-[31px] max-w-full z-[1] border-r-[1px] border-solid border-neutral-300 mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:pb-[199px] mq450:box-border mq975:pt-5 mq975:pb-[306px] mq975:box-border">
            <div className="flex flex-row items-start justify-start py-0 px-[21px]">
              <div className="h-[38px] w-[35.7px] relative" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[40px]">
              <div className="flex flex-col items-start justify-start gap-[30px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame.svg"
                  />
                  <div className="relative leading-[24px] font-medium inline-block min-w-[52px]">
                    Events
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/explore-svgrepocom.svg"
                  />
                  <div className="relative leading-[24px] font-medium inline-block min-w-[58px]">
                    Explore
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/frame-1.svg"
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
                <button className="cursor-pointer [border:none] py-2.5 px-[34.5px] bg-primary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
                  <div className="relative text-sm leading-[20px] font-semibold font-paragraph-small-regular text-generic-white text-left inline-block min-w-[88px]">
                    Create event
                  </div>
                </button>
                <button className="cursor-pointer py-2 px-[15px] bg-primary-50 rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-sm leading-[20px] font-semibold font-paragraph-small-regular text-primary-500 text-left inline-block min-w-[125px]">
                    Create community
                  </div>
                </button>
                <button className="cursor-pointer py-2 px-7 bg-primary-50 rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                  <div className="relative text-sm leading-[20px] font-semibold font-paragraph-small-regular text-primary-500 text-left inline-block min-w-[98px]">
                    Request event
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <main className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-904px]">
          <section className="h-[904px] bg-generic-white box-border overflow-y-auto flex flex-col items-start justify-start pt-6 pb-[236px] pr-0 pl-6 gap-[24px] max-w-full text-left text-lg text-primary-900 font-paragraph-small-regular border-b-[1px] border-solid border-neutral-200 mq450:h-auto mq700:pb-[99px] mq700:box-border mq975:pt-[924px] mq975:pb-[153px] mq975:box-border">
            <div className="w-[510px] flex flex-col items-start justify-start pt-0 pb-1.5 pr-5 pl-0 box-border gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit">
                Your community
              </h3>

              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] text-base">
                
                {communities.map ((com, i) => 
                <div onClick={() => handleCLick(com)} className=" cursor-pointer flex-1 rounded-md bg-generic-white box-border flex flex-col items-start justify-start min-w-[230px] border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch h-[86px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-2 pb-3 pr-[66px] pl-[11px] box-border gap-[112px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] shrink-0 [debug_commit:1de1738]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[91px]">
                        {com.name}
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        {com.categories.map((com, i) => 
                            <button key={i} className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-start justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[49px]">
                            {com.name}
                          </div>
                        </button>
                        )}
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-start justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[49px]">
                            Lifestyle
                          </div>
                        </button>
                      </div>
                    </div>
                    <img
                      className="mr-[-303px] w-[30px] h-[30px] relative object-cover shrink-0 [debug_commit:1de1738]"
                      loading="lazy"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                </div>)}


                <div className="flex-1 rounded-md bg-generic-white box-border flex flex-col items-start justify-start min-w-[230px] border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch h-[86px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-2 pb-3 pr-[66px] pl-[11px] box-border gap-[112px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] shrink-0 [debug_commit:1de1738]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[125px]">{`Healthy lifestyle `}</div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-start justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[49px]">
                            Lifestyle
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-start justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[49px]">
                            Lifestyle
                          </div>
                        </button>
                      </div>
                    </div>
                    <img
                      className="mr-[-303px] w-[30px] h-[30px] relative object-cover shrink-0 [debug_commit:1de1738]"
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit">
                Explore other communities
              </h3>
                <div className="w-[1085px] overflow-x-auto flex flex-row items-start justify-start gap-[30px] max-w-full text-base">
                
                
                
                {communities.map((com, i) => 
              <div onClick={() => handleCLick(com)} key={i} className=" cursor-pointer w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                            {com.name}
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                          <img
                            className="h-3 w-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-6.svg"
                          />
                          <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                            Khairat Adam
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        {com.categories.map((cat, i) => 
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[28px]">
                            {cat}
                          </div>
                        </button>)}
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[58px]">
                            Education
                          </div>
                        </button>
                      </div>
                    </div>
                    <button className="cursor-pointer py-[3px] px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-primary-500 text-left inline-block min-w-[37px]">
                        Follow
                      </div>
                    </button>
                  </div>
                </div>)}


                <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                            Techies
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                          <img
                            className="h-3 w-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-6.svg"
                          />
                          <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                            Khairat Adam
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[28px]">
                            Tech
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[58px]">
                            Education
                          </div>
                        </button>
                      </div>
                    </div>
                    <button className="cursor-pointer py-[3px] px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-primary-500 text-left inline-block min-w-[37px]">
                        Follow
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                            Techies
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                          <img
                            className="h-3 w-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-6.svg"
                          />
                          <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                            Khairat Adam
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[28px]">
                            Tech
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[58px]">
                            Education
                          </div>
                        </button>
                      </div>
                    </div>
                    <button className="cursor-pointer py-[3px] px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-primary-500 text-left inline-block min-w-[37px]">
                        Follow
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                            Techies
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                          <img
                            className="h-3 w-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-6.svg"
                          />
                          <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                            Khairat Adam
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[28px]">
                            Tech
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[58px]">
                            Education
                          </div>
                        </button>
                      </div>
                    </div>
                    <button className="cursor-pointer py-[3px] px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                      <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-primary-500 text-left inline-block min-w-[37px]">
                        Follow
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                  <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <img
                      className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                      alt=""
                      src="/image-30@2x.png"
                    />
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                    <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[24px] font-semibold">
                            Techies
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                          <img
                            className="h-3 w-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/frame-6.svg"
                          />
                          <div className="relative leading-[20px] font-medium">
                            Khairat Adam
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[7px]">
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left inline-block min-w-[28px]">
                            Tech
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-[5px] px-3 bg-secondary-50 rounded-xl flex flex-row items-center justify-start hover:bg-powderblue">
                          <div className="relative text-xs leading-[20px] font-medium font-paragraph-small-regular text-secondary-600 text-left">
                            Education
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-primary-50 flex flex-row items-start justify-center py-[3px] px-5 text-xs text-primary-500 border-[1px] border-solid border-primary-100">
                      <div className="relative leading-[20px] font-medium">
                        Follow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1085px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[30px] [debug_commit:1de1738] max-w-full text-base">
              <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <img
                    className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-30@2x.png"
                  />
                </div>
                <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                  <div className="w-[161px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                          Techies
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                        <img
                          className="h-3 w-3 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-6.svg"
                        />
                        <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                          Khairat Adam
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-secondary-600">
                      <div className="h-[30px] w-[52px] rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Tech
                        </div>
                      </div>
                      <div className="h-[30px] flex-1 rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Education
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-[5px] px-5 text-xs text-primary-500 border-[1px] border-solid border-primary-100">
                    <div className="self-stretch w-[37px] relative leading-[20px] font-medium inline-block">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <img
                    className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-30@2x.png"
                  />
                </div>
                <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                  <div className="w-[161px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                          Techies
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                        <img
                          className="h-3 w-3 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-6.svg"
                        />
                        <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                          Khairat Adam
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-secondary-600">
                      <div className="h-[30px] w-[52px] rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Tech
                        </div>
                      </div>
                      <div className="h-[30px] flex-1 rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Education
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-[5px] px-5 text-xs text-primary-500 border-[1px] border-solid border-primary-100">
                    <div className="self-stretch w-[37px] relative leading-[20px] font-medium inline-block">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <img
                    className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-30@2x.png"
                  />
                </div>
                <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                  <div className="w-[161px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                          Techies
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                        <img
                          className="h-3 w-3 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-6.svg"
                        />
                        <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                          Khairat Adam
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-secondary-600">
                      <div className="h-[30px] w-[52px] rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Tech
                        </div>
                      </div>
                      <div className="h-[30px] flex-1 rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Education
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-[5px] px-5 text-xs text-primary-500 border-[1px] border-solid border-primary-100">
                    <div className="self-stretch w-[37px] relative leading-[20px] font-medium inline-block">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <img
                    className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-30@2x.png"
                  />
                </div>
                <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                  <div className="w-[161px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[24px] font-semibold inline-block min-w-[61px]">
                          Techies
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                        <img
                          className="h-3 w-3 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-6.svg"
                        />
                        <div className="relative leading-[20px] font-medium inline-block min-w-[78px]">
                          Khairat Adam
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-secondary-600">
                      <div className="h-[30px] w-[52px] rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Tech
                        </div>
                      </div>
                      <div className="h-[30px] flex-1 rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Education
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-[5px] px-5 text-xs text-primary-500 border-[1px] border-solid border-primary-100">
                    <div className="self-stretch w-[37px] relative leading-[20px] font-medium inline-block">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[232px] rounded-md bg-generic-white box-border shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-neutral-100">
                <div className="self-stretch h-[140px] relative rounded-t-md rounded-b-none overflow-hidden shrink-0 bg-[url('/public/follow-button@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[-7.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <img
                    className="absolute top-[-1.1px] left-[0px] w-[230px] h-[153.2px] object-cover hidden"
                    alt=""
                    src="/image-30@2x.png"
                  />
                </div>
                <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-2.5 pb-4 gap-[16px]">
                  <div className="w-[161px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[24px] font-semibold">
                          Techies
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[4px] text-xs">
                        <img
                          className="h-3 w-3 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-6.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Khairat Adam
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs text-secondary-600">
                      <div className="h-[30px] w-[52px] rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Tech
                        </div>
                      </div>
                      <div className="h-[30px] flex-1 rounded-xl bg-secondary-50 flex flex-row items-center justify-start py-[5px] px-3 box-border">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Education
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[30px] rounded-md bg-primary-50 box-border flex flex-row items-start justify-center py-[5px] px-5 text-xs text-primary-500 border-[1px] border-solid border-primary-100">
                    <div className="self-stretch w-[37px] relative leading-[20px] font-medium inline-block">
                      Follow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="w-[1110px] h-14 relative box-border overflow-hidden shrink-0 hidden max-w-full z-[5] text-sm text-neutral-600 border-b-[1px] border-solid border-neutral-300">
          <div className="absolute top-[12px] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden border-[1px] border-solid border-neutral-300">
            <img
              className="absolute top-[7px] left-[12px] w-[18px] h-[18px] overflow-hidden"
              alt=""
              src="/frame-16.svg"
            />
            <div className="absolute top-[6px] left-[34px] leading-[20px] inline-block min-w-[47px]">{`Search `}</div>
            <img
              className="absolute top-[7px] left-[171px] w-[18px] h-[18px] overflow-hidden"
              alt=""
              src="/frame-17.svg"
            />
            <div className="absolute top-[6px] left-[193px] leading-[20px] inline-block min-w-[38px]">
              Abuja
            </div>
            <img
              className="absolute top-[calc(50%_-_10px)] left-[calc(50%_+_20px)] w-px h-[20.5px]"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <img
            className="absolute top-[13px] left-[1006px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
            alt=""
            src="/frame-123.svg"
          />
          <img
            className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/frame-74@2x.png"
          />
          <div className="absolute top-[calc(50%_-_18px)] left-[16px] rounded-md flex flex-row items-center justify-center py-1 px-2.5 gap-[10px] text-lg text-black">
            <div className="relative leading-[28px] font-medium inline-block min-w-[98px]">
              Ladies club
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-18.svg"
            />
          </div>
        </div>
        <header className="w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-primary-700 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border max-w-full z-[3] text-left text-sm text-neutral-600 font-paragraph-small-regular mq975:pl-[25px] mq975:box-border">
          <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
            <img
              className="w-[131px] h-[34px] relative object-cover"
              loading="lazy"
              alt=""
              src="/asset-4-1-1@2x.png"
            />
          </div>
          <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-3.5 px-[25px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
            <input
              className="w-[99px] [border:none] [outline:none] font-medium font-paragraph-small-regular text-lg bg-[transparent] h-7 relative leading-[28px] text-generic-white text-left inline-block p-0"
              placeholder="Community"
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
                  src="/vector-7.svg"
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
                  src="/frame-123-1.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                  alt=""
                  src="/frame-74@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  };
  
  export default CommunityList;
  