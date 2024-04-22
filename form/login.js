// Form validation and submission
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;

    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    if (password.trim() === "") {
        alert("Please enter your password.");
        return;
    }

    // Simulated backend validation
    const isValidUser = validateUser(email, password);

    if (!isValidUser) {
        alert("Invalid email or password.");
        return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
});

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("psw");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
});

// Simulated backend user validation
function validateUser(email, password) {
    const users = [
        { email: "jane@yahoo.com", password: "Admin123" },
        { email: "user2@yahoo.com", password: "123Admin123" }
    ];

    // Check if there's a user with the provided email and password
    return users.some(user => user.email === email && user.password === password);
}

// Export the validateUser function
module.exports = {
    validateUser: validateUser
};

