function validateForm() {
    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let message;
    let messageElement = document.getElementById('message');

    emailInput.classList.remove('error');
    messageElement.classList.remove('error-message');

    if(emailValue.trim() === "") {
        message = "Whoops! It looks like you forgot to add your email";
        emailInput.classList.add('error');
        messageElement.classList.add('error-message');
    } else if(emailPattern.test(emailValue)) {
        message = "Successfully subscribed!";
    } else {
        message = "Please provide a valid email address";
        emailInput.classList.add('error');
        messageElement.classList.add('error-message');
    }

    messageElement.innerHTML = message;
}