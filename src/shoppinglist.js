import './js/switch-button';
import './js/NZheader';
import './js/API/storage';
import './js/localStorage';
// shoppinglist.js

import { addToShoppingList } from './js/API/storage';

document.addEventListener('DOMContentLoaded', async function () {
  await addToShoppingList();
});
