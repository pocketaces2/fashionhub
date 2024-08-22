const validUsername = 'demouser';
const validPassword = 'fashion123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = 'account.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});