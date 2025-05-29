const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    toggleBtn.textContent = '☀️ Modo Claro';
} else {
    toggleBtn.textContent = '🌓 Modo Oscuro';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '☀️ Modo Claro' : '🌓 Modo Oscuro';
});
