document
  .getElementById("validate__button")
  .addEventListener("click", function () {
    const email = document.getElementById("email__input");
    const password = document.getElementById("password__input");
    if (email.value == "taka@lagbe.com" && password.value == "taka.lagbe") {
      return (location.href = "./banking.html");
    } else {
      return alert("You Enter invalid Email or Password!!");
    }
  });
