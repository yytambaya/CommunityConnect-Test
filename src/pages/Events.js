import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const onErrorSignalerContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-neutral-500 font-paragraph-medium-medium mq1350:h-auto mq1350:min-h-[960]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[331px] h-[960px] overflow-hidden flex flex-row items-start justify-start py-[95px] px-[50px] border-r-[1px] border-solid border-neutral-300">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[16px] text-primary-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
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
                alt=""
                src="/explore-svgrepocom5.svg"
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
            <button className="cursor-pointer py-2 px-[15px] bg-[transparent] rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-silver-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
              <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[98px]">
                Request event
              </div>
            </button>
          </div>
        </div>
      </div>
      <header className="absolute top-[0px] left-[330px] bg-generic-white box-border w-[1110px] h-14 overflow-hidden hidden text-left text-base text-primary-900 font-paragraph-medium-medium border-b-[1px] border-solid border-neutral-300">
        <img
          className="absolute top-[13px] left-[24px] rounded-81xl w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/frame-1233.svg"
        />
        <div className="absolute top-[16px] left-[66px] leading-[24px] font-medium inline-block min-w-[47px] whitespace-nowrap">
          Lagos
        </div>
        <div className="absolute top-[calc(50%_-_16px)] left-[700px] rounded-md box-border w-[286px] h-8 overflow-hidden text-sm text-neutral-600 border-[1px] border-solid border-neutral-300">
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
          src="/frame-123-11.svg"
        />
        <img
          className="absolute top-[13px] left-[1048px] rounded-[65.96px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame-74-5@2x.png"
        />
      </header>
      <main className="absolute top-[56px] left-[331px] w-[1109px] overflow-hidden flex flex-row items-end justify-start pt-6 pb-0 pr-0 pl-6 box-border gap-[145px] max-w-full text-left text-sm text-primary-900 font-paragraph-medium-medium mq1350:flex-wrap">
        <section className="h-[880px] w-[1085px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-sm text-primary-900 font-paragraph-medium-medium mq450:h-auto">
          <div className="w-[230px] flex flex-col items-start justify-start gap-[44px] shrink-0 [debug_commit:1de1738] text-lg">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-neutral-800">
              <div className="self-stretch flex flex-col items-start justify-center py-0 pr-6 pl-0 gap-[14px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[108px]">
                  Best events in
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-9xl text-black">
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[36px] font-medium font-inherit inline-block min-w-[101px] mq450:text-3xl mq450:leading-[29px]">
                    Toronto
                  </h1>
                  <button className="cursor-pointer py-[3px] px-[21px] bg-primary-50 w-[81px] rounded-md box-border flex flex-row items-center justify-start border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[37px]">
                      Follow
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-generic-white flex flex-col items-start justify-start text-sm text-primary-900">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
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
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[28px] font-semibold inline-block min-w-[121px]">
                This weekend
              </div>
              <div className="self-stretch rounded-md bg-generic-white flex flex-col items-start justify-start text-sm">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
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
            </div>
            <div className="self-stretch h-[306px] flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[28px] font-semibold inline-block min-w-[102px]">
                Free events
              </div>
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start text-sm">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-21@2x.png"
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
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
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
            </div>
          </div>
          <div className="h-[880px] w-[230px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border shrink-0">
            <div className="self-stretch h-[982px] flex flex-col items-start justify-start gap-[68px] shrink-0 [debug_commit:1de1738]">
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-neutral-800">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-neutral-700">
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
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-neutral-800">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-neutral-700">
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
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-5@2x.png"
                />
                <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative text-base leading-[24px] font-semibold">
                          <p className="m-0">Unleash The Power of Tech</p>
                          <p className="m-0">in Agricultural Sector</p>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-neutral-800">
                          <div className="relative leading-[20px] font-medium">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="relative leading-[20px] font-medium whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-neutral-700">
                          <div className="relative leading-[20px] font-medium">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] gap-[20px] text-base text-primary-500">
                    <div className="relative leading-[24px] font-semibold whitespace-nowrap">
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
            </div>
          </div>
          <div className="h-[880px] w-[230px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border shrink-0 mq450:h-auto">
            <div className="self-stretch flex flex-col items-start justify-start gap-[88px] shrink-0 [debug_commit:1de1738]">
              <div className="self-stretch rounded-md bg-generic-white flex flex-col items-start justify-start">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
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
                            src="/frame-111.svg"
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
              <div className="self-stretch rounded-md bg-generic-white flex flex-col items-start justify-start">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
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
                            src="/frame-111.svg"
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
              <div className="self-stretch h-[262px] rounded-md bg-generic-white flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-21@2x.png"
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
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
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
            </div>
          </div>
          <div className="h-[880px] w-[230px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border shrink-0">
            <div className="self-stretch h-[982px] flex flex-col items-start justify-start gap-[68px] shrink-0 [debug_commit:1de1738]">
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-neutral-800">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-neutral-700">
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
                        src="/frame-111.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-neutral-800">
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
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-neutral-700">
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
                        src="/frame-111.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-5@2x.png"
                />
                <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative text-base leading-[24px] font-semibold">
                          <p className="m-0">Unleash The Power of Tech</p>
                          <p className="m-0">in Agricultural Sector</p>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-neutral-800">
                          <div className="relative leading-[20px] font-medium">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="relative leading-[20px] font-medium whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-neutral-700">
                          <div className="relative leading-[20px] font-medium">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] gap-[20px] text-base text-primary-500">
                    <div className="relative leading-[24px] font-semibold whitespace-nowrap">
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
            </div>
          </div>
          <div className="h-[880px] w-[230px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border shrink-0">
            <div className="self-stretch h-[962px] flex flex-col items-start justify-start gap-[88px] shrink-0 [debug_commit:1de1738]">
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-12@2x.png"
                />
                <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-0.5 box-border relative gap-[4px]">
                  <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="w-[102px] relative text-base leading-[24px] font-semibold inline-block">
                          Ladies Picnic
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-neutral-800">
                          <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
                          <div className="flex-1 relative leading-[20px] font-medium">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 gap-[20px] text-base text-primary-500">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                      $10
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    className="w-[30px] h-[30px] absolute !m-[0] right-[-237px] bottom-[-94px] object-cover"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-12@2x.png"
                />
                <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-0.5 box-border relative gap-[4px]">
                  <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="w-[102px] relative text-base leading-[24px] font-semibold inline-block">
                          Ladies Picnic
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start relative gap-[22px] text-neutral-800">
                          <div className="relative leading-[20px] font-medium inline-block min-w-[77px]">
                            Sat, Mar 27
                          </div>
                          <div className="h-1.5 w-1.5 absolute !m-[0] top-[calc(50%_-_3px)] right-[72px] rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
                          <div className="flex-1 relative leading-[20px] font-medium">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 gap-[20px] text-base text-primary-500">
                    <div className="relative leading-[24px] font-semibold inline-block min-w-[29px] whitespace-nowrap">
                      $10
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    className="w-[30px] h-[30px] absolute !m-[0] right-[-237px] bottom-[-94px] object-cover"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-md bg-generic-white flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-14@2x.png"
                />
                <div className="self-stretch h-[122px] relative rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0">
                  <div className="absolute top-[8px] left-[12px] w-[163px] h-[72px] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold inline-block">
                        Ladies Picnic
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start relative gap-[22px] text-neutral-800">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Sat, Mar 27
                        </div>
                        <div className="h-1.5 w-1.5 absolute !m-[0] top-[calc(50%_-_3px)] right-[72px] rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0 text-neutral-700">
                        <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[2px] left-[0px] w-full h-9 overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px] text-base text-primary-500">
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
                  <img
                    className="absolute top-[186px] left-[437px] w-[30px] h-[30px] object-cover"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[782px] w-[230px] flex flex-col items-start justify-start pt-0 px-0 pb-[150px] box-border gap-[68px] shrink-0 [debug_commit:1de1738] mq450:h-[782px]">
          <div className="self-stretch h-[282px] rounded-md bg-generic-white flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
            <img
              className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-127-11@2x.png"
            />
            <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
              <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold">
                      <p className="m-0">Unleash The Power of Tech</p>
                      <p className="m-0">in Agricultural Sector</p>
                    </div>
                    <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] text-neutral-800">
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
                    <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border text-neutral-700">
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
          <div className="self-stretch h-[282px] rounded-md bg-generic-white flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
            <img
              className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-127-11@2x.png"
            />
            <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
              <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold">
                      <p className="m-0">Unleash The Power of Tech</p>
                      <p className="m-0">in Agricultural Sector</p>
                    </div>
                    <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative gap-[22px] text-neutral-800">
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                        Sat, Mar 27
                      </div>
                      <div className="h-1.5 w-1.5 absolute !m-[0] top-[calc(50%_-_3px)] right-[92px] rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                      <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                        10:00 AM
                      </div>
                    </div>
                    <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border text-neutral-700">
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
          <div className="self-stretch h-[282px] rounded-md bg-generic-white flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
            <img
              className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/frame-127-11@2x.png"
            />
            <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
              <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold">
                      <p className="m-0">Unleash The Power of Tech</p>
                      <p className="m-0">in Agricultural Sector</p>
                    </div>
                    <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative gap-[22px] text-neutral-800">
                      <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                        Sat, Mar 27
                      </div>
                      <div className="h-1.5 w-1.5 absolute !m-[0] top-[calc(50%_-_3px)] right-[92px] rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                      <div className="self-stretch w-16 relative leading-[20px] font-medium inline-block whitespace-nowrap">
                        10:00 AM
                      </div>
                    </div>
                    <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border text-neutral-700">
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
        </div>
      </main>
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border [row-gap:20px] max-w-full z-[2] text-generic-white mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:pb-5 mq1125:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-cover"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 min-w-[102px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={onErrorSignalerContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              alt=""
              src="/frame-1231.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[60px]">
                Toronto
              </div>
            </div>
          </div>
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full text-sm text-neutral-600 mq450:flex-wrap">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px]">{`Search `}</div>
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
                src="/frame-123-3.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
