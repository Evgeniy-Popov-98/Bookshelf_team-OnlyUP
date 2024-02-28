document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = window.location.href;
  const homeBtn = document.querySelector('.js-hhome');
  const shoppingBtn = document.querySelector('.js-hshopping');

  if (currentLocation.includes('index.html')) {
    homeBtn.classList.add('active-page');
  } else if (currentLocation.includes('shoppinglist.html')) {
    shoppingBtn.classList.add('active-page');
  }
});

// function onHomeBtnClick() {
//   homeBtn.classList.add('hhome-btn');
//   shoppingBtn.classList.remove('hshopping-btn');
// }

// function onShoppingBtnClick(event) {
//   event.homeBtn.classList.remove('hhome-btn');
//   shoppingBtn.classList.add('hshopping-btn');
// }
