
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 500);
    }
  });
document.addEventListener('DOMContentLoaded', () => {
  const bookBtn = document.querySelector('#book-btn');
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.popup-overlay');

  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.add('active');
      overlay.classList.add('active');
    });
  }

  overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
  });
});

