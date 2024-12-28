document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Handle form submission
    loginForm.onsubmit = function (event) {
        event.preventDefault(); // Prevent default form submission
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation (can be enhanced)
        if (email === "" || password === "") {
            messageDiv.innerText = "Please fill in all fields.";
        } else {
            messageDiv.innerText = "Login successful!"; // Simulate success
            // Here you can add further logic to handle user authentication, etc.
        }
    }
});
