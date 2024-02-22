import {getBooks} from './api-books'
import refs from './refs'

export async function render(){
    const data = await getBooks('top-books');
    console.log(data.books);
    renderBooks(data.books);
}




function bookTemplate(book) {
    const {book_image, author, title, id, contributor} = book;
    console.log(book);
    return `<li class="list-category-books">
    <li class="card book-item" data-id="${id}">
    <img class="book-img" src="${book_image}" alt="${contributor} ${title}">
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
    const markup = booksTemplate(books)
    refs.galleryBooks.insertAdjacentHTML('beforeend', markup);
}

