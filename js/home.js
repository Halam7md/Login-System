var welcomeUser = document.getElementById("userName");
var userName = localStorage.getItem("userName");
var logOutBtn = document.getElementById("logOutBtn");

welcomeUser.innerHTML = "Welcome " + userName;

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});