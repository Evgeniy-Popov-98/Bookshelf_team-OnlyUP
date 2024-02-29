document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.querySelector('.js-hhome');
  const shoppingLink = document.querySelector('.js-hshopping');

  if (
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/'
  ) {
    homeLink.classList.add('active');
    shoppingLink.classList.remove('active');
  } else {
    shoppingLink.classList.add('active');
    homeLink.classList.remove('active');
  }
});
