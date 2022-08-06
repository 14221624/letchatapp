// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCl2QjqXnZMde0SQ3YIiowdgmwDKSyMeqU",
      authDomain: "kwitterthetwitter.firebaseapp.com",
      databaseURL: "https://kwitterthetwitter-default-rtdb.firebaseio.com",
      projectId: "kwitterthetwitter",
      storageBucket: "kwitterthetwitter.appspot.com",
      messagingSenderId: "1013391594734",
      appId: "1:1013391594734:web:e115937491f10729aa4fff",
      measurementId: "G-P06GGRDJBM"
    };
  
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })

      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html"
}