import { getBooks } from './api-books';
import { GetBook } from './modal';

const END_POINT = 'category';

export async function homeCategory(categoriesBooks) {
  const newSelect = document.querySelector('.js-booksgallery');
  newSelect.innerHTML = '';

  try {
    const data = await getBooks(END_POINT, categoriesBooks);
    renderBooks(data);
    updateTitle(categoriesBooks);
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }

  const openModal = document.querySelectorAll('.cardCategory');
  document.addEventListener('click', event => {
    for (const item of openModal) {
      let data = item.dataset.id;
      if (event.target.parentNode === item) {
        GetBook(data);
      }
    }
  });
}

function renderBooks(books) {
  const gallery = document.querySelector('.booksgallery');
  const markup = books
    .map(book => {
      return `
      <li class="booksgallery-item cardCategory" data-id="${book._id}">
          <img class="gallery-image" src="${book.book_image}" alt="${book.description}">
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
