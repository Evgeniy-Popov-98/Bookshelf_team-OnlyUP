import { getBooks } from './api-books';
import img9606 from '/images/IMG_9606.png';
import amazonSvg from '/images/amazon.svg';
import bookSvg from '/images/book.svg';
import trashSvg from '/images/trash.svg';

const shoppingListContainer = document.querySelector('.shoppinglist-container');
const emptyMessage = `
    <div class="shoppinglist-blocks">
        <h2>This page is empty, add some books and proceed to order.</h2>
        <img src="../images/IMG_9606.png" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;

export async function addToShoppingList() {
  const bookId = '643282b1e85766588626a0dc'; // Приклад ID книги (можна змінити на реальний ID)

  try {
    const dataBook = await getBooks(bookId);

    const markup =
      `
            <div class="container-block">
                <!-- Розмітка для відображення інформації про книгу -->
                <div class="btn-and-links">
                    <button class="trash-btn"><img src="` +
      trashSvg +
      `" alt=""></button>
                    <ul class="links">
                        <li><img src="` +
      amazonSvg +
      `" class="amazon"></li>
                        <li><img src="` +
      bookSvg +
      `"></li>
                    </ul>
                </div>
              	<img src="${dataBook.book_image}" alt="${dataBook.title}" class="book-image">
			<div class="book-info">
                <div class="text-area">
                    <h2 class="shopping-list-title">${dataBook.title}</h2>
                    <h2 class="shopping-list-title-name">${dataBook.list_name}</h2>
                    <p class="shopping-list-description">${dataBook.description}</p>
                    <h2 class="shopping-list-author">${dataBook.author}</h2>
                </div>
            </div>
        `;

    // Заміна вмісту елемента shoppingList на розмітку книги
    shoppingListContainer.innerHTML = markup;

    // Додавання обробника події для кнопки "trash-btn"
    const trashButton = document.querySelector('.trash-btn');
    trashButton.addEventListener('click', function () {
      // Повернення до попереднього вмісту списку покупок
      shoppingListContainer.innerHTML = emptyMessage;
    });
  } catch (error) {
    console.error('Помилка отримання даних книги:', error);
  }
}
