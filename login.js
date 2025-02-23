function cl(){
    
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if(user == "Gary Jr" && pass == "12345"){
        alert("Succesfully Log in");
        
    location.replace("index.html");
    }else if(user == "Gary Jr" && pass != "12345"){
alert("Incorrect Password");
    }
    else{
        alert("Please Click Forgot Password");
    }
}
function f(){
    var user = document.getElementById("user").value ="Gary Jr";
    var pass = document.getElementById("pass").value ="12345";
}