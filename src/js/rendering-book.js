const gallery = document.querySelector('.gallery');

export function renderBooks(books) {
  const markup = books
    .map(elem => {
      return `<li class="gallery-book__item">
		   <div class="container-item">
			   <img class="gallery-image" src=${elem} alt="${elem}">
			   <h3 class="titel-text">Views</h3>
			   <p class="text">${elem}</p>
			</div>
	   </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  galleryModalWindow.refresh();
}
