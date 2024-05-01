import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithEmailLink, signInWithPhoneNumber, signInWithPopup, signOut} from 'firebase/auth'
import { firebaseApp, db } from '../../configs/firebase.config'
// import { addToLocalStorage } from '../../../utils/helpers';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Result } from 'postcss';
import { uploadFile } from '../storage/storage';

const auth = getAuth(firebaseApp)
        
export const loginWithGoogle = async () => {
    try{
        const googleAuthProvider = new GoogleAuthProvider();
        const loginResult = await signInWithPopup(auth, googleAuthProvider) 
        //alert("Success")    
        const credential = GoogleAuthProvider.credentialFromResult(loginResult);
        const user = loginResult.user
        
        const q = query(collection(db, "User"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "User"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            role: "user",
            emailStatus: 1,
            accountStatus: 1,
            createdDate: Date.now(),
            updatedDate: Date.now()
        });
        }

        const accessToken = credential.accessToken;
        const userDetails = loginResult.user;
        //addToLocalStorage('user', JSON.stringify(userDetails))
        //addToLocalStorage('accessToken', accessToken)
        return {status: 200, message: 'success', data: {user, accessToken}}
    }catch(error){
        alert("Error: " + error)
        return {status: 500, message: 'something went wrong', data: {error}}
    }
}

export const loginWithFacebook = async () => {
    try{
        const facebookAuthProvider = new FacebookAuthProvider();
        const loginResult = await signInWithPopup(auth, facebookAuthProvider)     
        const credential = FacebookAuthProvider.credentialFromResult(loginResult);
        const user = loginResult.user
        
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            settings: {
                banned : 0,
                trip: 0,
                realtime: 0,
                feedback: 0,
                tip: 0,
            }
        });
        }

        const accessToken = credential.accessToken;
        const userDetails = loginResult.user;
        //addToLocalStorage('user', JSON.stringify(userDetails))
        //addToLocalStorage('accessToken', accessToken)
        return {status: 200, message: 'success', data: {user, accessToken}}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error}}
    }
}

export const loginWithApple = async () => {
    try{
        const facebookAuthProvider = new facebookAuthProvider();
        const loginResult = await signInWithPopup(auth, facebookAuthProvider)     
        const credential = FacebookAuthProvider.credentialFromResult(loginResult);
        const user = loginResult.user
        
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            settings: {
                banned : 0,
                trip: 0,
                realtime: 0,
                feedback: 0,
                tip: 0,
            }
        });
        }

        const accessToken = credential.accessToken;
        const userDetails = loginResult.user;
        //addToLocalStorage('user', JSON.stringify(userDetails))
        //addToLocalStorage('accessToken', accessToken)
        return {status: 200, message: 'success', data: {user, accessToken}}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error}}
    }
}


export const signupWithEmailAndPassword = async (payload) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, payload?.email, payload?.password);
      const user = res.user;
      await addDoc(collection(db, "User"), {
        uid: user.uid,
        name: payload?.name,
        authProvider: "EmailPassword",
        email: payload?.email,
        password: payload?.password,
        role: "user",
        emailStatus: 0,
        accountStatus: 1,
        createdDate: Date.now(),
        updatedDate: Date.now()
      });
      //await res.user.sendEmailVerification();
      return {status: 200, message: 'success', data: {user}}
    
    } catch (error) {
      console.error(error);
      alert(error);
      if(error.code == "auth/email-already-in-use"){
        return {status: 409, message: 'user already exists', data: {error}}
      }
      return {status: 500, message: error.message, data: {error}}
    }
};

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return {status: 200, message: 'success', data: { userCredentials: userCredentials }}
    } catch (error) {
        //alert(error.code)
        if(error.code === "auth/invalid-credential"){
            return {status: 404, message: 'something went wrong', data: {error}}
        }else{
            return {status: 500, message: 'something went wrong', data: {error}}
        }
    }
}

export const loginWithMagicLink = async (email) => {
    try{
        await signInWithEmailLink(auth, email)
        return {status: 200, message: 'sent', data: null}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error}}
    }
}

export const loginWithPhoneNumber = async (phoneNumber) => {
    try{
        await signInWithPhoneNumber(auth, phoneNumber)
        return {status: 200, message: 'sent', data: null}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error}}
    }
}

export const sendPasswordResetLinkToEmail = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email)
        return {status: 200, message: 'sent', data: null}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error}}
    }
}

export const logout = async () => {
    try{
        await signOut(auth)
        return {status: 200, message: 'success', data: null}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: null}
    }
}