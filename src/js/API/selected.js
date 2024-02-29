import { getBooks } from './api-books';
import { GetBook } from './modal';

const END_POINT = 'category';
const loader = document.querySelector('.loader-selected');

export async function homeCategory(categoriesBooks) {
  const bestCategory = document.querySelector('.js-home-pg');
  const categories = document.querySelector('.js-selected-page');
  bestCategory.style.display = 'none';
  categories.style.display = 'block';
  loader.style.display = 'block';
  const newSelect = document.querySelector('.js-booksgallery');
  newSelect.innerHTML = '';
  const newTitle = document.querySelector('.selected-title');
  newTitle.innerHTML = '';

  try {
    const data = await getBooks(END_POINT, categoriesBooks);
    loader.style.display = 'none';
    renderBooks(data);
    updateTitle(categoriesBooks);
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }

  const openModal = document.querySelectorAll('.cat-book-image-overlay');
  openModal.forEach(trigger => {
    trigger.addEventListener('click', event => {
      const item = event.target.closest('.booksgallery-item');
      if (item) {
        const data = item.dataset.id;
        GetBook(data);
      }
    });
  });
}

function renderBooks(books) {
  const gallery = document.querySelector('.booksgallery');
  const markup = books
    .map(book => {
      return `
      <li class="booksgallery-item cardCategory book-hover" data-id="${book._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${book.book_image}" alt="${book.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${book.title}</h3>
          <p class="author-book">${book.author}</p>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function updateTitle(category) {
  const titleElement = document.querySelector('.selected-title');
  const itemCategory = category.split(' ');
  const textSpan = itemCategory[itemCategory.length - 1];
  itemCategory.pop();
  titleElement.innerHTML = `${itemCategory.join(
    ' '
  )} <span class="selected-color">${textSpan} </span>`;
}
