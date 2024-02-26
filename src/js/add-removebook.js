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
  // Перевіряємо, чи існує список покупок у localStorage
  let shoppingList = localStorage.getItem('shoppingList');

  // Якщо список покупок не існує або порожній, створюємо новий порожній масив
  if (!shoppingList || shoppingList === '') {
    shoppingList = [];
  } else {
    // Якщо список покупок існує, розпарсимо його з JSON
    shoppingList = JSON.parse(shoppingList);
  }

  // Додаємо новий елемент до списку покупок
  shoppingList.push(item);

  // Зберігаємо оновлений список покупок у localStorage
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

  // Тут ви також можете додати код для відображення списку покупок на сторінці
  console.log('Додано до списку покупок:', item);
}
