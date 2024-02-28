import '../NZheader';
import '../API/header1';
import { getBooks } from './api-books';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  restoreData,
  TASKS_KEY,
} from '../localStorage';
import '../switch-button';
import img9606 from '/images/IMG_9606.png';
import amazonSvg from '/images/amazon.svg';
import bookSvg from '/images/book.svg';
import trashSvg from '/images/trash.svg';
import tuiPagination from 'tui-pagination'; // Імпортуємо бібліотеку пагінації

const shoppingListContainer = document.querySelector(
  '.shoppinglist-shoppinglist'
);

// Функція для створення елементу <h1 class="shoppinglist-text">
function createShoppingListHeader() {
  // Перевірка наявності елемента перед створенням нового
  const existingHeader =
    shoppingListContainer.querySelector('.shoppinglist-text');
  if (existingHeader) {
    return existingHeader;
  }

  const header = document.createElement('h1');
  header.classList.add('shoppinglist-text');
  header.innerHTML = `
        <span class="shoppinglist-text1">Shopping</span>
        List
    `;
  return header;
}

// Додавання елементу <h1 class="shoppinglist-text"> до shoppingListContainer
shoppingListContainer.appendChild(createShoppingListHeader());

const emptyMessage = `
<h1 class="shoppinglist-text">Shopping
	<span class="shoppinglist-text1">List</span>
</h1>
<div class="shoppinglist-blocks">
    <h2 class="text">This page is empty, add some books and proceed to order.</h2>
    <img src="${img9606}" alt="Shopping Image" class="shoppinglist-img96061">
</div>
`;

async function addToShoppingList() {
  try {
    const booksIds = infoItemLocalStorage(TASKS_KEY);

    if (!booksIds || !booksIds.length) {
      shoppingListContainer.innerHTML = emptyMessage;
      return;
    }

    let markup = '';

    for (const bookId of booksIds) {
      const dataBook = await getBooks(bookId.constID);
      markup += createBookMarkup(dataBook, bookId);
    }

    shoppingListContainer.innerHTML += markup; // Додайте новий вміст до існуючого

    // Оновлення пагінації після додавання книг
    // updatePagination();
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
}

function createBookMarkup(book, bookId) {
  const bookDescription = book.description
    ? book.description
    : "With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.";

  console.log(bookDescription);

  return `
<div class="container-block" id="${bookId.constID}">    
    <img src="${book.book_image}" alt="${book.title}" class="book-image">
    <div class="text-area">
        <h2 class="shopping-list-title">${book.title}</h2>
        <h2 class="shopping-list-title-name">${book.list_name}</h2>
        <p class="shopping-list-description">${bookDescription}</p>
        <h2 class="shopping-list-author">${book.author}</h2>
    </div>
        <button class="trash-btn"><img src="${trashSvg}" alt=""></button>
        <ul class="links">
            <li><a target="_blank" href="${book.buy_links[0].url}"><img src="${amazonSvg}" class="amazon"></a></li>
            <li><a target="_blank" href="${book.buy_links[1].url}"><img src="${bookSvg}"  class="apple-book"></a></li>
        </ul>
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

shoppingListContainer.addEventListener('click', function (event) {
  const target = event.target;
  if (
    event.target.parentNode.nodeName === 'BUTTON' ||
    event.target.nodeName === 'BUTTON'
  ) {
    const bookContainer = target.closest('.container-block');
    const bookId = bookContainer.getAttribute('id');
    let newArr = [];
    const dataArr = infoItemLocalStorage(TASKS_KEY);
    for (const item of dataArr) {
      if (item.constID !== bookId) {
        newArr.push(item);
      }
    }
    addItemLocalStorage(TASKS_KEY, newArr);

    bookContainer.remove();

    if (!shoppingListContainer.querySelector('.container-block')) {
      shoppingListContainer.innerHTML = emptyMessage;
    }

    // Оновлення пагінації після видалення книги
    // updatePagination();
  }
});

addToShoppingList();
