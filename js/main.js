document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'en';

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      langToggle.textContent = currentLang === 'en' ? '中文' : 'EN';
      document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';
      document.querySelectorAll('[data-en][data-zh]').forEach(el => {
        el.textContent = el.getAttribute(currentLang === 'en' ? 'data-en' : 'data-zh');
      });
    });
  }
});
