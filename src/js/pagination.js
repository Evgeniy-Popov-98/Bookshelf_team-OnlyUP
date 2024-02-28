var currentPage = 1;
var itemsPerPage = 10;
var totalItems = 500;

function renderPagination() {
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  var startPage = Math.max(1, currentPage - 2);
  var endPage = Math.min(totalPages, startPage + 4);

  for (var i = startPage; i <= endPage; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#';
    a.textContent = i;
    li.appendChild(a);

    if (i === currentPage) {
      li.classList.add('active');
    }

    li.addEventListener('click', function (e) {
      e.preventDefault();
      currentPage = parseInt(e.target.textContent);
      renderPagination();
      renderItems();
    });

    pagination.appendChild(li);
  }
}

function renderItems() {
  // Оновлення вмісту сторінки залежно від поточної сторінки
}

renderPagination();
