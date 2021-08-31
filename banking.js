/*
  =============================  
        deposit  banking
  =============================
*/

document
  .getElementById("deposit__button")
  .addEventListener("click", function () {
    //   input validation
    const depositInput = document.getElementById("deposit__input");
    const depositInputNumber = parseFloat(depositInput.value);
    if (depositInput.value == "" || depositInputNumber <= 0) {
      alert("please enter a valid value!!!");
      depositInput.value = "";
      return false;
    }

    // deposit box

    const depositAmount = document.getElementById("deposit__amount");
    const depositAmountNumber = parseFloat(depositAmount.innerText);
    const totalDeposit = depositInputNumber + depositAmountNumber;
    depositAmount.innerText = totalDeposit;

    // total balance box

    const totalAmount = document.getElementById("total__amount");
    const totalAmountNumber = parseFloat(totalAmount.innerText);
    const total = totalAmountNumber + totalDeposit;
    totalAmount.innerText = total;

    // clear the input field after update
    depositInput.value = "";
  });

/*
  ===============================  
        withdraw banking
  ===============================
*/

document
  .getElementById("withdraw__button")
  .addEventListener("click", function () {
    //   input validation
    const withdrawInput = document.getElementById("withdraw__input");
    const withdrawInputNumber = parseFloat(withdrawInput.value);
    if (withdrawInput.value == "" || withdrawInputNumber <= 0) {
      alert("please enter a valid value!!!");
      withdrawInput.value = "";
      return false;
    }

    // withdraw box

    const withdrawAmount = document.getElementById("withdraw__amount");
    const withdrawAmountNumber = parseFloat(withdrawAmount.innerText);
    const totalWithdraw = withdrawInputNumber + withdrawAmountNumber;

    // total balance box

    const totalAmount = document.getElementById("total__amount");
    const totalAmountNumber = parseFloat(totalAmount.innerText);

    // check total amount is bigger then withdraw?
    if (totalAmountNumber < totalWithdraw) {
      alert("Sorry You Don't have money!!");
      withdrawInput.value = "";
      return false;
    } else {
      const total = totalAmountNumber - totalWithdraw;
      totalAmount.innerText = total;
      withdrawAmount.innerText = totalWithdraw;
      // clear the input field after update
      withdrawInput.value = "";
    }
  });
