const addButton = document.querySelector('.popup-btn');

const shoppingListContainer = document.querySelector(
  '.shoppinglist-shoppinglist'
);

function addToShoppingList() {
  const popupContent = document.querySelector('.popup-container').innerHTML;

  shoppingListContainer.innerHTML = popupContent;

  alert(
    'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'
  );
}

addButton.addEventListener('click', addToShoppingList);
