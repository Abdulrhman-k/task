document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!name.value || !email.value || !password.value) {
    return;
    }
    
    const isValidName = /^[a-zA-Z ]{2,30}$/.test(name.value);
    const isValidEmail = checkEmailFormat(email.value);
    const passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password.value);
    
    if (!isValidName === length < 3) {
    notify("Please enter a valid username.", "error");
    } else if (!isValidEmail) {
    notify("Please enter a valid email address.", "error");
    } else if (!passwordStrength ) {
    notify(
    "Your password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number.",
    "error"
    );
    } else {
    // Perform form submission
    notify("Form submitted successfully!");
    }
    
    name.value = "";
    email.value = "";
    password.value = "";
    });
    
    function checkEmailFormat(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
    
    function notify(message, type = "success") {
    const formMessage = document.createElement("div");
    formMessage.className = `form-message form-message--${type}`;
    formMessage.textContent = message;
    form.appendChild(formMessage);
    
    setTimeout(() => {
    formMessage.remove();
    }, 3000);
    }
    });