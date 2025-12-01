import { validateLogin } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const showModal = (message) => {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalMessage = document.createElement('p');
        modalMessage.textContent = message;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Fechar';
        closeButton.className = 'modal-close-btn';

        const closeModal = () => {
            document.body.removeChild(modalOverlay);
        };

        closeButton.addEventListener('click', closeModal);
    
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        modalContent.appendChild(modalMessage);
        modalContent.appendChild(closeButton);
        modalOverlay.appendChild(modalContent);

        document.body.appendChild(modalOverlay);
    };
o
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        // Usa a função de validação importada para checar os campos
        if (validateLogin(emailValue, passwordValue)) {
            // Se for válido, mostra a mensagem de sucesso
            console.log('Login válido. Email:', emailValue);
            showModal('Login realizado com sucesso!');
        } else {
            // Se for inválido, mostra a mensagem de erro
            showModal('Por favor, preencha os campos de usuário e senha.');
        }
    });

});