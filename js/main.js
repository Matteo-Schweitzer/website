let loginUsernameInput = document.getElementById("loginUsername");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  let loginEmail = loginUsernameInput.value;
  let loginPassword = loginPasswordInput.value;

  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "website.html";
  } else if(loginEmail === "" || loginPassword === "") {
    window.alert("Please fill all boxes")
  } else {
    window.alert("Wrong username or password")
  }
}

function isCorrectEmailAndPassword(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  signIn();
});