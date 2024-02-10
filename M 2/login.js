function formvalidate() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    let isFormValid = true;
  
    if (usernameInput.value.length < 2) {
      usernameError.innerHTML = 'Username must be at least 2 characters long.';
      isFormValid = false;
    } else {
      usernameError.textContent = '';
    }
  
    if (!validateEmail(emailInput.value)) {
      emailError.innerHTML = 'Please enter a valid email address.';
      isFormValid = false;
    } else {
      emailError.innerHTML = '';
    }
  
    if (passwordInput.value.length < 8 || passwordInput.value.includes(' ')) {
      passwordError.innerHTML = 'Password must have at least 8 characters with no spaces.';
      isFormValid = false;
    } else {
      passwordError.innerHTML = '';
    }
  
    return isFormValid;
  }
  
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }