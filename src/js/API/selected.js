import { getBooks } from './api-books';

export async function homeCategory(END_POINT, categoriesBooks) {
  try {
    const data = await getBooks(END_POINT, categoriesBooks);
    renderBooks(data);
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
}

export function renderBooks(books) {
  const gallery = document.querySelector('.gallery-books');
  const markup = books
    .map(book => {
      return `
      <li class="gallery-book-item">
        <div class="container-item">
          <img class="gallery-image" src="${book.book_image}" alt="${book.description}">
          <h3 class="title-book">${book.title}</h3>
          <p class="author-book">${book.author}</p>
        </div>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
