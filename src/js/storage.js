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

// Функція для отримання списку покупок з локального сховища
function getShoppingList() {
  // Отримуємо список покупок з локального сховища
  const shoppingList = localStorage.getItem('shoppingList');

  // Перевіряємо, чи список покупок існує
  if (shoppingList) {
    // Розпарсимо список покупок з JSON і повернемо його
    return JSON.parse(shoppingList);
  } else {
    // Якщо список покупок не існує, повертаємо порожній масив
    return [];
  }
}

// Функція для очищення списку покупок у локальному сховищі
function clearShoppingList() {
  localStorage.removeItem('shoppingList');
  console.log('Список покупок очищено.');
}
