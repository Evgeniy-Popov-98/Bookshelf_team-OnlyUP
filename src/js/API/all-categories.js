import axios from 'axios';
import { getBooks } from './api-books';
import refs from './refs';
// import { render } from './js/API/home';

export async function renderCategoriesList() {
  const data = await getBooks('category-list');
  let markup = `<li data-category="top-books" class="category-books-item">All categories</li>`;

  data.forEach(category => {
    markup += `<li class="category-books-item" data-category="${category.list_name}">${category.list_name}</li>`;
  });
  refs.allListCategories.insertAdjacentHTML('beforeend', markup);

  const categoryLinks = document.querySelectorAll('.category-books-item');

  categoryLinks.forEach(link => {
    link.addEventListener('click', handleCategoryClick);
  });

  function handleCategoryClick(event) {
    event.preventDefault();
    const category = event.target.innerHTML;
    for (const item of data) {
      if (item.list_name === category) {
        // renderBooksByCategory(category);
      }
    }
    if (category === 'All categories') {
      const topCategory = document.querySelector('.category-books-item');
      const topBooks = topCategory.dataset.category;
      //   render(topBooks);
    }
  }
}
