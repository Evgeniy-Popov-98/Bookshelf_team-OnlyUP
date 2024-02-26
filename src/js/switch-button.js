const switchBox = document.querySelector('.switch-box');
const switchButton = document.querySelector('.switch-button');

switchButton.addEventListener('click', newPosition => {
  if (switchButton.dataset.switch === 'true') {
    switchButton.classList.remove('new-position');
    switchBox.classList.remove('new-background');
    switchButton.dataset.switch = 'false';
  } else {
    switchButton.classList.add('new-position');
    switchBox.classList.add('new-background');
    switchButton.dataset.switch = 'true';
  }
});
