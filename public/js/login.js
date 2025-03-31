document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        let submitButton = event.target.querySelector("button[type='submit']");
        submitButton.disabled = true; // Disable button to prevent multiple submissions
        submitButton.innerText = "Loging..."; // Change text to indicate progress

        let loginEmail = document.getElementById('loginEmail').value.trim();
        let loginContactNumber = document.getElementById('loginContactNumber').value.trim();

        // Validation
        let isValid = true;

        // Email Validation
        const loginEmailError = document.getElementById('loginEmailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginEmail)) {
            loginEmailError.style.display = 'block';
            isValid = false;
        } else {
            loginEmailError.style.display = 'none';
        }

        // Contact Number Validation
        const loginContactNumberError = document.getElementById('loginContactNumberError');
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(loginContactNumber)) {
            loginContactNumberError.style.display = 'block';
            isValid = false;
        } else {
            loginContactNumberError.style.display = 'none';
        }

        // Stop if validation fails
        if (!isValid) {
            submitButton.disabled = false; // Re-enable button if validation fails
            submitButton.innerText = "Login"; 
            return;
        }

        // Send login request
        try {
            let response = await fetch("https://bamboozled-v-2.vercel.app/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loginEmail, contactNumber: loginContactNumber })
            });

            let result = await response.json();
            
            if (response.ok) {
                // Store user information in localStorage
                localStorage.setItem('userEmail', loginEmail);
                localStorage.setItem('playername', result.name);
                
                // Redirect to main game page
                window.location.href = result.redirectUrl;
            } else {
                alert(result.message || "Login failed");
                submitButton.disabled = false; // Re-enable button if registration fails
                submitButton.innerText = "Login";
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login");
            submitButton.disabled = false; // Re-enable button on error
            submitButton.innerText = "Login";
        }
    });
});