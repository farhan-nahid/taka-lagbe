function validateInput(inputID) {
  const inputValue = document.getElementById(inputID);
  const inputValueNumber = parseFloat(inputValue.value);
  if (inputValue.value == "" || inputValueNumber < 0) {
    alert("Please Enter a valid value");
    inputValue.value = "";
    return false;
  }
  inputValue.value = "";
  return inputValueNumber;
}

function totalAmount(boxID, inputNumber, isAdd) {
  const depositAmount = document.getElementById(boxID);
  const depositAmountNumber = parseFloat(depositAmount.innerText);
  const totalBalance = document.getElementById("total__amount");
  const totalBalanceNumber = parseFloat(totalBalance.innerText);
  if (isAdd === "add") {
    const totalDeposit = depositAmountNumber + inputNumber;
    depositAmount.innerText = totalDeposit;
    const total = totalBalanceNumber + inputNumber;
    totalBalance.innerText = total;
  } else {
    if (totalBalanceNumber < inputNumber) {
      alert("You can not withdraw more then your total amount");
      return false;
    } else {
      const totalDeposit = depositAmountNumber + inputNumber;
      depositAmount.innerText = totalDeposit;
      const total = totalBalanceNumber - inputNumber;
      totalBalance.innerText = total;
    }
  }
}

// deposit amount handling

document
  .getElementById("deposit__button")
  .addEventListener("click", function () {
    const depositInputNumber = validateInput("deposit__input");
    totalAmount("deposit__amount", depositInputNumber, "add");
  });

// withdraw amount handling

document
  .getElementById("withdraw__button")
  .addEventListener("click", function () {
    const withdrawInputNumber = validateInput("withdraw__input");
    totalAmount("withdraw__amount", withdrawInputNumber, "minus");
  });

/*

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
    const total = totalBalanceNumber + depositInputNumber;
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
  
  */
