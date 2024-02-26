document.addEventListener('DOMContentLoaded', function () {
  // Знаходимо кнопку "add to shopping list"
  const addToShoppingListBtn = document.querySelector('.modal-list-btn');

  // Додаємо обробник події для кнопки
  addToShoppingListBtn.addEventListener('click', function () {
    // Отримуємо текст або інформацію, яку ви хочете додати до списку покупок
    const itemToAdd = document.querySelector('.modal-wrap').innerText;

    // Викликаємо функцію, яка додає елемент до списку покупок
    addToShoppingList(itemToAdd);
  });
});

// Функція для додавання елементу до списку покупок
function addToShoppingList(item) {
  // Отримуємо доступ до елементу списку покупок
  const shoppingList = document.querySelector('#shoppinglist-section');

  // Створюємо новий елемент списку покупок
  const newItem = document.createElement('div');
  newItem.textContent = item;

  // Додаємо новий елемент до списку покупок
  shoppingList.appendChild(newItem);
}
