import { getBooks } from './js/API/api-books';

async function test() {}
{
  let endpoints = 'category-list';
  //   const test1 = await getBooks(endpoints);
  //   console.log(test1);

  //   endpoints = 'top-books';
  //   const test2 = await getBooks(endpoints);
  //   console.log(test2);

  endpoints = 'category';
  let category = 'Audio Fiction';
  const test3 = await getBooks(endpoints, category);
  console.log(test3);
}
