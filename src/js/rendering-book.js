const gallery = document.querySelector('.gallery-book');

export function renderBooks(books) {
  console.log(books);
  const markup = books
    .map(elem => {
      return `<li class="gallery-book__item">
		   <div class="container-item">
			   <img class="gallery-image" src=${elem.book_image} alt="${elem.description}">
			   <h3 class="titel-book">${elem.title}</h3>
			   <p class="author-book">${elem.author}</p>
			</div>
	   </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
