// pagination.js

// Імпортуємо бібліотеку TUI Pagination з вашої папки
import tuiPagination from 'tui-pagination';

// Ініціалізуємо пагінацію як ви раніше робили
var pagination = new tuiPagination('pagination', {
  totalItems: 500,
});

pagination.on('beforeMove', function (eventData) {
  return confirm('Go to page ' + eventData.page + '?');
});

pagination.on('afterMove', function (eventData) {
  alert('The current page is ' + eventData.page);
});

// Експортуємо об'єкт, якщо потрібно
export default pagination;
