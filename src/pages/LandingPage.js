const LandingPage = () => {
  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[138px] box-border gap-[50px] leading-[normal] tracking-[normal] mq975:gap-[25px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-primary-700 overflow-hidden flex flex-row items-start justify-between py-3 pr-[66px] pl-8 gap-[20px] mq975:pr-[33px] mq975:box-border mq450:flex-wrap">
          <div className="w-[116px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <img
              className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/asset-4-1-12@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-center py-0 px-2.5">
                <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[43px]">
                  Login
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-2.5 bg-secondary-500 rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightseagreen">
              <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[88px]">
                Try it for free
              </div>
            </button>
          </div>
        </div>
        <header className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[205px] px-5 pb-[206px] box-border gap-[30px] bg-[url('/public/frame-260@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-21xl text-generic-white font-paragraph-medium-medium mq700:pt-[133px] mq700:pb-[134px] mq700:box-border">
          <div className="w-[666px] flex flex-row items-start justify-center max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[48px] font-bold font-inherit whitespace-nowrap">
              Find your next event
            </h1>
          </div>
          <div className="w-[666px] rounded-md bg-generic-white overflow-hidden flex flex-row items-end justify-start py-3 px-6 box-border gap-[117px] max-w-full text-lg text-neutral-700 mq450:gap-[58px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame21.svg"
                  />
                </div>
                <div className="relative leading-[28px] whitespace-nowrap">{`Search for events `}</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                <img
                  className="w-px h-[47px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-14.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <div className="relative leading-[28px] inline-block min-w-[66px]">
                  Toronto
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[30px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px] max-w-full mq975:flex-wrap">
          <button className="cursor-pointer [border:none] py-2 px-5 bg-primary-500 rounded-xl flex flex-row items-start justify-start hover:bg-slateblue">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[17px]">
              All
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[81px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[41px]">
              Today
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[85px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[45px]">
              Sports
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[84px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[44px]">
              Health
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-20 rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[40px]">
              Music
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[85px]">{`Food & Drink`}</div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[89px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[49px]">
              Charity
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[83px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[43px]">
              Online
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[95px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[55px]">
              Concert
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] w-[73px] rounded-xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-neutral-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-100">
            <div className="relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[33px]">
              Tech
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[24px] max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Top trending in Toronto
          </h2>
          <div className="w-[1408px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full text-sm">
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[262px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-51@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0.5 relative gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="flex flex-row items-start justify-start">
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
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[24px] max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            This weekend
          </h2>
          <div className="w-[1408px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full text-sm">
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[262px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-51@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0.5 relative gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="flex flex-row items-start justify-start">
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
          </div>
        </div>
        <div className="w-[684px] flex flex-col items-start justify-start pt-0 pb-5 pr-5 pl-0 box-border gap-[24px] max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Services we offer
          </h2>
          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-center py-48 px-5 bg-[url('/public/data-shuffler@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:pt-[125px] mq450:pb-[125px] mq450:box-border">
            <img
              className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-141.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Popular events
          </h2>
          <div className="w-[1408px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full text-sm">
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[282px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-1@2x.png"
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
            <div className="h-[262px] w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-127-51@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-md bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-0.5 relative gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="flex flex-row items-start justify-start">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
