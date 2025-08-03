const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
});
