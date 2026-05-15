const demoUsername = 'demouser';
const demoUserPassword = 'fashion123';

// Toggle between login and signup panels
document.getElementById('showSignup').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('loginPanel').classList.add('is-hidden');
    document.getElementById('signupPanel').classList.remove('is-hidden');
});
document.getElementById('showLogin').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('signupPanel').classList.add('is-hidden');
    document.getElementById('loginPanel').classList.remove('is-hidden');
});

// Login — checks hardcoded demo user and any localStorage-registered users
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const isDemoUser = username === demoUsername && password === demoUserPassword;
    const isRegistered = registeredUsers.some(u => u.username === username && u.password === password);
    if (isDemoUser || isRegistered) {
        localStorage.setItem('isLoggedIn', true);
        window.location.href = 'account.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});

// Signup — persists new user to localStorage, then switches back to login
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value.trim();
    const email    = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    registeredUsers.push({ username: username, email: email, password: password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Switch back to login and pre-fill username
    document.getElementById('signupPanel').classList.add('is-hidden');
    document.getElementById('loginPanel').classList.remove('is-hidden');
    document.getElementById('username').value = username;
    document.getElementById('loginSuccessMessage').style.display = 'block';
});
