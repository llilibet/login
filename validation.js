// Em validation.js
function validateLogin(email, password) {
    if (email.trim() === '' || password.trim() === '') {
        return false; 
    }
    return true;
}

module.exports = { validateLogin };