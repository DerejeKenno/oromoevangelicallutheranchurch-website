const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const footerBottom = document.querySelector('.footer-bottom');

if (footerBottom && !document.querySelector('.site-view-counter')) {
  const counter = document.createElement('p');
  counter.className = 'site-view-counter';
  counter.innerHTML = 'Total website views: <span id="site-view-count">Loading...</span>';
  footerBottom.appendChild(counter);

  const viewCount = counter.querySelector('#site-view-count');
  const counterUrl = 'https://countapi.mileshilliard.com/api/v1/hit/oromo-evangelical-lutheran-church-total-views';

  fetch(counterUrl, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to load website view count');
      }
      return response.json();
    })
    .then((data) => {
      const value = Number(data.value);
      viewCount.textContent = Number.isFinite(value) ? value.toLocaleString() : 'Unavailable';
    })
    .catch(() => {
      viewCount.textContent = 'Unavailable';
    });
}
