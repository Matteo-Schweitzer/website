let signupBtn = document.getElementById("signupBtn");
let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("signupUsername");
let signupPasswordInput = document.getElementById("signupPassword");
let loginAnchor = document.getElementById("loginAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    name: signupNameInput.value,
    username: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (
    signupNameInput.value === "" ||
    signupEmailInput.value === "" ||
    signupPasswordInput.value === ""
  ) {
    swal({
      text: "Please fill in all fields",
    });
    return;
  }

  if (
    isNewEmail(signupEmailInput.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
  }
}

signupBtn.addEventListener("click", function () {
  signUp();
});

function isNewEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === email) {
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
});
