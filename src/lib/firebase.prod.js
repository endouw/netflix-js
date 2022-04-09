import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//seed the database

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCzCvDQnrHg8SchVJxBVR3sz1zHkjkGGQs",
    authDomain: "netflix-b5e18.firebaseapp.com",
    projectId: "netflix-b5e18",
    storageBucket: "netflix-b5e18.appspot.com",
    messagingSenderId: "379077768720",
    appId: "1:379077768720:web:d5d23b302e71638b23fc95"
};


const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export {firebase};