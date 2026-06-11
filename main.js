const button = document.getElementById('acessibilidade');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('accessible');
});