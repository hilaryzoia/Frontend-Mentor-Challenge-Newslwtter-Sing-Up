document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-email');
    const button = document.querySelector('button');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            showError('Email is required');
        } else if (!emailRegex.test(email)) {
            showError('Valid email required');
        } else {
            hideError();
            // Aqui você pode adicionar o código para enviar o formulário
           window.location.href = 'sucess.html'
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        emailInput.classList.add('input-error');
    }

    function hideError() {
        errorMessage.style.display = 'none';
        emailInput.classList.remove('input-error');
    }

    // Limpar erro quando o usuário começar a digitar
    emailInput.addEventListener('input', function() {
        if (emailInput.classList.contains('input-error')) {
            hideError();
        }
    });

    // Efeito adicional no botão para melhor feedback
    button.addEventListener('mouseenter', function() {
        if (!button.classList.contains('loading')) {
            button.style.transform = 'translateY(-2px)';
        }
    });

    button.addEventListener('mouseleave', function() {
        if (!button.classList.contains('loading')) {
            button.style.transform = 'translateY(0)';
        }
    });
});


  
