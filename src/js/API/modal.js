import { getBooks } from './api-books';

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.close-btn');
const listButton = document.querySelector('.list-btn');

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
      <img src="../images/amazon.png" alt="Amazon" class="platform-image" data-url="${amazonUrl}">
    </li>
    <li>
      <img src="../images/book.png" alt="Apple Books" class="platform-image" data-url="${appleBooksUrl}">
    </li>
  </ul>
`;

  modal.innerHTML = `
  <div class="modal-container">
  <img src="${book.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="title">${book.title}</h2>
      <p class="author">${book.author}</p>
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

//Test
const bookId = '643282b1e85766588626a0ae';
//=========================

// Open modal
const OpenModal = document.querySelector('.open-modal');
OpenModal.addEventListener('click', () => {
  GetBook();
});

async function GetBook() {
  const data = await getBooks(bookId);
  createModal(data);
}

//Add to shopping list
function toggleShoppingList() {
  const buttonText = listButton.textContent.trim();
  if (buttonText === 'add to shopping list') {
    addToShoppingList(bookId);
    listButton.textContent = 'remove from the shopping list';
  } else {
    removeFromShoppingList(bookId);
    listButton.textContent = 'add to shopping list';
  }
}

listButton.addEventListener('click', toggleShoppingList);

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

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  function removeEventListeners() {
    closeModalButton.removeEventListener('click', closeModal);
    modalBackdrop.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModal);
  }

  function closeModal() {
    modalBackdrop.style.display = 'none';
    body.style.overflow = 'auto';
    removeEventListeners();
  }
});