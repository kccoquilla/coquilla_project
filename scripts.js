function check(){
    if(document.getElementById("usrnme").value === ""){
        if(document.getElementById("pssword").value === ""){
            document.getElementById("check").innerHTML = "Please enter your username and password.";
        }
        else{
            document.getElementById("check").innerHTML = "Please enter your username.";
        }
    }
    if(document.getElementById("usrnme").value !== ""){
        if(document.getElementById("pssword").value === ""){
            document.getElementById("check").innerHTML = "Please enter your password.";
        }
        else{
            document.getElementById("check").innerHTML = "Thank you for being a Recycluster.";
        }
    }
}