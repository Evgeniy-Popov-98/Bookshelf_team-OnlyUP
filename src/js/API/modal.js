import { getBooks } from './api-books';

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.modal-close-btn');
const listButton = document.querySelector('.modal-list-btn');

// Open modal
export async function GetBook(id) {
  document.addEventListener('keydown', escapeCloseModal);
  const data = await getBooks(id);
  createModal(data);

  listButton.addEventListener('click', function () {
    toggleShoppingList(id);
    listButton.blur();
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
      <p class="description">${book.description}</p>
      ${buyLinksListHTML}
    </div>  
  </div>
`;
  modal.appendChild(closeModalButton);
  modal.appendChild(listButton);

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

//Add to shopping list
function toggleShoppingList(id) {
  const buttonText = listButton.textContent.trim();
  const storedData = localStorage.getItem('shoppingList');
  const shoppingList = JSON.parse(storedData) || {};

  if (buttonText === 'add to shopping list') {
    shoppingList[id] = true;
    listButton.textContent = 'remove from the shopping list';
  } else {
    if (shoppingList[id]) {
      delete shoppingList[id];
    }
    listButton.textContent = 'add to shopping list';
  }

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

//Close modal
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
