import { getFirebaseConfig } from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
import { booksdata } from '../components/booksdata';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const booksContainer = document.getElementById ("booksContainer");

function getBooks(){
    const database = getDatabase();
    const databaseReference = ref(database,'Books');
    onValue(databaseReference,(snapshot)=>{
        const data = snapshot.val();
        console.log(data);

        if(data){
            booksContainer.innerHTML = ' ';
            Object.keys(data).forEach((k,index)=>{
                const bookComponent = new booksdata(data[k]);
                booksContainer.appendChild(bookComponent.render());
            })
        }
    });
}
getBooks();