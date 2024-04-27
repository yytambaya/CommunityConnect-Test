import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/events1");
  }, [navigate]);

  return (
    <div className="w-full h-[1200px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-lg text-neutral-900 font-paragraph-medium-medium mq725:h-auto mq725:min-h-[960]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[49px] pb-[535px] gap-[50px] text-xl border-r-[1px] border-solid border-neutral-300">
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            CommunityConnect
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px] text-base text-neutral-500">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/frame1.svg"
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
                src="/explore-svgrepocom51.svg"
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
            <div on className="flex flex-row items-center justify-start gap-[16px]">
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
            <button onClick={() => navigate('/app/create-event')} className="cursor-pointer [border:none] py-2.5 px-[21px] bg-primary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[88px]">
                Create event
              </div>
            </button>
            <button className="cursor-pointer py-2 px-[15px] bg-[transparent] rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[98px]">
                Request event
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[330px] box-border w-[675px] h-14 overflow-hidden hidden text-black border-b-[1px] border-solid border-neutral-300">
        <div className="absolute top-[14px] left-[25px] leading-[28px] font-medium inline-block min-w-[59px]">
          Events
        </div>
      </div>
      <div className="absolute top-[56px] left-[331px] w-[674px] overflow-hidden flex flex-col items-start justify-start pt-4 pb-0 pr-0 pl-4 box-border gap-[24px] max-w-full text-primary-900">
        <div className="flex flex-row items-start justify-start gap-[16px] max-w-[114%] shrink-0 mq725:flex-wrap">
          <button className="cursor-pointer [border:none] py-2 px-5 bg-primary-500 rounded-xl flex flex-row items-start justify-start hover:bg-slateblue">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[15px]">
              All
            </div>
          </button>
          <button
            className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[79px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100"
            onClick={onFrameButton1Click}
          >
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[39px]">
              Sports
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[75px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[35px]">
              Music
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[73px]">{`Food & Drink`}</div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[82px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[42px]">
              Charity
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[77px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[37px]">
              Online
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[87px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[47px]">
              Concert
            </div>
          </button>
          <button className="cursor-pointer py-2 px-[19px] bg-[transparent] h-9 w-[68px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="self-stretch w-7 relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block">
              Tech
            </div>
          </button>
        </div>
        <div className="w-[968px] flex flex-col items-start justify-start gap-[16px] max-w-[148%] shrink-0">
          <div className="relative leading-[28px] font-semibold">
            Upcoming events
          </div>
          <div className="w-[678px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full text-sm">
            <div className="w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[140px] relative rounded-t-md rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/frame-127@2x.png"
              />
              <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[42px] box-border gap-[4px] mq450:h-auto">
                <div className="flex flex-row items-start justify-start py-0 px-3 shrink-0">
                  <div className="flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative text-base leading-[24px] font-semibold inline-block min-w-[102px]">
                        Ladies Picnic
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="relative leading-[20px] font-medium inline-block min-w-[64px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-neutral-700">
                        <div className="relative leading-[20px] font-medium">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[467px] flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-[204%] gap-[20px] text-base text-primary-500 mq450:flex-wrap">
                  <div className="h-[132px] w-[230px] flex flex-col items-start justify-start">
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 gap-[20px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                        $10
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[30px] w-[30px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-31@2x.png"
              />
              <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px]">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative text-base leading-[24px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="relative leading-[20px] font-medium inline-block min-w-[64px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-neutral-700">
                        <div className="relative leading-[20px] font-medium">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] gap-[20px] text-base text-primary-500">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                    $15
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start text-xs">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-22@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[10px]">
                <div className="w-[209px] flex flex-row items-start justify-start py-0 px-3 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative text-sm leading-[20px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="relative leading-[20px] font-medium inline-block min-w-[55px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-neutral-700">
                        <div className="relative leading-[20px] font-medium whitespace-pre-wrap inline-block min-w-[119px]">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] px-2.5 pb-2 gap-[20px] text-sm text-primary-500">
                  <div className="relative leading-[20px] font-semibold inline-block min-w-[18px] whitespace-nowrap">
                    $5
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start text-xs">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-7@2x.png"
              />
              <div className="self-stretch flex-[0.9437] rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[10px]">
                <div className="w-[209px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex-1 relative text-sm leading-[20px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="w-[143px] h-5 flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-[55px] relative leading-[20px] font-medium inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="w-[119px] h-5 flex flex-row items-start justify-start text-neutral-700">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium whitespace-pre-wrap">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] px-2.5 pb-2 gap-[20px] text-sm text-primary-500">
                  <div className="h-5 w-[18px] relative leading-[20px] font-semibold inline-block whitespace-nowrap">
                    $5
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[722px] flex flex-col items-start justify-start gap-[16px] max-w-[110%] shrink-0">
          <div className="relative leading-[28px] font-semibold">
            Popular events
          </div>
          <div className="w-[678px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full text-sm">
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-31@2x.png"
              />
              <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px]">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative text-base leading-[24px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="relative leading-[20px] font-medium inline-block min-w-[64px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-neutral-700">
                        <div className="relative leading-[20px] font-medium">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] gap-[20px] text-base text-primary-500">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                    $15
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[140px] relative rounded-t-md rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-127@2x.png"
              />
              <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[42px] box-border gap-[4px] mq450:h-auto">
                <div className="flex flex-row items-start justify-start py-0 px-3 shrink-0">
                  <div className="flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative text-base leading-[24px] font-semibold inline-block min-w-[102px]">
                        Ladies Picnic
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="relative leading-[20px] font-medium inline-block min-w-[64px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-neutral-700">
                        <div className="relative leading-[20px] font-medium">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[467px] flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-[204%] gap-[20px] text-base text-primary-500 mq450:flex-wrap">
                  <div className="h-[132px] w-[230px] flex flex-col items-start justify-start">
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 gap-[20px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                        $10
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[30px] w-[30px] relative object-cover"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start text-xs">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-22@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[10px]">
                <div className="w-[209px] flex flex-row items-start justify-start py-0 px-3 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative text-sm leading-[20px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="relative leading-[20px] font-medium inline-block min-w-[55px] whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-neutral-700">
                        <div className="relative leading-[20px] font-medium whitespace-pre-wrap inline-block min-w-[119px]">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] px-2.5 pb-2 gap-[20px] text-sm text-primary-500">
                  <div className="relative leading-[20px] font-semibold inline-block min-w-[18px] whitespace-nowrap">
                    $5
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[722px] flex flex-col items-start justify-start gap-[16px] max-w-[110%] shrink-0">
          <div className="relative leading-[28px] font-semibold">
            Popular events
          </div>
          <div className="w-[678px] h-[840px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full text-sm">
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-71@2x.png"
              />
              <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="w-[163px] h-5 flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="w-[135px] h-5 flex flex-row items-start justify-start text-neutral-700">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px] text-base text-primary-500">
                  <div className="self-stretch w-[29px] relative leading-[24px] font-semibold inline-block whitespace-nowrap">
                    $15
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[262px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-81@2x.png"
              />
              <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px]">
                <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
                  <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold inline-block">
                          Ladies Picnic
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                          <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="w-[135px] flex-1 flex flex-row items-start justify-start text-neutral-700">
                          <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px] text-base text-primary-500">
                    <div className="self-stretch w-[29px] relative leading-[24px] font-semibold inline-block whitespace-nowrap">
                      $10
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="mb-[-96px] h-[30px] w-[30px] relative object-cover shrink-0 [debug_commit:1de1738]"
                  alt=""
                  src="/image-13@2x.png"
                />
              </div>
            </div>
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start text-xs">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-91@2x.png"
              />
              <div className="self-stretch flex-[0.9437] rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[10px]">
                <div className="w-[209px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex-1 relative text-sm leading-[20px] font-semibold">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="w-[143px] h-5 flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-[55px] relative leading-[20px] font-medium inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="w-[119px] h-5 flex flex-row items-start justify-start text-neutral-700">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium whitespace-pre-wrap">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] px-2.5 pb-2 gap-[20px] text-sm text-primary-500">
                  <div className="h-5 w-[18px] relative leading-[20px] font-semibold inline-block whitespace-nowrap">
                    $5
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] right-[0px] box-border w-[435px] overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[410px] gap-[21px] max-w-full text-sm text-neutral-600 border-l-[1px] border-solid border-neutral-300">
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
                src="/organizer.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-0 pl-[23px] box-border gap-[16px] max-w-full text-primary-900">
          <div className="relative leading-[20px] font-medium">
            Explore event happening at different locations
          </div>
          <div className="flex flex-col items-start justify-start gap-[40.5px] max-w-full text-5xl text-generic-white">
            <div className="w-[411px] h-[146.5px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[12px] max-w-full">
              <div className="overflow-hidden shrink-0 flex flex-row items-start justify-start py-[57px] px-[54.3px] bg-[url('/public/value-transformer@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[69px] mq450:text-lgi mq450:leading-[26px]">
                  Lagos
                </h2>
              </div>
              <div className="overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[57px] px-[60.3px] pb-[57.5px] bg-[url('/public/input-splitter@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[58px] mq450:text-lgi mq450:leading-[26px]">
                  Kano
                </h2>
              </div>
              <div className="self-stretch w-[178px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[57px] pr-[45.7px] pl-[46.3px] box-border bg-[url('/public/value-transformer@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <h2 className="m-0 self-stretch flex-1 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Kaduna
                </h2>
              </div>
            </div>
            <div className="w-[398px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full text-sm text-neutral-700">
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
      </div>
      <header className="absolute top-[0px] left-[0px] right-[0px] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border max-w-full z-[2] text-left text-sm text-neutral-600 font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
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
            className="w-[59px] [border:none] [outline:none] font-medium font-paragraph-medium-medium text-lg bg-[transparent] h-7 relative leading-[28px] text-generic-white text-left inline-block p-0"
            placeholder="Events"
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
                src="/frame-123-12.svg"
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

export default Events;
