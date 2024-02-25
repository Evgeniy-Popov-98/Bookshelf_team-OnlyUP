document.addEventListener('DOMContentLoaded', function () {
  const removeButton = document.querySelector('.popup-btn');
  const shoppingListContainer = document.querySelector(
    '.shoppinglist-shoppinglist'
  );

  function removeFromShoppingList() {
    const itemsToRemove = document.querySelectorAll('.popup-container');

    itemsToRemove.forEach(item => {
      shoppingListContainer.removeChild(item);
    });

    document.querySelector('.popup-text09').textContent = '';
  }

  removeButton.addEventListener('click', removeFromShoppingList);
});
