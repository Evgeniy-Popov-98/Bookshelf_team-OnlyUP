import axios from 'axios';

export async function getBooks(endpoints, category) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = `${endpoints}`;
  let params;

  if (category) params = { category: `${category}` };

  const url = `${BASE_URL}${END_POINT}`;

  const res = await axios.get(url, { params });
  if (res.data.length === 0) {
    throw new Error('Error');
  } else {
    return res.data;
  }
}
