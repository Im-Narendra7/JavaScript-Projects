let inputElement = document.getElementById('name');
let passwordElement = document.getElementById('password');
let signInText = document.getElementById('signintext');

function signin() {
    let inputValue = inputElement.value;
    let password = passwordElement.value;

    let verifyText = "Hi" + inputValue + ", you are Signed in";
    if(!inputValue || !password) {
        signInText.textContent = "Please enter username and password";
        signInText.style.color = "red";
    }else if(password.length < 6) {
        signInText.textContent = "Password should be 6 characters"
        signInText.style.color = "red";

    } else{
        signInText.textContent = "Hi " + inputValue +", you are signed in"
        signInText.style.color = "green";
    }
}