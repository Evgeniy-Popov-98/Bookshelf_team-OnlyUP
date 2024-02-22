import { getBooks } from './js/API/api-books';

async function test() {
  let endpoints = 'category-list';
  const test1 = await getBooks(endpoints);
  console.log(test1);

  endpoints = 'top-books';
  const test2 = await getBooks(endpoints);
  console.log(test2);

  endpoints = '643282b1e85766588626a0b2';
  const test3 = await getBooks(endpoints);
  console.log(test3);

  endpoints = 'category';
  let category = 'Audio Fiction';
  const test4 = await getBooks(endpoints, category);
  console.log(test4);
}

test();
