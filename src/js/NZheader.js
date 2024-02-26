import { addToShoppingList } from './API/storage';

const homeBtn = document.querySelector('.js-hhome');
const shoppingBtn = document.querySelector('.js-hshopping');

homeBtn.addEventListener('click', onHomeBtnClick);
shoppingBtn.addEventListener('click', onShoppingBtnClick);

function onHomeBtnClick() {
  homeBtn.classList.add('hhome-btn');
  shoppingBtn.classList.remove('hshopping-btn');
}

function onShoppingBtnClick() {
  homeBtn.classList.remove('hhome-btn');
  shoppingBtn.classList.add('hshopping-btn');
}

shoppingBtn.addEventListener('click', addToShoppingList);
