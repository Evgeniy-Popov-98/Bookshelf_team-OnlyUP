import axios from 'axios';
import {getBooks} from './api-books';
import refs from './refs';
import { errorMessage } from './messageError';
import { render, renderBooks } from './home';

export async function renderCategoriesList() {
  try {
    const data = await getBooks('category-list');
    let markup = `<li data-category="top-books" class="category-books-item">
            <a href="https://books-backend.p.goit.global/books/top-books" class="category-link"
            data-category="">All categories</a></li>`;
      
    data.forEach(category => {
      markup += `<li class="category-books-item" data-category="${category.list_name}">
                <a href="https://books-backend.p.goit.global/books/category?category=${encodeURIComponent(category.list_name)}" 
                class="category-link">${category.list_name}</a>
            </li>`;
    });

    refs.allListCategories.insertAdjacentHTML('beforeend', markup);

    const categoryLinks = document.querySelectorAll('.category-books-item');

    categoryLinks.forEach(link => {
      link.addEventListener('click', handleCategoryClick);
  })
  
  } catch (error) {
    errorMessage(`Failed to render books: ${error}`);
  }
}

async function handleCategoryClick(event) {
  event.preventDefault();
  const category = event.target.innerHTML;

  if (category) {
    await renderBooksByCategory(category);
  }
}

async function renderBooksByCategory(category) {
  
  try {
    const data = await getBooks('category', category);
    renderBooks(data);
  } catch (error) {
    errorMessage(`Failed to render books: ${error}`);
  }
}


  






