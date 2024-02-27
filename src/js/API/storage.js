// storage.js

import { getBooks } from './api-books';

const shoppingList = document.querySelector('.shoppinglist-blocks');
// const categoriesBooks = document.querySelector('.js-all-categories');
// const bestBooks = document.querySelector('.js-home-pg');

export async function addToShoppingList() {
  // Виконуємо запит до API за детальною інформацією про книгу
  //   categoriesBooks.style.display = 'none';
  //   bestBooks.style.display = 'none';

  const bookId = '643282b1e85766588626a0dc';

  const dataBook = await getBooks(bookId);

  // Створюємо HTML для відображення інформації про книгу
  const markup = `
    <div class="container-block">
        <div class="btn-and-links">
            <button class="trash-btn"><img src="/src/images/trash-03.png" alt=""></button>
            <ul class="links">
                <li><img src="/src/images/amazon.png" class="amazon"></li>
                <li><img src="/src/images/book.png" class="book"></li>
            </ul>
        </div>
        <img src="${dataBook.book_image}" class="book-img"> <!-- Змінено клас 'book-img' на 'book-image' -->
        <div class="text-area">
            <h2 class="title">${dataBook.title}</h2> <!-- Змінено клас 'title' на 'shopping-list-title' -->
            <h2 class="janr">${dataBook.list_name}</h2> <!-- Змінено клас 'janr' на 'shopping-list-title-name' -->
            <p class="description">${dataBook.description}</p> <!-- Змінено клас 'description' на 'shopping-list-description' -->
            <h2 class="author-book">${dataBook.author}</h2> <!-- Змінено клас 'author-book' на 'shopping-list-author' -->
        </div>
    </div>
`;

  // Вставка розмітки у shoppingList
  shoppingList.insertAdjacentHTML('beforeend', markup);
}
