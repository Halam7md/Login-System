var loginEmailInput = document.getElementById("loginEmail");
var loginPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var signupAnchor = document.getElementById("signupAnchor");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  var loginEmail = loginEmailInput.value;
  var loginPassword = loginPasswordInput.value;

  if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
    window.alert('Please fill in all fields');
    return;
  }

  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "home.html";
  } else {
    window.alert('Incorrect email or password');
  }
}

function isCorrectEmailAndPassword(email, password) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

signupAnchor.addEventListener("click", function () {
  window.location.href = "signup.html";
});