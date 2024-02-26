document.addEventListener('DOMContentLoaded', function () {
  const addToShoppingListBtn = document.querySelector('.modal-list-btn');
  const modalWrap = document.querySelector('.modal-wrap');
  const shoppingListBooks = document.querySelector('.shoppinglist-books');

  addToShoppingListBtn.addEventListener('click', function () {
    const bookTitle = modalWrap.querySelector('.book-title').innerText;
    const bookAuthor = modalWrap.querySelector('.book-author').innerText;
    const bookDescription =
      modalWrap.querySelector('.book-description').innerText;
    const bookImageSrc = modalWrap
      .querySelector('.book-image')
      .getAttribute('src');

    const bookElement = document.createElement('div');
    bookElement.classList.add('shoppinglist-book');

    const bookImage = document.createElement('img');
    bookImage.classList.add('book-image');
    bookImage.setAttribute('src', bookImageSrc);
    bookElement.appendChild(bookImage);

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');

    const title = document.createElement('h2');
    title.innerText = bookTitle;
    bookInfo.appendChild(title);

    const author = document.createElement('p');
    author.innerText = 'Author: ' + bookAuthor;
    bookInfo.appendChild(author);

    const description = document.createElement('p');
    description.innerText = bookDescription;
    bookInfo.appendChild(description);

    bookElement.appendChild(bookInfo);

    shoppingListBooks.appendChild(bookElement);
  });
});
