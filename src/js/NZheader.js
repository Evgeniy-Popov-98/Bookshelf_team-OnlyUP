import { addToShoppingList } from './API/storage';
import refs from './API/refs'

//const homeBtn = document.querySelector('.js-hhome');
//const shoppingBtn = document.querySelector('.js-hshopping');

document.addEventListener('DOMContentLoaded', onHomeBtnClick);

refs.homeBtn.addEventListener('click', onHomeBtnClick);
refs.shoppingBtn.addEventListener('click', onShoppingBtnClick);

function onHomeBtnClick() {
  refs.homeBtn.classList.add('hhome-btn');
  refs.shoppingBtn.classList.remove('hshopping-btn');
}

function onShoppingBtnClick() {
  refs.homeBtn.classList.remove('hhome-btn');
  refs.shoppingBtn.classList.add('hshopping-btn');
}

refs.shoppingBtn.addEventListener('click', addToShoppingList);
