name_err = document.getElementById("name_err");
email_err = document.getElementById("email_err");
password_err = document.getElementById("password_err");

function submithandler() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name) {
    // document.getElementById("name").style = "border-bottom: 2px solid #04ed8d";
    document.getElementById("name_err").style.visibility = "hidden";
    document.getElementById("name_ok").style.visibility = "visible";
  } else {
    // document.getElementById("name").style = "border-bottom: 2px solid #ff5757";
    document.getElementById("name_err").style.visibility = "visible";
    document.getElementById("name_ok").style.visibility = "hidden";
  }

  if (email) {
    // document.getElementById("email").style = "border-bottom: 2px solid #04ed8d";
    document.getElementById("email_err").style.visibility = "hidden";
    document.getElementById("email_ok").style.visibility = "visible";
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
}
