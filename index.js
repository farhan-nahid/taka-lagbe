/*
  =================  
      login js
  ==================
*/

document
  .getElementById("validate__button")
  .addEventListener("click", function () {
    const email = document.getElementById("email__input");
    const password = document.getElementById("password__input");
    if (
      email.value == "taka.lagbe@gmail.com" &&
      password.value == "taka.lagbe"
    ) {
      return (location.href = "./banking.html");
    } else if (
      typeof email.value != "string" ||
      typeof password.value != "string"
    ) {
      return alert("Please Enter a String Type Value!!");
    } else if (
      email.value == (null || undefined) ||
      password.value == (null || undefined)
    ) {
      return alert("Email or Password can't be null or undefined");
    } else {
      return alert("You Enter invalid Email or Password!!");
    }
  });
