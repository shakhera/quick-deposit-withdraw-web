//step-1:  add click event handler with login button
document.getElementById('btn-login').addEventListener('click', function () {
    // console.log('clicked.......')

    //step-2: get the email address inside email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    //step-3: get the password address inside pass field
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    console.log(pass);

    if (email == 'shifa@khan.com' && pass == '123') {
        window.location.href = "bank.html"


    }
    else
        alert('Please enter a correct userName and Password')

    emailField.value = '';
    passField.value = '';

})