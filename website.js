function login() {
    let username = prompt("Please enter your username:");
    let password;
    if (username == null || username == "") {
        window.alert("Username is empty!")
        window.location.href = "https://matteo-schweitzer.github.io/website/website.html";
        return
      } else {
        password = prompt("Please enter your password:");
        if (password == null || password == "") {
            window.alert("Password is empty!")
            window.location.href = "https://matteo-schweitzer.github.io/website/website.html";
            return
          }
      }
    if(username != "test" || password != "test") {
        window.alert("Wrong username or password")
        window.location.href = "https://matteo-schweitzer.github.io/website/website.html";
    }
}