
let res = document.getElementById("submit-page");
res.addEventListener("submit", function (event) {
  let error1 = document.getElementById("name-error");
  let matter = document.getElementById("name").value;
  error1.textContent = " ";
  if (matter === "" || /\d/.test(matter)) {
    error1.textContent = "Enter valid name";
    error1.style.color = "#dc3545";
    document.getElementById("name").style.border = "1px solid red";
    event.preventDefault();
  }


  let email = document.getElementById("mail").value;
  let error2 = document.getElementById("mail-error");
  error2.textContent = " ";
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let result = (emailPattern.test(email))
  if (!result) {
    error2.textContent = "Enter valid email";
    error2.style.color = "#dc3545";
    document.getElementById("mail").style.border = "1px solid red";
    event.preventDefault();
  }


  let mobile = document.getElementById("mobile").value;
  let error3 = document.getElementById("number-error");
  error3.textContent = " ";
  if (mobile.length < 10 || mobile === " ") {
    error3.textContent = "Enter a valid mobile number";
    error3.style.color = "#dc3545";
    document.getElementById("mobile").style.border = "1px solid red";
    event.preventDefault();
  }








});




