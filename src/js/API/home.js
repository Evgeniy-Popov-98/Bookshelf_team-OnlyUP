import { getBooks } from './api-books';
import refs from './refs';
import { errorMessage } from './messageError';
import { GetBook } from './modal';

let previousWidth = window.innerWidth;

window.addEventListener('resize', async () => {
  const currentWidth = window.innerWidth;
  //   refs.galleryBooks.innerHTML = '';
  if (
    previousWidth > 768 ||
    (previousWidth < 768 && currentWidth >= 768) ||
    (previousWidth >= 768 &&
      currentWidth <= 1440 &&
      (previousWidth <= 768 || currentWidth >= 1439))
  ) {
    try {
      const data = await getBooks('top-books');
      refs.galleryBooks.innerHTML = '';
      for (const el of data) {
        categoriesTemplate(el);
        if (el.books.length >= 1) {
          renderBooks(el);
        } else {
          errorMessage('Sorry, there are no items in this category');
        }
      }
    } catch (error) {
      errorMessage(`Failed to render books:${error}`);
    }
  }
  previousWidth = currentWidth;
});

export async function render(event) {
  try {
    const data = await getBooks('top-books');
    for (const el of data) {
      categoriesTemplate(el);
      if (el.books.length >= 1) {
        renderBooks(el);
      } else {
        errorMessage('Sorry, there are no items in this category');
      }
    }

    const openModal = document.querySelectorAll('.card');
    document.addEventListener('click', event => {
      for (const item of openModal) {
        let data = item.dataset.id;
        if (event.target.parentNode === item) {
          GetBook(data);
        }
      }
    });
  } catch (error) {
    errorMessage(`Failed to render books:${error}`);
  }
}

function categoriesTemplate(categories) {
  const markup = `<li id="${categories.list_name}" class="list-category-books">
    <h2 class="list-category-title">${categories.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;
  refs.galleryBooks.insertAdjacentHTML('beforeend', markup);
}

function bookTemplate(book) {
  const { book_image, author, title, _id, contributor, list_name } = book;
  if (list_name)
    return `
    <li class="card book-item" data-id="${_id}">
    <img class="book-img" src="${book_image}" alt="${contributor} ${title}">
    <h3 class="title-book">${title}</h3>
    <p class="author">${author}</p>
    </li>
   `;
}
function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}

export function renderBooks(el) {
  const markup = onMediaScreenChange(el);
  const categoriesID = el.list_name;
  const listBook = document
    .getElementById(categoriesID)
    .querySelector('.list-book');
  listBook.insertAdjacentHTML('afterbegin', markup);
}

function onMediaScreenChange(el) {
  let mediaMarkup;
  if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
    mediaMarkup = booksTemplate(el.books.slice(0, 3));
  } else if (window.innerWidth >= 1440) {
    mediaMarkup = booksTemplate(el.books);
  } else {
    mediaMarkup = booksTemplate(el.books.slice(0, 1));
  }

  return mediaMarkup;
}
