document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.querySelector('.nav-links');
  let currentLang = 'en';

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    langToggle.textContent = currentLang === 'en' ? '中文' : 'EN';
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';

    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
      el.textContent = el.getAttribute(currentLang === 'en' ? 'data-en' : 'data-zh');
    });
  });

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    navbar.style.boxShadow = current > 10 ? '0 1px 8px rgba(0,0,0,0.08)' : 'none';
    lastScroll = current;
  });
});
