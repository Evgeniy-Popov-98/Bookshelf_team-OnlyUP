import { getBooks } from './api-books';
import { GetBook } from './modal';

const END_POINT = 'category';

export async function homeCategory(categoriesBooks) {
  const newSelect = document.querySelector('.js-booksgallery');
  const loader = document.querySelector('.loader');
  newSelect.innerHTML = '';

  try {
    loader.style.display = 'none';
    const data = await getBooks(END_POINT, categoriesBooks);
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
  console.log(gallery);
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
