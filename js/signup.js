var signupBtn = document.getElementById("signupBtn");
var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var loginAnchor = document.getElementById("loginAnchor");

var users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  var user = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (
    signupNameInput.value === "" ||
    signupEmailInput.value === "" ||
    signupPasswordInput.value === ""
  ) {
    window.alert('Please fill in all fields');
    return;
  }

  if (
    isValidEmail(signupEmailInput.value) &&
    isNewEmail(signupEmailInput.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    window.alert("Sign up successful");
  } else {
    window.alert("Invalid email or email already in use");
}
}

function isValidEmail(email) {
  var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

function isNewEmail(email) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
}
);