import { getApp,getApps,initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDXDLCs8vBdbWK3rn1E0dH4dxI0o-D4Wjo",
  authDomain: "restaurantapp-5f6ef.firebaseapp.com",
  databaseURL: "https://restaurantapp-5f6ef-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-5f6ef",
  storageBucket: "restaurantapp-5f6ef.appspot.com",
  messagingSenderId: "745524433878",
  appId: "1:745524433878:web:fc08fb2e651c25c9660a77"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app,firestore,storage }