 function submitForm(){
let username=document.getElementById("name").value;
 let usernumber=document.getElementById("mail").value;
 if(username==""){
    document.getElementById("name-error").innerHTML="kindly enter ur name";
    return false;
 }
 else{
    document.getElementById("name-error").innerHTML="";

 }
}
