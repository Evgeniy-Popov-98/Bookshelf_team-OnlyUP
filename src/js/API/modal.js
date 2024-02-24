import { getBooks } from './api-books';

const body = document.querySelector('body');
const modalBackdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.close-btn');

function createModal(book) {
  modalBackdrop.style.display = 'flex';

  body.style.overflow = 'hidden';

  const modal = document.querySelector('.modal');

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modalWrap = document.createElement('div');
  modalWrap.classList.add('modal-wrap');

  const bookImage = document.createElement('img');
  bookImage.src = book.book_image;
  bookImage.classList.add('modal-image');

  const title = document.createElement('h2');
  title.textContent = book.title;
  title.classList.add('title');

  const author = document.createElement('p');
  author.textContent = book.author;
  author.classList.add('author');

  const description = document.createElement('p');
  description.textContent = book.description;
  description.classList.add('description');

  const buyLinksList = document.createElement('ul');
  buyLinksList.classList.add('buy-links-list');

  const amazonLink = document.createElement('li');
  const amazonImage = document.createElement('img');
  amazonImage.src = '../images/amazon.png';
  amazonImage.alt = 'Amazon';
  amazonImage.classList.add('platform-image');
  const amazonUrl =
    book.buy_links.find(link => link.name === 'Amazon')?.url || '';
  amazonImage.dataset.url = amazonUrl;
  amazonLink.appendChild(amazonImage);
  buyLinksList.appendChild(amazonLink);

  const appleBooksLink = document.createElement('li');
  const appleBooksImage = document.createElement('img');
  appleBooksImage.src = '../images/book.png';
  appleBooksImage.alt = 'Apple Books';
  appleBooksImage.classList.add('platform-image');
  const appleBooksUrl =
    book.buy_links.find(link => link.name === 'Apple Books')?.url || '';
  appleBooksImage.dataset.url = appleBooksUrl;
  appleBooksLink.appendChild(appleBooksImage);
  buyLinksList.appendChild(appleBooksLink);

  const listButton = document.querySelector('.list-btn');

  modal.innerHTML = '';
  modalWrap.appendChild(title);
  modalWrap.appendChild(author);
  modalWrap.appendChild(description);
  modalWrap.appendChild(buyLinksList);
  modalContainer.appendChild(bookImage);
  modalContainer.appendChild(modalWrap);
  modal.appendChild(closeModalButton);
  modal.appendChild(modalContainer);
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
const listButton = document.querySelector('.list-btn');

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
});

function closeModal() {
  modalBackdrop.style.display = 'none';

  body.style.overflow = 'auto';

  document.removeEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}
