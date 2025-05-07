// main.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('contact-btn');
  const menu = document.getElementById('contact-menu');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });

  console.log('Black ~ Suite loaded successfully');
});
