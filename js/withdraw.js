// ....>01:

document.getElementById('withdraw').addEventListener('click', function () {
    // .........>02:
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value; //input field tai .value
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value = '';

    if (isNaN(withdrawAmount)) {
        alert('please enter a valid number');
        return; // akhan there return kore,tai clear kore na,tai age dite hobe;
    }

    // console.log(withdrawAmount);
    // console.log(typeof withdrawAmount);

    //.........03: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    // console.log(withdrawTotal);
    // console.log(typeof withdrawTotal);

    //01: Balance Update for withdraw
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    console.log(totalBalance);
    // console.log(typeof totalBalance);



    if (withdrawAmount > totalBalance) {
        alert('Insufficient Balance');
        return;
    }

    //...........04: 
    const currentWithdrawAmount = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;
    // console.log(currentWithdrawAmount);

    //............02: 
    const currentTotalBalance = totalBalance - withdrawAmount;
    totalBalanceElement.innerText = currentTotalBalance;
    // console.log(currentTotalBalance);


})