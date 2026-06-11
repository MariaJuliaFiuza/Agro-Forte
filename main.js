// Seleciona o botão de acessibilidade
const accessibilityBtn = document.getElementById('accessibility-btn');

// Define um estado para alternar o tamanho da fonte
let isLarge = false;

accessibilityBtn.addEventListener('click', () => {
    document.body.classList.toggle('large-text');
    isLarge = !isLarge;

    // Muda o texto do botão de acordo com o estado
    accessibilityBtn.textContent = isLarge ? 'Reduzir Fonte' : 'Aumentar Fonte';
});