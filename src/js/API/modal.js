// modal.js

import { getBooks } from './api-books';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  TASKS_KEY,
  restoreData,
} from '../localStorage';

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.modal-close-btn');
const listAddButton = document.querySelector('.modal-list-btn-add');
const listRemoveButton = document.querySelector('.modal-list-btn-remove');

// Open modal
export async function GetBook(id) {
  document.addEventListener('keydown', escapeCloseModal);
  const data = await getBooks(id);
  createModal(data);

  listAddButton.addEventListener('click', function () {
    toggleShoppingList(id);
    listAddButton.style.display = 'none';
    listRemoveButton.style.display = 'block';
  });

  listRemoveButton.addEventListener('click', function () {
    toggleShoppingList(id);
    listRemoveButton.style.display = 'none';
    listAddButton.style.display = 'block';
  });
}

function createModal(book) {
  modalBackdrop.style.display = 'flex';

  body.style.overflow = 'hidden';

  const amazonUrl =
    book.buy_links.find(link => link.name === 'Amazon')?.url || '';
  const appleBooksUrl =
    book.buy_links.find(link => link.name === 'Apple Books')?.url || '';

  const buyLinksListHTML = `
    <ul class="buy-links-list">
      <li>
        <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${amazonUrl}">
      </li>
      <li>
        <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${appleBooksUrl}">
      </li>
    </ul>
  `;
  modal.innerHTML = `
    <div class="modal-container">
      <img src="${book.book_image}" class="modal-image">
      <div class="modal-wrap">
        <h2 class="modal-title">${book.title}</h2>
        <p class="modal-author">${book.author}</p>
        <p class="description-modal">${book.description}</p>
        ${buyLinksListHTML}
      </div>  
    </div>
  `;
  modal.appendChild(closeModalButton);
  modal.appendChild(listAddButton);
  modal.appendChild(listRemoveButton);

  modal.querySelectorAll('.platform-image').forEach(image => {
    image.addEventListener('click', () => {
      const platformUrl = image.dataset.url;
      if (platformUrl) {
        window.open(platformUrl, '_blank');
      } else {
        console.error('Platform URL not found.');
      }
    });
  });
}

// Add or remove from shopping list
function toggleShoppingList(id) {
  const dataArr = infoItemLocalStorage(TASKS_KEY) || []; // Ensure dataArr is an array
  const index = dataArr.indexOf(id);
  if (index === -1) {
    dataArr.push(id);
  } else {
    dataArr.splice(index, 1);
  }
  addItemLocalStorage(TASKS_KEY, dataArr);
  restoreData();
}

// Close modal
document.addEventListener('DOMContentLoaded', function () {
  closeModalButton.addEventListener('click', function () {
    closeModal();
  });

  modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
});

function escapeCloseModal(event) {
  if (event.key === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', escapeCloseModal);
  }
}

function closeModal() {
  modalBackdrop.style.display = 'none';
  body.style.overflow = 'auto';
}
