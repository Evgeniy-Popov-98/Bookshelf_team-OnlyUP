import { addToShoppingList } from './API/storage';

document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = window.location.href;
  const homeBtn = document.querySelector('.js-hhome');
  const shoppingBtn = document.querySelector('.js-hshopping');


  if (currentLocation.includes('index.html')) {
    homeBtn.classList.add('active-page');
  } else if (currentLocation.includes('shoppinglist.html')) {
    shoppingBtn.classList.add('active-page');
  }
});

