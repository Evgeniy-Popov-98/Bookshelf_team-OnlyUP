const switchBox = document.querySelector('.switch-box');
const switchButton = document.querySelector('.switch-button');
const topicMain = document.querySelector('body');

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
  if (topicMain.classList.value === 'dark') {
    topicMain.classList.remove('dark');
    topicMain.classList.add('light');
  } else {
    topicMain.classList.remove('light');
    topicMain.classList.add('dark');
  }
});
