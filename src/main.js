import { getBooks } from './js/API/api-books';
import { renderBooks } from './js/rendering-book';

// renderBooks();

let endpoints = 'category';
let category = 'Audio Fiction';
const newCategory = await getBooks(endpoints, category);
