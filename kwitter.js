const firebaseConfig = {
    apiKey: "AIzaSyAMOtcX4Pj3dOkKAHCtegz4fw3XKu3FfFY",
    authDomain: "project-93-2e998.firebaseapp.com",
    databaseURL: "https://project-93-2e998-default-rtdb.firebaseio.com",
    projectId: "project-93-2e998",
    storageBucket: "project-93-2e998.appspot.com",
    messagingSenderId: "362083034999",
    appId: "1:362083034999:web:5ee73b79ee718a7e93a372"
  };
function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}