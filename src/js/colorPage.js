import refs from './API/refs';

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('.js-hhome a');
    const shoppingLink = document.querySelector('.hshopping-link');

    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
      homeLink.classList.add('active');
      shoppingLink.classList.remove('active');
    }else{
        shoppingLink.classList.add('active');
        homeLink.classList.remove('active');
    }
  });