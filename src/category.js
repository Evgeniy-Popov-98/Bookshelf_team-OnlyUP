import { getBooks } from './js/API/api-books';

const categoryTitle = document.querySelectorAll('.category-title');

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener('click', function (event) {
    event.preventDefault();
    const category = categoryTitle[i].id.replace(/_/g, ' ');
    filterPosts(category);
  });
}

async function filterPosts(category) {
  try {
    const books = await getBooks('endpoints', category);
    displayBooks(books);
  } catch (error) {
    console.error(error);
    alert('Failed to load books.');
  }
}

function displayBooks(books) {
  console.log(books);
}
