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

// withdraw js

document
  .getElementById("withdraw__button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw__input");
    const withdrawAmount = document.getElementById("withdraw__amount");
    const withdrawInputNumber = parseFloat(withdrawInput.value);
    const withdrawAmountNumber = parseFloat(withdrawAmount.innerText);
    if ((withdrawInput.value = "" || withdrawInputNumber < 0)) {
      alert("Please enter a valid value");
      withdrawInput.value = "";
      return false;
    }
    const totalWithdraw = withdrawAmountNumber + withdrawInputNumber;
    const totalAmount = document.getElementById("total__amount");
    const totalAmountNumber = parseFloat(totalAmount.innerText);
    if (totalAmountNumber < withdrawInputNumber) {
      alert("sorry you don't have enough money");
      withdrawInput.value = "";
      return false
    } else {
      withdrawAmount.innerText = totalWithdraw;
      const total = totalAmountNumber - withdrawInputNumber;
      totalAmount.innerText = total;
      withdrawInput.value = "";
    }
  });
