const homeBtn = document.querySelector('.js-hhome');
const shoppingBtn = document.querySelector('.js-hshopping');

document.addEventListener('DOMContentLoaded', onHomeBtnClick);

homeBtn.addEventListener('click', onHomeBtnClick);
shoppingBtn.addEventListener('click', onShoppingBtnClick);

function onHomeBtnClick() {
  homeBtn.classList.add('hhome-btn');
  shoppingBtn.classList.remove('hshopping-btn');
}

function onShoppingBtnClick(event) {
  event.homeBtn.classList.remove('hhome-btn');
  shoppingBtn.classList.add('hshopping-btn');
}
