// Em validation.js
function validateLogin(email, password) {
    if (email.trim() === '' || password.trim() === '') {
        return false; // Inválido
    }
    return true; // Válido
}

module.exports = { validateLogin };