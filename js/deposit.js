//step-1
document.getElementById('deposit').addEventListener('click', function () {
    //step-2
    //get the deposit amount from deposit input field
    //
    const depositField = document.getElementById('deposit-amount');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    depositField.value = '';

    if (isNaN(depositAmount)) {
        alert("Please Enter a Valid number");
        return;
    }
    //step-3
    //get the current deposit amount

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step-4
    const currentDepositAmount = previousDepositTotal + depositAmount;
    depositTotalElement.innerText = currentDepositAmount;
    console.log(currentDepositAmount);


    // step---Balance Update
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    //,........
    const currentTotalBalance = previousTotalBalance + depositAmount;
    totalBalanceElement.innerText = currentTotalBalance;
    console.log(currentTotalBalance);

})

