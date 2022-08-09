function setUserName() {    
    username = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome, " + username + "!";
    };

