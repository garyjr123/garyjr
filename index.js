function logout(){
    var log = confirm("Are you sure you want to Log out?");
    if(log == true){
        location.replace("login.html");
    }
}
function pro(){
    location.replace("profile.html");
}
function am(){
    location.replace("aboutme.html");

}