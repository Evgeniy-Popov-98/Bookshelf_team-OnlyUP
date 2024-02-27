import { getBooks } from './api-books';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  restoreData,
  TASKS_KEY,
} from '../localStorage';

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.modal-close-btn');
const listButtonAdd = document.querySelector('.modal-list-btn-add');
const listButtonRemove = document.querySelector('.modal-list-btn-remove');
const textContainer = document.querySelector('.modal-list-container');

let constID;

export async function GetBook(id) {
  listButtonRemove.setAttribute('id', `${id}`);
  constID = id;
  document.addEventListener('keydown', escapeCloseModal);
  const data = await getBooks(constID);
  createModal(data);

  try {
    const checkBook = infoItemLocalStorage(TASKS_KEY);
    for (const item of checkBook) {
      if (item.constID === id) {
        listButtonAdd.style.display = 'none';
        listButtonRemove.style.display = 'flex';

        textContainer.innerText =
          'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
        if (window.innerWidth <= 768) {
          modal.style.height = '806px';
        } else {
          modal.style.height = '501px';
        }
      }
    }
  } catch (error) {}

  listButtonAdd.addEventListener('click', toggleShoppingList);

  listButtonRemove.addEventListener('click', removeShoppingList);
}

function createModal(book) {
  modalBackdrop.style.display = 'flex';

  body.style.overflow = 'hidden';

  const amazonUrl =
    book.buy_links.find(link => link.name === 'Amazon')?.url || '';
  const appleBooksUrl =
    book.buy_links.find(link => link.name === 'Apple Books')?.url || '';

  const bookDescription = book.description
    ? book.description
    : "With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.";

  const buyLinksListHTML = `
  <ul class="buy-links-list">
    <li>
      <img class="img-amazon" src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${amazonUrl}">
    </li>
    <li>
      <img class="img-apple" src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${appleBooksUrl}">
    </li>
  </ul>
`;
  modal.innerHTML = `
  <div class="modal-container">
  <img src="${book.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${book.title}</h2>
      <p class="modal-author">${book.author}</p>
      <p class="description-modal">${bookDescription}</p>
      ${buyLinksListHTML}
    </div>  
  </div>
`;
  modal.appendChild(closeModalButton);
  modal.appendChild(listButtonAdd);
  modal.appendChild(listButtonRemove);
  modal.appendChild(textContainer);

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

//Add List Text
listButtonAdd.addEventListener('click', function () {
  textContainer.innerText =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  if (window.innerWidth <= 768) {
    modal.style.height = '806px';
  } else {
    modal.style.height = '501px';
  }
  listButtonAdd.removeEventListener('click', this);
});

listButtonRemove.addEventListener('click', function () {
  textContainer.innerText = '';
  if (window.innerWidth <= 768) {
    modal.style.height = '762px';
  } else {
    modal.style.height = '465px';
  }
  listButtonRemove.removeEventListener('click', this);
});

function escapeCloseModal(event) {
  if (event.key === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', escapeCloseModal);
  }
}

function closeModal() {
  modal.classList.add('closing');
  setTimeout(function () {
    modalBackdrop.style.display = 'none';
    modal.classList.remove('closing');
  }, 500);
  listButtonAdd.removeEventListener('click', toggleShoppingList);
  listButtonAdd.removeEventListener('click', removeShoppingList);
  body.style.overflow = 'auto';
  listButtonAdd.style.display = 'flex';
  listButtonRemove.style.display = 'none';
}

//Add to shopping list
function toggleShoppingList() {
  const arrItem = infoItemLocalStorage(TASKS_KEY) || [];
  arrItem.push({ constID });
  addItemLocalStorage(TASKS_KEY, arrItem);

  listButtonAdd.style.display = 'none';
  listButtonRemove.style.display = 'flex';

  listButtonAdd.removeEventListener('click', toggleShoppingList);
  listButtonRemove.addEventListener('click', removeShoppingList);
}

function removeShoppingList(event) {
  restoreData(event);
  listButtonAdd.style.display = 'flex';
  listButtonRemove.style.display = 'none';

  listButtonAdd.removeEventListener('click', removeShoppingList);
  listButtonAdd.addEventListener('click', toggleShoppingList);
}
