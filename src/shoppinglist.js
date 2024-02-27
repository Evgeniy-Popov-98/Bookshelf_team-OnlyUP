import './js/switch-button';
import './js/NZheader';
import './js/API/storage';
import './js/localStorage';
import './js/pagination';
// shoppinglist.js

import { addToShoppingList } from '/js/localStorage';

document.addEventListener('DOMContentLoaded', async function () {
  await addToShoppingList();
});
