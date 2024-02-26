// Функція для додавання книги до списку покупок
function addToShoppingList(bookId) {
  // Виконуємо запит до API за детальною інформацією про книгу
  fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    .then(response => response.json())
    .then(data => {
      // Отримуємо інформацію про книгу з відповіді API
      const bookInfo = data;

      // Додаємо інформацію про книгу до вашого шопінг-листа
      const shoppingList = document.querySelector('.shoppinglist-books');
      const bookElement = document.createElement('div');
      bookElement.classList.add('shoppinglist-book');

      // Створюємо HTML для відображення інформації про книгу
      bookElement.innerHTML = `
                <img src="${bookInfo.image}" alt="${bookInfo.title}" class="book-image">
                <div class="book-info">
                    <h2>${bookInfo.title}</h2>
                    <p>Author: ${bookInfo.author}</p>
                    <p>Price: $${bookInfo.price}</p>
                </div>
            `;

      // Додаємо елемент книги до списку покупок
      shoppingList.appendChild(bookElement);
    })
    .catch(error => {
      console.error(
        'Помилка при отриманні детальної інформації про книгу:',
        error
      );
    });
}
