document.addEventListener('DOMContentLoaded', function () {
  const loaderContainer = document.querySelector('.loader-container');
  const loader = document.querySelector('.loader');

  // Показати лоадер
  function showLoader() {
    loaderContainer.style.display = 'flex';
  }

  // Приховати лоадер
  function hideLoader() {
    loaderContainer.style.display = 'none';
  }
});
