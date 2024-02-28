import { getBooks } from './api-books';
import refs from './refs';
import { errorMessage } from './messageError';
import { GetBook } from './modal';
import { homeCategory } from './selected';

document.addEventListener('DOMContentLoaded', async () => {
  let previousWidth = window.innerWidth;
  const data = await getBooks('top-books');
  window.addEventListener('resize', onResize);

  async function onResize() {
    const currentWidth = window.innerWidth;
    if (
      previousWidth > 768 ||
      (previousWidth < 768 && currentWidth >= 768) ||
      (previousWidth >= 768 &&
        currentWidth <= 1440 &&
        (previousWidth <= 768 || currentWidth >= 1439))
    ) {
      try {
        render(data);
      } catch (error) {
        errorMessage(`Failed to render books:${error}`);
      }
    }
    previousWidth = currentWidth;
  }

  async function render(data) {
    try {
      refs.galleryBooks.innerHTML = '';
      for (const el of data) {
        categoriesTemplate(el);
        if (el.books.length >= 1) {
          renderBooks(el);
        } else {
          errorMessage('Sorry, there are no items in this category');
        }
      }
      addQuickViewListeners();
    } catch (error) {
      errorMessage(`Failed to render books:${error}`);
    }
  }

  function addQuickViewListeners() {
    const quickViewTriggers = document.querySelectorAll('.book-image-overlay');
    quickViewTriggers.forEach(trigger => {
      trigger.addEventListener('click', event => {
        const card = event.target.closest('.card');
        if (card) {
          const data = card.dataset.id;
          GetBook(data);
        }
      });
    });
  }
  const openSeeMore = document.querySelectorAll('.btn-more');
  openSeeMore.forEach(link => {
    link.addEventListener('click', categoryClick);
  });
  function categoryClick(event) {
    const bestCategory = document.querySelector('.js-home-pg');
    const categories = document.querySelector('.js-selected-page');
    const listName = event.srcElement.dataset.id;
    bestCategory.style.display = 'none';
    categories.style.display = 'block';
    homeCategory(listName);
  }

  function categoriesTemplate(categories) {
    const markup = `<li id="${categories.list_name}" class="list-category-books">
    <h2 class="list-category-title">${categories.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${categories.list_name}">See more</button>`;
    refs.galleryBooks.insertAdjacentHTML('beforeend', markup);
  }

  function bookTemplate(book) {
    const { book_image, author, title, _id, contributor, list_name } = book;
    if (list_name)
      return `
    <li class="card book-item book-hover" data-id="${_id}">
       <div class="wrapper-overlay">
        <img class="book-img-home" src="${book_image}" alt="${contributor} ${title}">
        <div class="book-image-overlay" aria-label="${title}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${title}</h3>
    <p class="author">${author}</p>
    </li>
    `;
  }
  function booksTemplate(books) {
    return books.map(bookTemplate).join('');
  }

  function renderBooks(el) {
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

  render(data);
});
