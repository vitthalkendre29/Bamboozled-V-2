document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const collegeSelect = document.getElementById('college');
    const otherCollegeGroup = document.getElementById('otherCollegeGroup');
    const otherCollegeName = document.getElementById('otherCollegeName');

    // College selection logic
    collegeSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            otherCollegeGroup.style.display = 'block';
            otherCollegeName.required = true;
        } else {
            otherCollegeGroup.style.display = 'none';
            otherCollegeName.required = false;
        }
    });

    // Form validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Player Name Validation
        const playerName = document.getElementById('playerName');
        const playerNameError = document.getElementById('playerNameError');
        const nameRegex = /^[A-Za-z\s]{3,50}$/;
        if (!nameRegex.test(playerName.value.trim())) {
            playerNameError.style.display = 'block';
            isValid = false;
        } else {
            playerNameError.style.display = 'none';
        }

        // Contact Number Validation
        const contactNumber = document.getElementById('contactNumber');
        const contactNumberError = document.getElementById('contactNumberError');
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(contactNumber.value.trim())) {
            contactNumberError.style.display = 'block';
            isValid = false;
        } else {
            contactNumberError.style.display = 'none';
        }

        // Email Validation
        const emailAddress = document.getElementById('emailAddress');
        const emailAddressError = document.getElementById('emailAddressError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress.value.trim())) {
            emailAddressError.style.display = 'block';
            isValid = false;
        } else {
            emailAddressError.style.display = 'none';
        }

        // College Validation
        const collegeError = document.getElementById('collegeError');
        if (collegeSelect.value === '') {
            collegeError.style.display = 'block';
            isValid = false;
        } else {
            collegeError.style.display = 'none';
        }

        // Other College Name Validation (if selected)
        if (collegeSelect.value === 'other') {
            const otherCollegeNameError = document.getElementById('otherCollegeNameError');
            if (otherCollegeName.value.trim() === '') {
                otherCollegeNameError.style.display = 'block';
                isValid = false;
            } else {
                otherCollegeNameError.style.display = 'none';
            }
        }
        // If all validations pass, submit the form (you can replace this with actual submission logic)
        
    });
});