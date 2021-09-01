document
  .getElementById("deposit__button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit__input");
    const depositAmount = document.getElementById("deposit__amount");
    const depositInputNumber = parseFloat(depositInput.value);
    const depositAmountNumber = parseFloat(depositAmount.innerText);
    if (depositInput.value == "" || depositInputNumber < 0) {
      alert("Please Enter a valid value");
      depositInput.value = "";
      return false;
    }
    const totalDeposit = depositAmountNumber + depositInputNumber;
    depositAmount.innerText = totalDeposit;
    const totalBalance = document.getElementById("total__amount");
    const totalBalanceNumber = parseFloat(totalBalance.innerText);
    const total = totalBalanceNumber + totalDeposit;
    totalBalance.innerText = total;
    depositInput.value = "";
  });