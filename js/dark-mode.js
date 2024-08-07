const modeButton = document.getElementById('modeButton');
const modeIcon = document.getElementById('modeIcon');
modeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.navbar a').forEach(a => a.classList.toggle('dark-mode'));
    document.querySelectorAll('.progress .filled').forEach(filled => filled.classList.toggle('dark-mode'));

    if (document.body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌙';
    } else {
        modeIcon.textContent = '☀️';
    }
});
