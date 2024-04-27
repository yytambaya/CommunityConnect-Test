const LandingPage1 = () => {
  return (
    <form className="m-0 w-[1440px] h-[960px] bg-generic-white max-w-full overflow-hidden flex flex-col items-end justify-start relative leading-[normal] tracking-[normal] mq750:h-auto">
      <header className="self-stretch bg-primary-700 overflow-hidden flex flex-row items-start justify-between py-3 pr-[66px] pl-8 shrink-0 [debug_commit:1de1738] top-[0] z-[99] sticky gap-[20px] mq750:pr-[33px] mq750:box-border">
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
              <div className="relative text-base leading-[24px] font-medium font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[43px] whitespace-nowrap">
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
      </header>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 mq750:pb-8 mq750:box-border">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-[205px] px-5 pb-[206px] box-border gap-[30px] bg-[url('/public/frame-260@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full mq750:pt-[133px] mq750:pb-[134px] mq750:box-border">
          <div className="w-[666px] flex flex-row items-start justify-center max-w-full">
            <h1 className="m-0 relative text-21xl tracking-[-0.02em] leading-[48px] font-bold font-paragraph-medium-medium text-generic-white text-left mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
              Find your next event
            </h1>
          </div>
          <div className="w-[666px] rounded-md bg-neutral-50 overflow-hidden flex flex-row items-end justify-start py-3 px-6 box-border gap-[117px] max-w-full mq450:gap-[58px] mq750:flex-wrap mq750:justify-center">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame21.svg"
                  />
                </div>
                <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-neutral-700 text-left">{`Search for events `}</div>
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
                  loading="lazy"
                  alt=""
                  src="/frame-14.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-neutral-700 text-left inline-block min-w-[66px]">
                  Toronto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1448px] flex flex-col items-start justify-start pt-0 pb-[1447px] pr-0 pl-5 box-border gap-[160px] shrink-0 [debug_commit:1de1738] max-w-full lg:pb-[612px] lg:box-border mq450:gap-[40px] mq750:gap-[80px] mq750:pb-[398px] mq750:box-border mq1050:h-auto">
        <div className="flex flex-col items-start justify-start gap-[24px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[30px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[16px] mq1050:flex-wrap">
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
            <h2 className="m-0 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-paragraph-medium-medium text-primary-900 text-left mq450:text-lgi mq450:leading-[26px]">
              Top trending in Toronto
            </h2>
          </div>
          <div className="w-[1408px] h-[172px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[16px] max-w-full">
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
                      <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
                  <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                loading="lazy"
                alt=""
                src="/frame-127@2x.png"
              />
              <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px] mq750:gap-[103px]">
                <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
                  <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[102px]">
                          Ladies Picnic
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                    <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                      <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
                  <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                loading="lazy"
                alt=""
                src="/frame-127@2x.png"
              />
              <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px] mq750:gap-[103px]">
                <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
                  <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[102px]">
                          Ladies Picnic
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                    <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                      <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                        <p className="m-0">Unleash The Power of Tech</p>
                        <p className="m-0">in Agricultural Sector</p>
                      </div>
                      <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
                  <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                loading="lazy"
                alt=""
                src="/frame-127-51@2x.png"
              />
              <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-0.5 box-border relative gap-[4px]">
                <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block min-w-[102px]">
                        Ladies Picnic
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                  <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
        <div className="flex flex-col items-start justify-start gap-[50px] shrink-0 [debug_commit:1de1738] max-w-full mq750:gap-[25px]">
          <div className="h-[338px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h2 className="m-0 w-[156px] h-8 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block mq450:text-lgi mq450:leading-[26px]">
              This weekend
            </h2>
            <div className="w-[1408px] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-3@2x.png"
                />
                <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                  <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                          <p className="m-0">Unleash The Power of Tech</p>
                          <p className="m-0">in Agricultural Sector</p>
                        </div>
                        <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
                    <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                  src="/frame-127-3@2x.png"
                />
                <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px] mq750:gap-[103px]">
                  <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
                    <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                          <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block">
                            Ladies Picnic
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                            <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                              Sat, Mar 27
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                              <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                            </div>
                            <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                              10:00 AM
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                            <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                              Dee’s Hotel, Toronto
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                      <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
              <div className="self-stretch w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-3@2x.png"
                />
                <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                  <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                          <p className="m-0">Unleash The Power of Tech</p>
                          <p className="m-0">in Agricultural Sector</p>
                        </div>
                        <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
                    <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                  src="/frame-127-3@2x.png"
                />
                <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px] mq750:gap-[103px]">
                  <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
                    <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                          <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block">
                            Ladies Picnic
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                            <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                              Sat, Mar 27
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                              <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                            </div>
                            <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                              10:00 AM
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                            <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                              Dee’s Hotel, Toronto
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                      <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
              <div className="self-stretch w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
                <img
                  className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/frame-127-3@2x.png"
                />
                <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
                  <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                          <p className="m-0">Unleash The Power of Tech</p>
                          <p className="m-0">in Agricultural Sector</p>
                        </div>
                        <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                            Sat, Mar 27
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                            <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                          </div>
                          <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                            10:00 AM
                          </div>
                        </div>
                        <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                            Dee’s Hotel, Toronto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
                    <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
                  src="/frame-127-3@2x.png"
                />
                <div className="self-stretch h-[122px] relative rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0">
                  <div className="absolute top-[8px] left-[12px] w-[163px] h-[72px] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block">
                        Ladies Picnic
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                          Sat, Mar 27
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                          10:00 AM
                        </div>
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                        <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                          Dee’s Hotel, Toronto
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[2px] left-[0px] w-full h-9 overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                    <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
          <div className="w-[684px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] max-w-full">
            <h2 className="m-0 w-[196px] h-8 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block mq450:text-lgi mq450:leading-[26px]">
              Services we offer
            </h2>
            <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-center py-48 px-5 bg-[url('/public/data-shuffler@3x.png')] bg-cover bg-no-repeat bg-[top] mq450:pt-[125px] mq450:pb-[125px] mq450:box-border">
              <img
                className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                alt=""
              />
            </div>
          </div>
          <h2 className="m-0 w-[167px] h-8 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block mq450:text-lgi mq450:leading-[26px]">
            Popular events
          </h2>
        </div>
      </div>
      <footer className="w-[1428px] h-[282px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[16px] [debug_commit:1de1738] max-w-full">
        <div className="self-stretch w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/frame-127-3@2x.png"
          />
          <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
            <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                    <p className="m-0">Unleash The Power of Tech</p>
                    <p className="m-0">in Agricultural Sector</p>
                  </div>
                  <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                    <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                      Sat, Mar 27
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                    </div>
                    <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                      10:00 AM
                    </div>
                  </div>
                  <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                    <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                      Dee’s Hotel, Toronto
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
              <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
            src="/frame-127-3@2x.png"
          />
          <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px] mq750:gap-[103px]">
            <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
              <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block">
                      Ladies Picnic
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                        Sat, Mar 27
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                      </div>
                      <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                        10:00 AM
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                      <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                        Dee’s Hotel, Toronto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
        <div className="self-stretch w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/frame-127-3@2x.png"
          />
          <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
            <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                    <p className="m-0">Unleash The Power of Tech</p>
                    <p className="m-0">in Agricultural Sector</p>
                  </div>
                  <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                    <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                      Sat, Mar 27
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                    </div>
                    <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                      10:00 AM
                    </div>
                  </div>
                  <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                    <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                      Dee’s Hotel, Toronto
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
              <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
            src="/frame-127-3@2x.png"
          />
          <div className="self-stretch h-[122px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-end justify-start pt-2 px-0 pb-0.5 box-border gap-[207px] mq750:gap-[103px]">
            <div className="self-stretch w-[230px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:1de1738]">
              <div className="w-[187px] flex-1 flex flex-row items-start justify-start py-0 px-3 box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block">
                      Ladies Picnic
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                        Sat, Mar 27
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                      </div>
                      <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                        10:00 AM
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                      <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                        Dee’s Hotel, Toronto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
                <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
        <div className="self-stretch w-[230px] rounded-md bg-generic-white shrink-0 flex flex-col items-start justify-start">
          <img
            className="self-stretch flex-1 relative rounded-t-md rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/frame-127-3@2x.png"
          />
          <div className="self-stretch h-[142px] rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-[38px] box-border gap-[4px]">
            <div className="self-stretch h-24 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border shrink-0">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex-1 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left">
                    <p className="m-0">Unleash The Power of Tech</p>
                    <p className="m-0">in Agricultural Sector</p>
                  </div>
                  <div className="w-[183px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                    <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                      Sat, Mar 27
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                    </div>
                    <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                      10:00 AM
                    </div>
                  </div>
                  <div className="w-[155px] h-5 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                    <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                      Dee’s Hotel, Toronto
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7px] pb-[5px] pr-2.5 pl-[9px] box-border gap-[20px]">
              <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
            src="/frame-127-3@2x.png"
          />
          <div className="self-stretch h-[122px] relative rounded-t-none rounded-b-md bg-generic-white overflow-hidden shrink-0">
            <div className="absolute top-[8px] left-[12px] w-[163px] h-[72px] flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[102px] h-6 relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-900 text-left inline-block">
                  Ladies Picnic
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left">
                    Sat, Mar 27
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="w-1.5 h-1.5 relative rounded-xl bg-neutral-800 overflow-hidden shrink-0" />
                  </div>
                  <div className="self-stretch w-16 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-800 text-left inline-block whitespace-nowrap">
                    10:00 AM
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-7 pl-0">
                  <div className="self-stretch flex-1 relative text-sm leading-[20px] font-medium font-paragraph-medium-medium text-neutral-700 text-left">
                    Dee’s Hotel, Toronto
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[2px] left-[0px] w-full h-9 overflow-hidden flex flex-row items-start justify-between py-1.5 pr-2.5 pl-3 box-border gap-[20px]">
              <div className="self-stretch w-[29px] relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-500 text-left inline-block whitespace-nowrap">
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
      </footer>
      <main className="w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-200 overflow-hidden flex flex-row items-start justify-center py-[170px] px-5 box-border max-w-full z-[1]">
        <div className="w-[636px] rounded-xl bg-generic-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[50px] px-6 pb-[68px] box-border gap-[30px] max-w-full mq750:gap-[15px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch rounded-md bg-neutral-100 overflow-hidden flex flex-row items-start justify-start py-3.5 px-6 gap-[6px] border-[1px] border-solid border-neutral-200">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame21.svg"
                />
              </div>
              <input
                className="w-[150px] [border:none] [outline:none] font-paragraph-medium-medium text-lg bg-[transparent] h-7 relative leading-[28px] text-neutral-700 text-left inline-block p-0"
                placeholder="Search for events "
                type="text"
              />
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 overflow-hidden flex flex-row items-start justify-start py-3.5 px-[25px] gap-[6px] border-[1px] border-solid border-neutral-200">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-221.svg"
                />
              </div>
              <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-neutral-700 text-left">
                Choose location
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/frame-231.svg"
            />
            <div className="relative text-base leading-[24px] font-paragraph-medium-medium text-black text-left">
              Use my current location
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[55px]">
                Search
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[54px]">
                Cancel
              </div>
            </button>
          </div>
        </div>
      </main>
    </form>
  );
};

export default LandingPage1;
