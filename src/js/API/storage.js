// Функція для додавання книги до списку покупок

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
  //   shoppingList.innerHTML = '';

  const markup = `
  	<ul class="shoppeng-list">
		<li class="shopping-item">
			<img src="${dataBook.book_image}" alt="${dataBook.title}" class="book-image">
            <div class="shoppinglitem-textarea" >
				<h2 class="shoppinglititem-title">${dataBook.title}</h2>				
				<p class="shoppinglititem-title-name">${dataBook.list_name}</p>
				<p class="shoppinglititem-description">${dataBook.description}</p>
				<pclass="shoppinglititem-author">${dataBook.author}</p>
				</div>
				
					<button class="book-card-button" type="button" onclick="window.location.href='src\images\trash-03.png'"></button>
		</li>
	</ul>`;

  //   shoppingList.insertAdjacentHTML('beforeend', markup);
}
