// Script para sincronizar o switch (theme-switch__checkbox) com a classe `tema-escuro` no <body>
// e persistir a preferência no localStorage.

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.theme-switch__checkbox');
    if (!checkbox) {
        console.warn('Checkbox do switch não encontrado (classe .theme-switch__checkbox).');
        return;
    }

    // Restaura tema salvo
    const temaSalvo = localStorage.getItem('tema');
    const temaEscuro = temaSalvo === 'escuro';
    document.body.classList.toggle('tema-escuro', temaEscuro);
    checkbox.checked = temaEscuro;

    // Quando o usuário altera o checkbox, atualiza body e localStorage
    checkbox.addEventListener('change', () => {
        const ehEscuro = checkbox.checked;
        document.body.classList.toggle('tema-escuro', ehEscuro);
        localStorage.setItem('tema', ehEscuro ? 'escuro' : 'claro');
    });
});