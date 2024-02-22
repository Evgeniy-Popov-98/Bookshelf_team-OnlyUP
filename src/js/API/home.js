import {getBooks} from './api-books'
import refs from './refs'




function bookTemplate(book) {
    const {book_image, author, title, id, contributor} = book;
    return `<li class="list-category-books">
    <li class="card book-item" data-id="${id}">
    <img class="book-img" src="${book_image}" alt="${contributor} ${tittle}">
    <h3>${title}</h3>
    <p>${author}</p>
</li>
  <button>See more</button>
</li>`;
}
function booksTemplate(books) {
    return  books.map(bookTemplate).join('');
}

export function renderBooks(books) {
    const markup = booksTemplate
    refs.galleryBooks.innerHTML=markup;
}