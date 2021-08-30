document
  .getElementById("validate__button")
  .addEventListener("click", function () {
    const email = document.getElementById("email__input");
    const password = document.getElementById("password__input");
    if (
      email.value == "taka.lagbe@gmail.com" &&
      password.value == "taka.lagbe"
    ) {
      location.href = "./banking.html";
    } else {
      console.log("logout");
    }
  });
