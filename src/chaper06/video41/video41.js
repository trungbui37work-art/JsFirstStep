const username = document.getElementById("username");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");
const myForm = document.querySelector("form");
localStorage.setItem("name", "hoidanit@gmail.com");
localStorage.setItem("pass", "123456");
myForm.addEventListener("submit", () => {

    if (username.value === localStorage.getItem("name") && password.value === localStorage.getItem("pass")) {
        alert("Log in Success!");
    }
    else {
        event.preventDefault();
        alert("username or password is incorrect");
        username.style.borderColor = "red";
        password.style.borderColor = "red";
    }
});
