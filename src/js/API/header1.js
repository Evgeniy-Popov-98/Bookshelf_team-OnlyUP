let isVisible = true;
let isVisible = false; 

button.addEventListener('click', function() {
  const hiddenItems = document.querySelectorAll('.list-item:nth-last-child(-n+3)'); 
  const visibleItems = document.querySelectorAll('.list-item:nth-child(n+4):nth-child(-n+9)'); 
  if (!isVisible) {
    hiddenItems.forEach(item => {
      item.classList.remove('hidden'); 
    });
    visibleItems.forEach(item => {
      item.classList.add('hidden'); 
    });
  } else {
    hiddenItems.forEach(item => {
      item.classList.add('hidden'); 
    });
    visibleItems.forEach(item => {
      item.classList.remove('hidden'); 
    });
  }
  isVisible = !isVisible; 
});