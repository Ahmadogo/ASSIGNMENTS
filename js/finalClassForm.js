let form = document.getElementById ("form");
let firstName = document.getElementById ("first-name");
let lastName = document.getElementById ("last-name");
let email = document.getElementById ("email");
let phoneNo = document.getElementById ("phone-number");
let password = document.getElementById ("password");
let confirmPassword = document.getElementById ("confirm-password");

form.addEventListener('submit', function (e){
    e.preventDefault ();
    checkInput ();
});

function checkInput () {
    let firstNameValue = firstName.value.trim ();
    let lastNameValue = lastName.value.trim ();
    let emailValue = email.value.trim ();
    let phoneNoValue = phoneNo.value.trim ();
    let passwordValue = password.value.trim ();
    let confirmPasswordValue = confirmPassword.value.trim ();

    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }

    if (firstNameValue === "") {
        setErrorfor(firstName, "can not be blank");
    } else if (firstNameValue.length<2) {
        setErrorfor(firstName, "name must be above 2 characters");
    } else {
        setSuccessfor (firstName);
    }


    if (lastNameValue === "") {
        setErrorfor (lastName, "can not be blank");
    } else if (firstNameValue.length<2) {
        setErrorfor (lastName, "name must be above 2 characters");
    } else {
        setSuccessfor (lastName);
    }


    if (emailValue === "") {
        setErrorfor (email, "can not be blank");
    } else if (!isEmail(emailValue)) {
        setErrorfor (email, "invalid email");
    } else {
        setSuccessfor (email);
    }


    if (phoneNoValue === ""){
        setErrorfor (phoneNo, "can not be blank");
    } else if (phoneNoValue.length<10) {
        setErrorfor (phoneNo, "invalid phone number");
    } else {
        setSuccessfor (phoneNo);
    }


    if (passwordValue === ""){
        setErrorfor (password, "can not be blank");
    } else if (passwordValue.length<5){
        setErrorfor (password, "must be above 5 characters");
    } else{
        setSuccessfor (password);
    }


    if(confirmPasswordValue === ""){
        setErrorfor (confirmPassword, "can not be blank");
    } else if (confirmPasswordValue !== passwordValue) {
        setErrorfor (confirmPassword, "password do not match");
    } else {
        setSuccessfor (confirmPassword);
    }
}

function setErrorfor (input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector ("small");

    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessfor (input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

