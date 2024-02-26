document.addEventListener('DOMContentLoaded', function () {
  // Находим кнопку "Shopping list" в хедере
  const shoppingListButton = document.querySelector('.js-hshopping');

  // Находим раздели "Home" і "Shopping list"
  const homeSection = document.getElementById('home-section');
  const shoppingListSection = document.getElementById('shoppinglist-section');

  // Добавляем обработчик события клика на кнопку "Shopping list"
  shoppingListButton.addEventListener('click', function (event) {
    // Отменяем стандартное действие ссылки
    event.preventDefault();

    // Скрываем раздел "Home"
    homeSection.style.display = 'none';

    // Показываем раздел "Shopping list"
    shoppingListSection.style.display = 'block';
  });
});
