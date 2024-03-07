document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.querySelector('.js-hhome');
  const shoppingLink = document.querySelector('.js-hshopping');
  const homeMobLink = document.querySelector('.hmodal-home-btn');
  const shoppingMobLink = document.querySelector('.hmodal-shopping-link');

  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    homeLink.classList.toggle('active');
    shoppingLink.classList.toggle('active');
  } else {
    // homeMobLink.classList.toggle('mob-nav-color');
    // shoppingMobLink.classList.toggle('mob-nav-color');
  }
});
