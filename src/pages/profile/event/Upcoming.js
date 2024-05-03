import { useEffect, useState } from "react";
import FrameComponent1 from "../../../components/FrameComponent12";
import FrameComponent from "../../../components/FrameComponent7";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import TopBar from "../../../components/TopBar3";
import { useNavigate } from "react-router-dom";
import { getDocFromFirestore } from "../../../api/crud/firebaseCrud";

const Upcoming = ({setPage, page}) => {
    
    const [events, setEvents] = useState([])
    const [error, setError] = useState("")
    //const {event, setEvent} = useEventContext()
    const navigate = useNavigate();
  
    useEffect(() => {
      getEvents()
    }, [])
  
    /*useEffect(() => {
      alert(events)
    }, [events])*/
  
    const getEvents = async () => {
      const collectionName = "Event"
      const res = await getDocFromFirestore(collectionName)
      if(res.status == 200){
        alert("Success")
        alert(JSON.stringify(res.data))
        setEvents(res.data)
        
      }else{
        alert("Error")
        setError(res.message)
      }
  
    }
  
    const handleCLick = (event) => {
      //setEvent(event)
      setPage("SingleEvent")
    }


  return (
    <div className="w-full h-[960px] relative bg-generic-white overflow-hidden leading-[normal] tracking-[normal] text-left text-lg text-gray-100 font-paragraph-medium-medium mq450:h-auto mq450:min-h-[960]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[990px] object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
        <Sidebar/>
        <Header page={"My events"}/>
      <div>
      <div onClick={() => setPage('Upcoming')} className="cursor-pointer absolute top-[104px] left-[719px] leading-[28px] inline-block min-w-[87px]">
        Upcoming
      </div>
      <button onClick={() => setPage('MyEvent')} className="cursor-pointer [border:none] pt-2 px-2 pb-1 bg-[transparent] absolute top-[96px] left-[838px] flex flex-row items-start justify-start border-b-[3px] border-solid border-primary-500">
        <div className="relative text-lg leading-[28px] font-paragraph-medium-medium text-primary-500 text-left inline-block min-w-[88px]">
          My events
        </div>
      </button>
      <div onnClick={() => setPage("Attended")} className=" cursor-pointer absolute top-[104px] left-[974px] leading-[28px] inline-block min-w-[79px]">
        Attended
      </div>
      </div>

      {events.map((event, i) => 
      
      <div key={i} className="absolute top-[164px] left-[530px] rounded-[4.69px] bg-generic-white box-border w-[714px] overflow-hidden flex flex-row items-start justify-start gap-[24px] max-w-full border-[1px] border-solid border-neutral-300 mq450:flex-wrap">
        <img
          className="h-[172px] w-[200px] relative overflow-hidden shrink-0 object-cover mq450:flex-1"
          loading="lazy"
          alt=""
          src="/frame-237@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[227px] mq450:flex-1">
        <div className="flex flex-col items-start justify-start gap-[14px] text-left text-base text-primary-900 font-paragraph-medium-medium">
      <h3 className="m-0 relative text-5xl tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
        {event.title}
      </h3>
      <div className="flex flex-row items-start justify-start gap-[12px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/frame-31.svg"
        />
        <div className="relative leading-[24px] inline-block min-w-[87px]">
          {"event.date"}
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="w-2 h-2 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
        </div>
        <div className="relative leading-[24px] inline-block min-w-[72px] whitespace-nowrap">
          {"event.time"}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/frame-4.svg"
        />
        <div className="relative leading-[24px]">{event.location}</div>
      </div>
    </div>
        </div>
      </div>
    )}
      
      
      <div className="absolute top-[360px] left-[530px] rounded-[4.69px] bg-generic-white box-border overflow-hidden flex flex-row items-start justify-start py-0 pr-[22px] pl-0 gap-[24px] max-w-full border-[1px] border-solid border-neutral-300 mq750:flex-wrap mq750:p-5 mq750:box-border">
        <img
          className="h-[172px] w-[200px] relative overflow-hidden shrink-0 object-cover mq750:flex-1"
          alt=""
          src="/frame-237-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[466px] max-w-full mq750:flex-1 mq750:min-w-full">
          <FrameComponent />
        </div>
      </div>
      {/*<TopBar />*/}
    </div>
  );
};

export default Upcoming
