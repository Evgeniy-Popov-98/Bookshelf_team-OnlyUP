document.addEventListener('DOMContentLoaded', function () {
  function displayBooks() {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks'));

    const bookList = document.querySelector('.shoppinglist-blocks');

    bookList.innerHTML = '';

    const imageElement = document.createElement('img');
    imageElement.src = '/src/images/your-svg-image.svg'; // Укажите путь к вашему изображению
    imageElement.alt = 'Shopping Image'; // Измените альтернативный текст на свой
    imageElement.className = 'shoppinglist-img96061';

    bookList.appendChild(imageElement);

    if (savedBooks && savedBooks.length > 0) {
      savedBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.textContent = book.title; // Предположим, что в объекте книги есть свойство "title"
        bookList.appendChild(bookElement);
      });
    } else {
      const emptyMessage = document.createElement('h2');
      emptyMessage.textContent =
        'There are no books added to the shopping list.';
      bookList.appendChild(emptyMessage);
    }
  }

  displayBooks();
});
