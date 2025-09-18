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

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue === '' || passwordValue === '') {
            showModal('Por favor, preencha os campos de usuário e senha.');
        } else {
            console.log('Login válido. Email:', emailValue);
            showModal('Login realizado com sucesso!');
        }
    });

});