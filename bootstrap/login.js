let reqError = document.getElementById("req-error");
let mustLogin = document.getElementById("must-login");
let accountUsername = document.getElementById("account_username");
let h2Username = document.getElementById("h2_username");
let account = JSON.parse(localStorage.getItem("myAccount"));
let myAccount;

accountUsername.innerHTML = account.username;
h2Username.innerHTML = account.username;

function loginClick() {
    let incorrectMessage = document.getElementById("inc-msg");
    let reqError = document.getElementById("req-error");

    mustLogin.classList.add("d-none");
    reqError.classList.add("d-none");
    incorrectMessage.classList.add("d-none");
}

function login() {
    let incorrectMessage = document.getElementById("inc-msg");

    var login_username = document.getElementById("username").value;
    var login_password = document.getElementById("password").value;

    if (!login_username || !login_password) {
        reqError.classList.remove("d-none");
        errortMessage.classList.add("d-none");
    } else {
        reqError.classList.add("d-none");
        if (login_username == account.username && login_password == account.password) {
            window.location.href = "profile.html";
        } else {
          incorrectMessage.classList.remove("d-none");
        }
    }
}

function signup() {
    let reqError2 = document.getElementById("req-error2");
    let passError = document.getElementById("pass-error");

    var signup_username = document.getElementById("username2").value;
    var signup_email = document.getElementById("email").value;
    var signup_password = document.getElementById("password2").value;
    var confirmPassword= document.getElementById("confirmPassword").value;

    if (!signup_username || !signup_email || !signup_password || !confirmPassword) {
        reqError2.classList.remove("d-none");
        passError.classList.add("d-none");
    } else {
      reqError2.classList.add("d-none");
      if (signup_password == confirmPassword) {
          window.location.href = "profile.html";
      } else {
          passError.classList.remove("d-none");
      }
    }

    account = {
        username:signup_username,
        email:signup_email,
        password:signup_password
    }

    localStorage.setItem('myAccount', JSON.stringify(account));
}

function lessonsLogin() {
    mustLogin.classList.remove("d-none");
    reqError.classList.add("d-none");
}

function quizzesLogin() {
    mustLogin.classList.remove("d-none");
    reqError.classList.add("d-none");
}

function logout() {
    window.location.href = "home.html";
}