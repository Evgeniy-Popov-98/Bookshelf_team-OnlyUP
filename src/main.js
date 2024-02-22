import { getBooks } from './js/API/api-books';
import { renderBooks } from './js/rendering-book';

// renderBooks();

async function main() {
  let endpoints = 'category';
  let category = 'Audio Fiction';
  const newCategory = await getBooks(endpoints, category);
  console.log(newCategory);
  renderBooks(newCategory);
}

main();
