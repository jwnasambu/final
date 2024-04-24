document.addEventListener('DOMContentLoaded', function () {
    // Password visibility toggler
    document.getElementById('togglePassword1').addEventListener('click', function () {
        togglePasswordVisibility('password', 'togglePassword1');
    });

    document.getElementById('togglePassword2').addEventListener('click', function () {
        togglePasswordVisibility('confirmPassword', 'togglePassword2');
    });

    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        var firstName = document.getElementById('firstName').value;
        var surname = document.getElementById('surname').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var location = document.getElementById('location').value;
        var countryCode = document.getElementById('countryCode').value;
        var mobileNumber = document.getElementById('mobileNumber').value;
        var height = parseFloat(document.getElementById("height").value);
        var weight = parseFloat(document.getElementById("weight").value);
        var bloodType = document.getElementById("bloodTypeInput").value;

        // Simple validation
        if (firstName.trim() === '') {
            alert('Please enter your first name');
            return;
        }

        if (surname.trim() === '') {
            alert('Please enter your surname');
            return;
        }

        if (email.trim() === '') {
            alert('Please enter your email');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password');
            return;
        }
      
        if (confirmPassword.trim() === '') {
            alert('Please confirm your password');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (dateOfBirth.trim() === '') {
            alert('Please enter your date of birth');
            return;
        }

        if (gender.trim() === '') {
            alert('Please select your gender');
            return;
        }

        if (location.trim() === '') {
            alert('Please enter your location');
            return;
        }

        if (countryCode.trim() === '') {
            alert('Please enter your country code');
            return;
        }

        if (mobileNumber.trim() === '') {
            alert('Please enter your mobile number');
            return;
        }

        if (!isValidMobileNumber(mobileNumber)) {
            alert('Please enter a valid mobile number');
            return;
        }

        if (height < 45 || height > 240) {
            alert("Height must be between 45 and 240 cm");
            return;
        }

         if (isNaN(height) || height < 45 || height > 240) {
         alert("Height must be a number between 45 and 240 cm");
         return;
        }

         if (isNaN(weight) || weight < 2.5 || weight > 220) {
         alert("Weight must be a number between 2.5 and 220 kg");
         return;
        }

        if (!isValidBloodType(bloodType)) {
        alert('Please enter a valid blood type (A, B, AB, or O)');
        return;
        }

        alert('Form submitted successfully');
        });

    // Initialize intlTelInput
    var input = document.querySelector("#mobileNumber");
    var iti = window.intlTelInput(input, {
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" 
    });

    // Update country code field on change
    input.addEventListener("countrychange", function () {
        document.getElementById("countryCode").value = "+" + iti.getSelectedCountryData().dialCode;
    });

    // Function to toggle password visibility
    function togglePasswordVisibility(inputId, iconId) {
        var passwordInput = document.getElementById(inputId);
        var icon = document.getElementById(iconId);

        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            passwordInput.setAttribute('type', 'password');
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    }

    // Function to validate blood type
    function isValidBloodType(bloodType) {
        var validBloodTypes = ['A', 'B', 'AB', 'O'];
        return validBloodTypes.includes(bloodType.toUpperCase());
    }
});
