// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.getElementById('togglePassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
});

// Check if credentials are saved in local storage and populate the form
window.onload = function() {
    if (localStorage.getItem('matricnumber') && localStorage.getItem('password')) {
        document.getElementById('matricnumber').value = localStorage.getItem('matricnumber');
        document.getElementById('password').value = localStorage.getItem('password');
        document.getElementById('rememberMe').checked = true;
    }
}

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var matricnumber = document.getElementById("matricnumber").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
    var errorMessage = document.getElementById("error-message");

    // Example credentials for demonstration
    var validMatricnumber = "2021050045";
    var validPassword = "josephenitan101";

    if (matricnumber === validMatricnumber && password === validPassword) {
        alert("Login successful! Redirecting to the portal...");
        if (rememberMe) {
            // Save credentials to local storage
            localStorage.setItem('matricnumber', matricnumber);
            localStorage.setItem('password', password);
        } else {
            // Clear credentials from local storage
            localStorage.removeItem('matricnumber');
            localStorage.removeItem('password');
        }
        // Redirect to the school portal dashboard page
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid matric number or password.";
    }
});
