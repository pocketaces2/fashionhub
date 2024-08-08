document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("isLoggedIn")) {
        // If not logged in, redirect to the login page
        window.location.href = "login.html";
    } else {
        // If logged in, display the account page content
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
