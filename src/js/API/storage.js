import { getBooks } from './api-books';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  TASKS_KEY,
} from '../localStorage';
import img9606 from '/images/IMG_9606.png';
import amazonSvg from '/images/amazon.svg';
import bookSvg from '/images/book.svg';
import trashSvg from '/images/trash.svg';

const shoppingListContainer = document.querySelector('.shoppinglist-container');
const emptyMessage = `
    <div class="shoppinglist-blocks">
        <h2>This page is empty, add some books and proceed to order.</h2>
        <img src="${img9606}" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;

export async function addToShoppingList() {
  try {
    const booksIds = infoItemLocalStorage(TASKS_KEY); // Отримуємо масив ідентифікаторів книг з локального сховища

    if (!booksIds || !booksIds.length) {
      // Відображаємо повідомлення про порожній список, якщо немає книг
      shoppingListContainer.innerHTML = emptyMessage;
      return;
    }

    let markup = '';

    for (const bookId of booksIds) {
      const dataBook = await getBooks(bookId);
      markup += createBookMarkup(dataBook);
    }

    shoppingListContainer.innerHTML = markup;
  } catch (error) {
    console.error('Помилка отримання даних книги:', error);
  }
}

function createBookMarkup(book) {
  return `
    <div class="container-block">
        <!-- Розмітка для відображення інформації про книгу -->
        <div class="btn-and-links">
            <button class="trash-btn"><img src="${trashSvg}" alt=""></button>
            <ul class="links">
                <li><img src="${amazonSvg}" class="amazon"></li>
                <li><img src="${bookSvg}"></li>
            </ul>
        </div>
        <img src="${book.book_image}" alt="${book.title}" class="book-image">
        <div class="text-area">
            <h2 class="shopping-list-title">${book.title}</h2>
            <h2 class="shopping-list-title-name">${book.list_name}</h2>
            <p class="shopping-list-description">${book.description}</p>
            <h2 class="shopping-list-author">${book.author}</h2>
        </div>
    </div>
  `;
}

shoppingListContainer.addEventListener('click', function (event) {
  const target = event.target;
  if (target.classList.contains('trash-btn')) {
    const bookContainer = target.closest('.container-block');
    const bookId = bookContainer.getAttribute('data-book-id');

    const booksIds = infoItemLocalStorage(TASKS_KEY) || [];
    const index = booksIds.indexOf(bookId);
    if (index !== -1) {
      booksIds.splice(index, 1); // Видаляємо ідентифікатор книги з масиву
      addItemLocalStorage(TASKS_KEY, booksIds); // Оновлюємо локальне сховище
    }

    bookContainer.remove(); // Видаляємо HTML елемент книги зі списку покупок
  }
});
