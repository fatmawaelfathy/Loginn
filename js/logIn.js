let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');
let alertMassage=document.getElementById('alertMassage');
let userContainer = [];
if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}
function logIn() {
    if(checkInputsEmpty() == true)
    {
        //alert message
        getAlertMessage('All Inputs Required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            //navigate home page
            window.location.href='home.html';
        }
        else
        {
            //alert message 
            getAlertMessage('Email or Password notCorrect','red');
        }
    }
   
}
function checkEmailPassword() {
    for (let index = 0; index < userContainer.length; index++) {
        if (userContainer[index].email == emailLoginInput.value && userContainer[index].passwrod == passwordLoginInput.value) {
            localStorage.setItem('userName',userContainer[index].userName)
            return true;
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( emailLoginInput.value == '' || passwordLoginInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn);