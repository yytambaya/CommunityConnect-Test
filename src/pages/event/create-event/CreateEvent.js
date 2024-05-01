import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventSchema } from "../../../validators/event.validator";
import { useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { events } from "../../../data/event.data";
import { uploadFile } from "../../../api/storage/storage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../configs/firebase.config";
import { addDocToFirestore } from "../../../api/crud/firebaseCrud";
import { EventContextProvider } from "../../../contexts/EventProvider";



const CreateEvent = ({setPage, page}) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors}} = useForm({ resolver: yupResolver(eventSchema)})
  const [freeTicketToggle, setFreeTicketToggle] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [error, setError] = useState('')
  const [categoryError, setCategoryError] = useState("")
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [actionButton, setActionButton] = useState("Create event")
  const [imageURL, setImageURL] = useState("")
  const [imageURLAvailable, setImageURLAvailable] = useState(false)
  const [URLImageView, setURLImageView] = useState("")
  const [data, setData] = useState(null)
  
  const event = useContext(EventContextProvider)

  useEffect(() => {
    //alert(imageURL)
    if(imageURL !== ""){
      uploadEvent()
    }
  }, [imageURL])

  useEffect(() => {
    if(uploadedImage != null){
      setImageURLAvailable(true)
      setURLImageView(URL.createObjectURL(uploadedImage))
    }
  }, [uploadedImage])

  /*useEffect(() => {
    alert(selectedCategories)
  }, [selectedCategories])*/


  const uploadImage = async (path, uploadedImage) => {
    const storageRef = ref(storage, `files/${path}`);
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
          setImageURL(downloadURL)
          //return {status: 200, data: {url: downloadURL}}
        });
      }
    );
  }

  const goToPreviewPage = () => {
    //navigate('/preview')
    setPage('EventPreview')
  }

  const onSubmit = async (data) => {
      //alert(JSON.stringify(data))
      //alert('here')
      setData(data)
      /*if(selectedCategories.length === 0){
        setCategoryError('category must be selected')
        return
      }*/
      try{
          
          //setIsLoading(true)
          setActionButton('Loading...')
          await uploadImage('event', uploadedImage) 
          
      }catch(error){
          alert('error: ' + error)
          setError('something went wrong')
      } 
      //setActionButton("Create Account")
      //navigate("/verification-message")
  }

  const uploadEvent = async ()=> {
    try{
      const collectionName = 'Event'
      const payload = { 
          title: data.title, 
          description: data.description, 
          startDate: data.startDate,
          endDate: data.endDate,
          location: data.location,
          privacy: data.privacy,
          ticketFee: data.ticketFee,
          ticketNumber: data.ticketNumber,
          imageURL: imageURL,
          categories :data.categories, 
          status: 1,  
          dateCreated: Date.now(),
          dateUpdated: Date.now()
      }
      //setIsLoading(true)
      setActionButton('Loading...')

        const res = await addDocToFirestore(collectionName, payload)
        if(res.status === 200){
            //setNotification(true)
            navigate('/app/event/event-preview')
        }else{
            setError('something went wrong')
            //setError(res.message)
        }
      
    }catch(error){
        //alert('error: ' + error)
        setError('something went wrong')
    } 
    setActionButton("Create Event")
    
  }

  const onFrameContainerClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  return (
    <div className="w-full relative bg-generic-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border gap-[24px] leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-primary-700 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[50px] box-border top-[0] z-[99] sticky max-w-full text-left text-base text-generic-white font-paragraph-medium-medium mq725:pl-[25px] mq725:box-border">
        <div className="w-[280px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <img
            className="w-[131px] h-[34px] relative object-cover"
            loading="lazy"
            alt=""
            src="/asset-4-1-11@2x.png"
          />
        </div>
        <div className="flex-1 bg-primary-700 box-border overflow-hidden flex flex-row items-start justify-start py-[13px] px-6 max-w-full border-r-[1px] border-solid border-primary-600 border-l-[1px]">
          <div
            className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <img
              className="h-[30px] w-[30px] relative rounded-81xl overflow-hidden shrink-0 min-h-[30px]"
              loading="lazy"
              alt=""
              src="/frame-12321.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[99px] whitespace-nowrap">
                Create event
              </div>
            </div>
          </div>
        </div>
        <div className="w-[435px] bg-primary-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-6 box-border gap-[20px] max-w-full text-sm text-neutral-600">
          <div className="w-[286px] rounded-md bg-generic-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-1.5 px-3 pb-[5.5px] box-border gap-[82px]">
            <div className="w-full flex flex-row items-start justify-start gap-[4px]">
              <div className="w-full flex flex-col items-start justify-start pt-px px-0 pb-0">
                <input
                  className="w-full cursor-pointer m-0 h-[18px] relative overflow-hidden shrink-0"
                  type="radio"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[47px] whitespace-nowrap">{`Search `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[7px]">
              <img
                className="self-stretch w-px relative max-h-full min-h-[21px]"
                loading="lazy"
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
                src="/frame-123-13.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-[65.96px] overflow-hidden shrink-0 object-cover min-h-[30px]"
                loading="lazy"
                alt=""
                src="/frame-74-5@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-base text-primary-900 font-paragraph-medium-medium">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[395px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-5xl">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              Create an event
            </h2>
          </div>
          <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[77px]">
              Event title
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
              <input
                {...register("title")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                placeholder="Enter the name of your event"
                type="text"
              />
            </div>
            {errors.title && <p className="text-red-500 -mt-2">{errors.title?.message}</p>}
          </div>
          <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[24px] font-medium">
              Event description
            </div>
            <textarea
              {...register("description")}
              className="bg-neutral-100 h-[131px] w-auto [outline:none] self-stretch rounded-md box-border flex flex-row items-start justify-start py-2.5 px-4 font-paragraph-medium-medium text-sm  border-[1px] border-solid border-neutral-200"
              placeholder="Write about your event"
              rows={7}
              cols={19}
            />
            {errors.description && <p className="text-red-500 -mt-2">{errors.description?.message}</p>}
          </div>
          {/*<div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[118px]">
                Invite Co-hosts
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-xs text-neutral-600">
                <div className="relative leading-[20px] font-medium inline-block min-w-[49px]">
                  Optional
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-[3px] px-4 gap-[8px] text-sm text-generic-white border-[1px] border-solid border-neutral-200">
              <div className="rounded-[25px] bg-generic-white overflow-x-auto flex flex-row items-start justify-start py-1 px-1.5 gap-[7px]">
                <div className="h-[30px] w-[30px] rounded-81xl bg-primary-500 overflow-hidden shrink-0 flex flex-row items-start justify-start p-[5px] box-border">
                  <div className="relative leading-[20px] font-medium inline-block min-w-[20px]">
                    KA
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-black">
                  <div className="relative leading-[20px] inline-block min-w-[89px]">
                    Khairat Adam
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-21.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-lg text-primary-500">
                <div className="relative leading-[28px] font-medium inline-block min-w-[7px]">
                  |
                </div>
              </div>
            </div>
          </div>*/}
          <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="relative leading-[24px] font-medium">
              When does your event starts?
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] whitespace-nowrap gap-[20px] text-sm  border-[1px] border-solid border-neutral-200">
                <input
                {...register("startDate")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px] text-neutral-400  text-left inline-block p-0"
                placeholder="choose date"
                type="date"
              />
            </div>
            {errors.startDate && <p className="text-red-500 -mt-2">{errors.startDate?.message}</p>}
          </div>
          <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="relative leading-[24px] font-medium">
              When does your event ends?
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] whitespace-nowrap gap-[20px] text-sm  border-[1px] border-solid border-neutral-200">
                <input
                {...register("endDate")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-neutral-400 text-left inline-block p-0"
                placeholder="choose date"
                type="date"
              />
            </div>
            {errors.endDate && <p className="text-red-500 -mt-2">{errors.endDate?.message}</p>}
          </div>
          <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[109px]">
              Event location
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
              <input
                {...register("location")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                placeholder="Where is your event located?"
                type="text"
              />
            </div>
            {errors.location && <p className="text-red-500 -mt-2">{errors.location?.message}</p>}
          </div>
          <div className="w-[380px] flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[104px]">
              Event privacy
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-center justify-between py-2 gap-[20px] text-sm text-neutral-800 border-[1px] border-solid border-neutral-200">
              <div className="w-full flex flex-col items-start justify-center">
                <select {...register("privacy")} className="w-full bg-neutral-100 outline-none relative leading-[20px] inline-block min-w-[41px]">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
                <div className="relative text-xs leading-[20px] ">
                  Anyone can access the event
                </div>
              </div>
            </div>
            {errors.privacy && <p className="text-red-500 -mt-2">{errors.privacy?.message}</p>}
          </div>
          
          <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[77px]">
              How much do you want to charge per ticket?
            </div>
            {!freeTicketToggle && <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
              <input
                {...register("ticketFee")}
                defaultValue={0.0}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                placeholder="0.00"
                type="number"
              />
            </div>}
            <div className="flex flex-row items-center justify-start gap-[14px] text-sm">
              <div onClick={() => setFreeTicketToggle(!freeTicketToggle)} className="cursor-pointer h-6 w-[42px] relative rounded-2xl bg-neutral-200 overflow-hidden shrink-0">
                {freeTicketToggle ? 
                  <div className="absolute top-[3px] right-1 rounded-81xl bg-primary-500 w-[18px] h-[18px] overflow-hidden" />
                  :<div className="absolute top-[3px] left-1 rounded-81xl bg-gray-500 w-[18px] h-[18px] overflow-hidden" />
                } 
              </div>
              <div className="relative leading-[20px] font-medium inline-block min-w-[105px]">
                Tickets are free
              </div>
            </div>
            {errors.ticketFee && <p className="text-red-500 -mt-2">{errors.ticketFee?.message}</p>}
          </div>

          
          <div className="w-[380px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[77px]">
              How many tickets do you want to sell?
            </div>
            <div className="self-stretch rounded-md bg-neutral-100 flex flex-row items-start justify-start py-3 px-4 border-[1px] border-solid border-neutral-200">
              <input
                {...register("ticketNumber")}
                className="w-full [border:none] [outline:none] font-paragraph-medium-medium text-sm bg-[transparent] h-5 relative leading-[20px]  text-left inline-block p-0"
                placeholder="0"
                type="number"
              />
            </div>
            {errors.ticketNumber && <p className="text-red-500 -mt-2">{errors.ticketNumber?.message}</p>}
          </div>

          <div className="w-full h-[167px] flex flex-col items-start justify-start gap-[12px] max-w-full">
  <div className="relative leading-[24px] font-medium">
    Upload your event poster/ cover image
  </div>
 
 {!imageURLAvailable && (
   <div className="w-full cursor-pointer self-stretch flex-1 rounded-md bg-neutral-100 flex items-center justify-center py-2.5 px-4 border-[1px] border-solid border-neutral-200 relative">
     <label htmlFor="upload-input" className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
       <img
         className="h-6 w-6 z-20 shrink-0"
         alt=""
         src="/frame-6.svg"
       />
     </label>
     <input id="upload-input" onChange={(e)=> setUploadedImage(e.target.files[0])} type="file" className="cursor-pointer opacity-0 absolute h-full w-full z-50"/>
     {errors.image && <p className="text-red-500 -mt-2">{errors.ticketNumber?.message}</p>}
   </div>
 )}

  {imageURLAvailable && <img className=" w-36 h-36" src={URLImageView}/>}
</div>

          {/*<div className="w-full h-[167px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="relative leading-[24px] font-medium">
              Upload your event poster/ cover image
            </div>
            {!imageURLAvailable && <div className="w-full cursor-pointer self-stretch flex-1 rounded-md bg-neutral-100 flex items-center justify-center py-2.5 px-4 border-[1px] border-solid border-neutral-200">
              
                <img
                  className="absolute top-2 h-6 w-6 z-20 shrink-0"
                  alt=""
                  src="/frame-6.svg"
                />
              
              <input onChange={(e)=> setUploadedImage(e.target.files[0])} type="file" className="bg-red-500 cursor-pointer relative h-full w-full z-50 "/>
              {errors.image && <p className="text-red-500 -mt-2">{errors.ticketNumber?.message}</p>}
            </div>}
            {imageURLAvailable && <img className=" w-6 h-6" src=""/>}
          </div>*/}
          <div className="w-full self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-sm">
            <div className="w-full flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[20px] font-medium">
                  Select the categories your event belong to
                </div>
              </div>
              <div className="w-full self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="w-full flex flex-row items-start justify-start gap-[11px] mq450:flex-wrap">
                  {events.categories.map((cat, i) =>
                    <button key={i} {...register('categories')} onClick={(e) => { e.preventDefault(); if(!selectedCategories.includes(cat)) {setSelectedCategories([...selectedCategories, cat])}}} className={` w-96 flex-1 cursor-pointer [border:none] py-[5px] px-3 bg-neutral-100 rounded-xl flex flex-row items-center justify-start ${selectedCategories.includes(cat) ? 'bg-neutral-300' : null} hover:bg-gainsboro-300`}>
                      <div className={`relative text-xs leading-[20px] font-medium font-paragraph-medium-medium text-primary-500 text-left flex-1 w-full`}>
                        {cat}
                      </div>
                    </button>
                  )}


        

                </div>
                {categoryError && <p className=" text-red-500 -mt-2">{categoryError}</p>}
                {/*errors.categories && <p className="text-red-500 -mt-2">{errors.categories?.message}</p>*/}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <button onClick={() => goToPreviewPage()}  className="cursor-pointer [border:none] py-3 px-5 bg-primary-500 self-stretch rounded-md flex flex-row items-start justify-center whitespace-nowrap hover:bg-slateblue">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-generic-white text-left inline-block min-w-[100px]">
                {actionButton}
              </div>
            </button>
            <button onClick={('/app/events')} className="cursor-pointer py-2.5 px-5 bg-primary-50 self-stretch rounded-md flex flex-row items-start justify-center border-[1px] border-solid border-primary-100 hover:bg-thistle-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-thistle-200">
              <div className="relative text-base leading-[24px] font-semibold font-paragraph-medium-medium text-primary-600 text-left inline-block min-w-[54px]">
                Cancel
              </div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateEvent;
