
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, addDoc, collection , where , getDocs, query} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
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

document.getElementById('login-button').addEventListener('click', async function (event) {
  event.preventDefault();
  let num = document.getElementById('number').value;
  let pin = document.getElementById('pin').value;
  let matchData = query(collection(appDatabse , "my_informations") , where ('number' ,"==",num),where('pass','==',pin));
  // let matchData = query(collection(appDatabse , 'my_informations') , where('number' , '==' , num) , where('pass' ,'==' , pin));
  let mactchInfo = await getDocs(matchData);
  if(mactchInfo.empty){
    alert('please enter correct information')
  }else{
    localStorage.setItem('userPass',num);
    localStorage.setItem('userNum' , pin);
    window.location.href = './index.html';
  }

})