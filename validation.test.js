// Em validation.test.js
const { validateLogin } = require('./validation.js');

// --- Teste de Aprovação ---
test('deve retornar true para email e senha preenchidos', () => {
    expect(validateLogin('teste@email.com', '123456')).toBe(true);
});

// --- Teste de Reprovação ---
test('deve retornar false se a senha estiver vazia', () => {
    expect(validateLogin('teste@email.com', '')).toBe(false);
});