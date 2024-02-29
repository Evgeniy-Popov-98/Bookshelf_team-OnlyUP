document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = window.location.href;
  const homeBtn = document.querySelector('.js-hhome');
  const shoppingBtn = document.querySelector('.js-hshopping');
  const homeBtnlink = document.querySelector('.header-home-link');
  const shoppingBtnlink = document.querySelector('.hshopping-icon');

  if (currentLocation.includes('index.html')) {
    homeBtn.classList.add('header-newbg');
    homeBtnlink.classList.remove('header-home-link');
  } else if (currentLocation.includes('shoppinglist.html')) {
    shoppingBtn.classList.add('header-newbg');
    shoppingBtnlink.classList.remove('hshopping-icon');
  }
});
