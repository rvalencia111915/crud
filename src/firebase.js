import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTTOmmVxFlRcM21ESKtG51CxFibONlbNo",
    authDomain: "crud-8235d.firebaseapp.com",
    projectId: "crud-8235d",
    storageBucket: "crud-8235d.appspot.com",
    messagingSenderId: "902040191132",
    appId: "1:902040191132:web:1f05aaf8fb97d3cacc2d59"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)