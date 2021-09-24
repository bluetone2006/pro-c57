  // Import the functions you need from the SDKs you need
  import firebase from 'firebase';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA7NxhE-A3dodbVSR4Hi72SrXXoq02-IVo",
    authDomain: "quizbuzzerapp-506aa.firebaseapp.com",
    databaseURL: "https://quizbuzzerapp-506aa-default-rtdb.firebaseio.com",
    projectId: "quizbuzzerapp-506aa",
    storageBucket: "quizbuzzerapp-506aa.appspot.com",
    messagingSenderId: "1020618850359",
    appId: "1:1020618850359:web:05111ccb0eea10d5247fb2"
  };

  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  export default app.database();
