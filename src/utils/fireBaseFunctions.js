import {  collection, doc,orderBy,query,setDoc,getDocs } from 'firebase/firestore'
import { firestore } from '../firebase.config'

export const saveItem = async(data) =>{
    await setDoc(doc(firestore,'foodItems',`${Date.now()}`),data,{
        merge: true
    })
}

export const getFoodItems = async() =>{
    const items = await getDocs(
        query(collection(firestore,"foodItems"),orderBy("id","desc"))
    )

    return items.docs.map((doc) => doc.data())
}