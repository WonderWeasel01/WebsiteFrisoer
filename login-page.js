const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "dennis" && password === "umaru") {
        window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        /* alert("You have successfully logged in."); 
        location.reload(); */
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})