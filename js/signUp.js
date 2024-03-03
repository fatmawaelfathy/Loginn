let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let alertMassage = document.getElementById('alertMassage');
let userContainer = [];

if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}


function signUp() {
    let data = {
        userName: userNameInput.value,
        email: emailInput.value,
        passwrod: passwordInput.value
    }
    if (checkInputsEmpty() == true) {
        //alert message
        getAlertMessage('All Inputs Required', 'red');
    }
    else {
        if(checkEmailExist() == true)
        {
            getAlertMessage('Email Already Exist', 'red');
        }
        else
        {
            userContainer.push(data);
            localStorage.setItem('Users', JSON.stringify(userContainer));
            clrFrorm();
            getAlertMessage('Success', 'green');
        }
    }
    // console.log(userContainer);
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function clrFrorm() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function checkInputsEmpty() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
function checkEmailExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailInput.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)

