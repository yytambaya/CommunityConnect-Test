import { useNavigate } from "react-router-dom"

const Header = ({pageName}) => {
    const navigate = useNavigate()

    return(
        <header className="absolute top-[0px] left-[0px] right-[0px] bg-primary-700 w-full overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border max-w-full z-[2] text-left text-sm text-neutral-600 font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            onClick={() => navigate("/app/events")}
            className="w-[131px] h-[34px] relative object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-3.5 px-[25px] max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
        
        
        <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={() => history.back()}
          >
            <img
              
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              alt=""
              src="/frame-123-23.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[110px]">
                {pageName}
              </div>
            </div>
          </div>


          
          
          <input
            className="w-[59px] [border:none] [outline:none] font-medium font-paragraph-medium-medium text-lg bg-[transparent] h-7 relative leading-[28px] text-generic-white text-left inline-block p-0"
            placeholder={""}
            type="text"
          />
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-[18px] h-[18px] relative overflow-hidden shrink-0"
                  type="text"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
            </div>
            
            <div className="flex flex-row items-start justify-start gap-[7px]">
            <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-4.svg"
              />
              
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
                src="/frame-123-12.svg"
              />
              <img
                onClick={()=> navigate("/app/profile")}
                className=" cursor-pointer h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header