import TopBar from "../../../components/TopBar1";
import FrameComponent from "../../../components/FrameComponent5";
import { useContext, useEffect, useState } from "react";
import { EventContextProvider, useEventContext } from "../../../contexts/EventProvider";
import EditEvent from "./EditEvent";
import { addDocToFirestore } from "../../../api/crud/firebaseCrud";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../configs/firebase.config";
import Header from "../../../components/Header";

const EventPreview = ({page, setPage}) => {
  const [dbImageURL, setDBImageURL] = useState("")
  const [actionButton, setActionButton] = useState("Publish now")
  const {event, setEvent} = useEventContext()
  

  useEffect(() => {
    if(dbImageURL != ""){
      uploadEvent()
    }
  }, [dbImageURL])


  
  const onSubmit = async () => {
    try{
        /*  const eventData = {
          title: data.title, 
          description: data.description, 
          startDate: data.startDate,
          endDate: data.endDate,
          location: data.location,
          privacy: data.privacy,
          ticketFee: data.ticketFee,
          ticketNumber: data.ticketNumber,
          imageURL: URLImageView,
          categories : selectedCategories
        }*/
        //setEvent(eventData)
      //}else{
        //alert("No error")
      //} 
        setActionButton('Loading...')
        await uploadImage('event', event.uploadedImage) 
          
    }catch(e){
      alert(e)
    } 
    /*if(selectedCategories.length === 0){
      setCategoryError('category must be selected')
      return
    }*/
    /*try{
        
        //setIsLoading(true)
        setActionButton('Loading...')
        await uploadImage('event', uploadedImage) 
        
    }catch(error){
        alert('error: ' + error)
        setError('something went wrong')
    } */
    //setActionButton("Create Account")
    //navigate("/verification-message")
}

const uploadEvent = async ()=> {
  try{
    const collectionName = 'Event'
    const payload = { 
        title: event.title, 
        description: event.description, 
        startDate: event.startDate,
        endDate: event.endDate,
        location: event.location,
        privacy: event.privacy,
        ticketFee: event.ticketFee,
        ticketNumber: event.ticketNumber,
        imageURL: event.imageURL,
        categories : event.categories, 
        status: 1,  
        dateCreated: Date.now(),
        dateUpdated: Date.now()
    }
      setActionButton('Loading...')
      const res = await addDocToFirestore(collectionName, payload)
      if(res.status === 200){
        alert('Successful')
      }else{
        alert("Error")
        setError('something went wrong')
      }
  }catch(error){
      setError('something went wrong')
  } 
  setActionButton("Update event")
  
}

const uploadImage = async (path, uploadedImage) => {
  const storageRef = ref(storage, `files/${path}/${new Date()}`);
  const uploadTask = uploadBytesResumable(storageRef, uploadedImage);

  uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      //setProgresspercent(progress);
    },
    (error) => {
      //return {status: 500}
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setDBImageURL(downloadURL)
        //return {status: 200, data: {url: downloadURL}}
      });
    }
  );
}


  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[60px] box-border gap-[24px] leading-[normal] tracking-[normal]">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/image-3@2x.png"
      />
      <Header/>
      <main className=" mt-24 w-[1401px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-5xl text-primary-900 font-paragraph-medium-medium">
          <div className="flex flex-col items-start justify-start gap-[6px] text-13xl">
            <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi mq750:text-[26px]">
              {event.title}
            </h1>
            <div className="flex flex-row items-start justify-start gap-[8px] text-3xl text-neutral-700">
              <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lg">
                Event code: AHDFG123
              </h2>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-22.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
            <img
              className="h-[372px] flex-1 relative rounded-md max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src={event.imageURL}
            />
          </div>
          <div className="w-[337px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[96px] mq450:text-lgi mq450:leading-[26px]">
                  Ladies picnic
                </h1>
                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                  <div className="w-2.5 h-2.5 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                </div>
                <div className="flex-1 relative tracking-[-0.02em] leading-[32px] font-semibold text-primary-500 inline-block min-w-[96px] mq450:text-lgi mq450:leading-[26px]">
                  From N{event.ticketFee}
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-base">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src={event.imageURL}
                />
                <div className="relative leading-[24px] inline-block min-w-[87px]">
                  {new Date(event.startDate.toString()).getDate()}
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="w-2 h-2 relative rounded-xl bg-primary-900 overflow-hidden shrink-0" />
                </div>
                <div className="relative leading-[24px] inline-block min-w-[72px] whitespace-nowrap">
                  {"10:00 pm"}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-base">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/frame-4.svg"
              />
              <div className="relative leading-[24px]">
                {event.location}
              </div>
            </div>
          </div>
          <div className="w-[1012px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[16px] max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              About this event
            </h1>
            <div className="self-stretch relative text-base leading-[24px]">
              {event.description}
            </div>
          </div>
          <div className="w-[470px] flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[30px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                Organized by
              </h1>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[62px] text-base mq675:gap-[31px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[18px] min-w-[205px] mq450:flex-wrap">
                  <img
                    className="h-[60px] w-[60px] relative rounded-81xl overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/frame-155@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[155px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[112px]">
                        {"Abba Kabiru"}
                      </div>
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <div className="w-2 h-2 relative rounded-xl bg-primary-500 overflow-hidden shrink-0" />
                      </div>
                      <div className="relative leading-[24px] text-neutral-700 inline-block min-w-[98px]">
                        121 followers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <button className="cursor-pointer [border:none] py-2.5 px-6 bg-primary-500 rounded-md flex flex-row items-start justify-start hover:bg-slateblue">
                    <div className="relative text-sm leading-[20px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[44px]">
                      Follow
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-primary-600">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit inline-block min-w-[55px] mq450:text-lgi mq450:leading-[26px]">
                Tags
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="flex flex-row items-start justify-start gap-[13px] max-w-full mq675:flex-wrap">
                  {event?.categories?.map((cat, i) =>
                  <button className="cursor-pointer [border:none] py-2 px-5 bg-neutral-200 rounded-lgi flex flex-row items-center justify-center hover:bg-lightgray-200">
                    <div className="relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[35px]">
                      {cat}
                    </div>
                  </button>
                  )}
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-[1297px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
      <div className="w-[569px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <button onClick={() => onSubmit()} className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center hover:bg-slateblue">
          <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[94px]">
            {actionButton}
          </div>
        </button>
        <button onClick={() => setPage("EditEvent")} className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
          <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[78px]">
            Edit event
          </div>
        </button>
      </div>
    </div>
        </section>
      </main>
    </div>
  );
};

export default EventPreview;
