name_err = document.getElementById("name_err");
email_err = document.getElementById("email_err");
password_err = document.getElementById("password_err");
password_valid = document.getElementById("password_valid");
let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function submithandler() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (name) {
    // document.getElementById("name").style = "border-bottom: 2px solid #04ed8d";
    document.getElementById("name_err").style.visibility = "hidden";
    document.getElementById("name_ok").style.visibility = "visible";
  } else {
    // document.getElementById("name").style = "border-bottom: 2px solid #ff5757";
    document.getElementById("name_err").style.visibility = "visible";
    document.getElementById("name_ok").style.visibility = "hidden";
  }

  if (mobile) {
    // document.getElementById("name").style = "border-bottom: 2px solid #04ed8d";
    document.getElementById("mobile_err").style.visibility = "hidden";
    document.getElementById("mobile_ok").style.visibility = "visible";
  } else {
    // document.getElementById("name").style = "border-bottom: 2px solid #ff5757";
    document.getElementById("mobile_err").style.visibility = "visible";
    document.getElementById("mobile_ok").style.visibility = "hidden";
  }

  if (email) {
    if (email.match(emailPattern)) {
      document.getElementById("email_err").style.visibility = "hidden";
      document.getElementById("email_ok").style.visibility = "visible";
    } else {
      document.getElementById("email_err").style.visibility = "visible";
      document.getElementById("email_ok").style.visibility = "hidden";
    }
    // document.getElementById("email").style = "border-bottom: 2px solid #04ed8d";
  } else {
    // document.getElementById("email").style = "border-bottom: 2px solid #ff5757";
    document.getElementById("email_err").style.visibility = "visible";
    document.getElementById("email_ok").style.visibility = "hidden";
  }

  if (password) {
    // document.getElementById("password").style =
    //   "border-bottom: 2px solid #04ed8d";
    document.getElementById("password_err").style.visibility = "hidden";
    document.getElementById("password_ok").style.visibility = "visible";
  } else {
    // document.getElementById("password").style =
    // "border-bottom: 2px solid #ff5757";
    document.getElementById("password_err").style.visibility = "visible";
    document.getElementById("password_ok").style.visibility = "hidden";
  }
  if (confirm_password) {
    // document.getElementById("password").style =
    //   "border-bottom: 2px solid #04ed8d";
    document.getElementById("confirm_err").style.visibility = "hidden";
    document.getElementById("confirm_ok").style.visibility = "visible";
  } else {
    // document.getElementById("password").style =
    // "border-bottom: 2px solid #ff5757";
    document.getElementById("confirm_err").style.visibility = "visible";
    document.getElementById("confirm_ok").style.visibility = "hidden";
  }
}

function strength(password) {
  let i = 0;
  if (password.length > 6) {
    i++;
  }
  if (password.length >= 10) {
    i++;
  }
  if (/[A-Z]/.test(password)) {
    i++;
  }
  if (/[0-9]/.test(password)) {
    i++;
  }
  if (/[Aza-z0-8]/.test(password)) {
    i++;
  }
  return i;
}

function passwordStrength() {
  let passwordStrength = strength(password.value);
  console.log(passwordStrength, password);
  if (passwordStrength <= 2) {
    password_err.innerHTML = "Password is weak";
    password_err.style.visibility = "visible";
    password_err.style.color = "#ff5757";
  }
  if (passwordStrength > 2 && passwordStrength <= 4) {
    password_err.innerHTML = "Password is Medium";
    password_err.style.visibility = "visible";
    password_err.style.color = "#dd6903";
  }
  if (passwordStrength == 5) {
    password_err.innerHTML = "Password is Strong";
    password_err.style.visibility = "visible";
    password_err.style.color = "#04ed8d";
  }
}

function checkPasswords() {
  password = document.getElementById("password");
  cPassword = document.getElementById("confirm_password");
  if (password.value == cPassword.value) {
    document.getElementById("confirm_err").style.visibility = "visible";
    document.getElementById("confirm_ok").style.visibility = "hidden";
    document.getElementById("confirm_err").innerHTML = "Password Matched";
    document.getElementById("confirm_err").style.color = "#04ed8d";
  } else {
    document.getElementById("confirm_err").style.visibility = "visible";
    document.getElementById("confirm_ok").style.visibility = "hidden";
    document.getElementById("confirm_err").innerHTML =
      "Password didn't Matched";
  }
}
