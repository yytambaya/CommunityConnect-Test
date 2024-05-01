import {getDownloadURL,ref as storageRef,uploadBytes, uploadBytesResumable} from "firebase/storage";
import { storage } from "../../configs/firebase.config";

export const uploadFile = (path, uploadedImage) => {
    if (uploadedImage === null) {
      //toastifyError("Please select an image");
      return {status: 500, message: 'something went wrong', data: {error: error}}
      ;
    }
    const imageRef = storageRef(storage, `${path}/${'ywyusuuis'}`);

    uploadBytes(imageRef, uploadedImage)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            //saveData(url);
            return {status: 200, message:'success', data: { url }}
          })
          .catch((error) => {
            return {status: 500, message: 'something went wrong', data: {error: error}}
            //toastifyError(error.message);
          });
      })
      .catch((error) => {
        return {status: 500, message: 'something went wrong', data: {error: error}}
        //toastifyError(error.message);
      });
  };

  export const uploadImage = async (path, uploadedImage) => {
    const storageRef = ref(storage, `files/${path}`);
    const uploadTask = uploadBytesResumable(storageRef, uploadedImage);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //setProgresspercent(progress);
      },
      (error) => {
        return {status: 500}
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //setImgUrl(downloadURL)
          return {status: 200, data: {url: downloadURL}}
        });
      }
    );
  }
  