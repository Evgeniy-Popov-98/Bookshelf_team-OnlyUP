document.addEventListener('DOMContentLoaded', function () {
  const shoppingListContainer = document.querySelector(
    '.shoppinglist-shoppinglist'
  );

  function displayBooks() {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

    shoppingListContainer.innerHTML = '';

    if (savedBooks.length > 0) {
      savedBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.textContent = book.title;
        shoppingListContainer.appendChild(bookElement);
      });
    } else {
      const emptyMessage = document.createElement('h2');
      emptyMessage.textContent =
        'There are no books added to the shopping list.';
      shoppingListContainer.appendChild(emptyMessage);
    }
  }

  displayBooks();

  const addButton = document.querySelector('.popup-btn');
  addButton.addEventListener('click', function () {
    const popupContent = document.querySelector('.popup-container').innerHTML;
    const shoppingListItem = document.createElement('div');
    shoppingListItem.innerHTML = popupContent;
    shoppingListContainer.appendChild(shoppingListItem);

    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.push({ title: 'Book Title' }); // Приклад додавання книги в localStorage
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));

    alert(
      'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'
    );
  });

  shoppingListContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup-btn')) {
      event.target.parentElement.remove();

      const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

      const indexToRemove = savedBooks.findIndex(
        book => book.title === 'Book Title'
      );
      if (indexToRemove !== -1) {
        savedBooks.splice(indexToRemove, 1);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
      }
    }
  });
});
