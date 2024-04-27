import IputField1 from "./IputField11";

const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 bg-generic-white flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="relative leading-[24px] font-medium">
            Card holder name
          </div>
          <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-between py-2.5 px-4 gap-[20px] text-sm border-[1px] border-solid border-neutral-100 mq450:flex-wrap">
            <div className="relative leading-[20px] inline-block min-w-[63px]">
              John Doe
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <img
                className="self-stretch w-[34.3px] relative max-h-full overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/visaclassic-svgrepocom.svg"
              />
              <img
                className="self-stretch w-[34.3px] relative max-h-full overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/mastercard-svgrepocom.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <IputField1 label="Card number" placeholder="1234 5322 6263 6363" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
        <IputField1
          label="Expiration date"
          placeholder="02/29"
          propWidth="404px"
          propFlex="unset"
        />
        <IputField1
          label="CVC"
          placeholder="212"
          propWidth="unset"
          propFlex="1"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
