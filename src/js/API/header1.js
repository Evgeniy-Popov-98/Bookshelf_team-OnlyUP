
let isVisible = false; 
let firstButton = document.querySelector('.plus-btn');
let secondButton = document.querySelector('.second-btn');

firstButton.addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.header-menu:nth-child(n+4):nth-child(-n+9)'); 
  const visibleItems = document.querySelectorAll('.header-menu:nth-last-child(-n+3)'); 
  hiddenItems.forEach(item => {
    item.classList.remove('hidden'); 
  });
  visibleItems.forEach(item => {
    item.classList.add('hidden'); 
  });
  firstButton.classList.add('hidden');
  secondButton.classList.remove('hidden');
});

secondButton.addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.header-menu:nth-child(n+7):nth-child(-n+9)'); 
  const visibleItems = document.querySelectorAll('.header-menu:nth-child(-n+6)'); 
  hiddenItems.forEach(item => {
    item.classList.remove('hidden'); 
  });
  visibleItems.forEach(item => {
    item.classList.add('hidden'); 
  });
  secondButton.classList.add('hidden');
  firstButton.classList.remove('hidden');
});