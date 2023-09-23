name_err = document.getElementById("name_err");
email_err = document.getElementById("email_err");
password_err = document.getElementById("password_err");

function submithandler() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name) {
    document.getElementById("name").style = "border-bottom: 2px solid #04ed8d";
  } else {
    document.getElementById("name").style = "border-bottom: 2px solid #ff5757";
    document.getElementById("name").style.placeholderColor = "#ff5757";
  }

  if (email) {
    document.getElementById("email").style = "border-bottom: 2px solid #04ed8d";
  } else {
    document.getElementById("email").style = "border-bottom: 2px solid #ff5757";
  }

  if (password) {
    document.getElementById("password").style =
      "border-bottom: 2px solid #04ed8d";
  } else {
    document.getElementById("password").style =
      "border-bottom: 2px solid #ff5757";
  }
}
