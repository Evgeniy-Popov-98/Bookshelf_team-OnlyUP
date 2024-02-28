import '../NZheader';
import { getBooks } from './api-books';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  TASKS_KEY,
} from '../localStorage';
import '../switch-button';
import img9606 from '/images/IMG_9606.png';
import amazonSvg from '/images/amazon.svg';
import bookSvg from '/images/book.svg';
import trashSvg from '/images/trash.svg';
// import tuiPagination from 'tui-pagination'; // Імпортуємо бібліотеку пагінації

const shoppingListContainer = document.querySelector('.shoppinglist-container');
const emptyMessage = `
    <div class="shoppinglist-blocks">
        <h2 class="text">This page is empty, add some books and proceed to order.</h2>
        <img src="${img9606}" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;

export async function addToShoppingList(event) {
  event.defaultPrevented();
  console.log(1);
  try {
    const booksIds = infoItemLocalStorage(TASKS_KEY);
    console.log(booksIds);

    if (!booksIds || !booksIds.length) {
      shoppingListContainer.innerHTML = emptyMessage;
      return;
    }

    let markup = '';

    for (const bookId of booksIds) {
      const dataBook = await getBooks(bookId);
      markup += createBookMarkup(dataBook, bookId);
    }

    shoppingListContainer.innerHTML = markup;

    // Оновлення пагінації після додавання книг
    updatePagination();
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
}

function createBookMarkup(book, bookId) {
  return `
    <div class="container-block" data-book-id="${bookId}">
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

function updatePagination() {
  // Отримуємо кількість сторінок на основі кількості книг
  const booksIds = infoItemLocalStorage(TASKS_KEY);
  const totalPages = Math.ceil(booksIds.length / 4); // По 4 книги на сторінку

  // Ініціалізуємо або оновлюємо пагінацію
  const pagination = new tuiPagination('pagination', {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 5,
  });
}

// shoppingListContainer.addEventListener('click', function (event) {
//   const target = event.target;
//   if (event.target.nodeName !== 'BUTTON' || event.target.nodeName !== 'IMG') {
//     const bookContainer = target.closest('.container-block');
//     const bookId = bookContainer.getAttribute('data-book-id');

//     const booksIds = infoItemLocalStorage(TASKS_KEY) || [];
//     const index = booksIds.indexOf(bookId);
//     if (index !== -1) {
//       booksIds.splice(index, 1);
//       addItemLocalStorage(TASKS_KEY, booksIds);
//     }

//     bookContainer.remove();

//     if (!shoppingListContainer.querySelector('.container-block')) {
//       shoppingListContainer.innerHTML = emptyMessage;
//     }

//     // Оновлення пагінації після видалення книги
//     updatePagination();
//   }
// });
