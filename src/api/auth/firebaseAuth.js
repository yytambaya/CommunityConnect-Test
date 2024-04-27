import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithEmailLink, signInWithPhoneNumber, signInWithPopup, signOut} from 'firebase/auth'
import { firebaseApp, db } from '../../configs/firebase.config'
// import { addToLocalStorage } from '../../../utils/helpers';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Result } from 'postcss';

const auth = getAuth(firebaseApp)
        
export const loginWithGoogle = async () => {
    try{
        const googleAuthProvider = new GoogleAuthProvider();
        const loginResult = await signInWithPopup(auth, googleAuthProvider)     
        const credential = GoogleAuthProvider.credentialFromResult(loginResult);
        const user = loginResult.user
        
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            /* settings: {
                banned : 0,
                trip: 0,
                realtime: 0,
                feedback: 0,
                tip: 0,
            } */
        });
        }

        const accessToken = credential.accessToken;
        const userDetails = loginResult.user;
        //addToLocalStorage('user', JSON.stringify(userDetails))
        //addToLocalStorage('accessToken', accessToken)
        return {status: 200, message: 'success', data: {user, accessToken}}
    }catch(error){
        // alert(error)
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


export const signupWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
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