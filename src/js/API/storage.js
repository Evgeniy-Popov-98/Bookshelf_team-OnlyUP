// Функція для додавання книги до списку покупок

import { getBooks } from './api-books';
import refs from './refs';

//*const shoppingList = document.querySelector('.shoppinglist-blocks');
// const categoriesBooks = document.querySelector('.js-all-categories');
// const bestBooks = document.querySelector('.js-home-pg');

export async function addToShoppingList() {
  // Виконуємо запит до API за детальною інформацією про книгу
  //   categoriesBooks.style.display = 'none';
  //   bestBooks.style.display = 'none';

  const bookId = '643282b1e85766588626a0dc';

  const dataBook = await getBooks(bookId);

  // Створюємо HTML для відображення інформації про книгу
  //   shoppingList.innerHTML = '';

  const markup = `
  	<ul class="shoppeng-list">
		<li class="shopping-item">
			<img src="${dataBook.book_image}" alt="${dataBook.title}" class="book-image">
			<div class="book-info">
				<button class="book-card-button" type="button">
				<!-- тут должна быть свг для кнопки закрития -->
				</button>
				<h2>${dataBook.title}</h2>				
				<p>${dataBook.list_name}</p>
				<p>${dataBook.description}</p>
				<p>${dataBook.author}</p>
			</div>
		</li>
	</ul>`;

  //   shoppingList.insertAdjacentHTML('beforeend', markup);
}
