document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('pagination');
  var options = {
    totalItems: 100,
    itemsPerPage: 10,
    visiblePages: 5,
    onPageClick: function (event, pageNo) {
      console.log(event, pageNo);
     
    },
  };
  var pagination = new tui.Pagination(container, options);

  // Код для добавления книги и управления видимостью элементов
  function addBook() {
    // код для добавления книги

    // Показываем пагинацию
    container.style.display = 'block';
    // Скрываем изображение
    document.querySelector('.shoppinglist-img96061').style.display = 'none';
  }

  // Вызываем функцию addBook() для демонстрации
  addBook();
});
