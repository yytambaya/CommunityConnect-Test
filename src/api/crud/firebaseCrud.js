import { QuerySnapshot, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../../configs/firebase.config"

export const addDocToFirestore = async (collectionName, payload) => {
    try{
        await addDoc(collection(db, collectionName), payload)
        //alert('success')
        return {status: 200, message:'success', data: null}
    }catch(error){
        //alert('Error 500: ' + error)
        return {status: 500, message: 'something went wrong', data: {error: error}}
    }
}

export const getDocFromFirestore = async (collectionName) => {
    try{
        const querySnapshot = (await getDocs(collection(db, collectionName)))
        return {status: 200, message:'success', data: querySnapshot}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error: error}}
    }
}

export const updateDocFromFirestore = async (collectionName, id, payload) => {
    try{
        await updateDoc(collection(db, collectionName, id), payload)
        return {status: 200, message:'success', data: null}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error: error}}
    }
}

export const deleteDocFromFirestore = async (collectionName, id) => {
    try{
        await deleteDoc(doc(db, collectionName, id))
        return {status: 200, message:'success', data: null}
    }catch(error){
        return {status: 500, message: 'something went wrong', data: {error: error}}
    }
}



