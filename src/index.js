import { getFirebaseConfig } from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth= getAuth();

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

function login(e,ev){
    signInWithEmailAndPassword(auth, email.value,password.value)
    .then((userCredentials)=>{
        console.log(userCredentials);
        window.location.href = "books.html"
    })
    .catch((error)=>{
        console.log(error.message);
        alert('user incorrect');
    });
}

loginBtn.addEventListener("click",login);


