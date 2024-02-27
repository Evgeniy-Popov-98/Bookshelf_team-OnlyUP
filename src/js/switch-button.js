import refs from './API/refs'



// const switchBox = document.querySelector('.switch-box');
// const switchButton = document.querySelector('.switch-button');
// const topicMain = document.querySelector('body');

refs.switchButton.addEventListener('click', newPosition => {
  if (refs.switchButton.dataset.switch === 'true') {
    refs.switchButton.classList.remove('new-position');
    refs.switchBox.classList.remove('new-background');
    refs.switchButton.dataset.switch = 'false';
  } else {
    refs.switchButton.classList.add('new-position');
    refs.switchBox.classList.add('new-background');
    refs.switchButton.dataset.switch = 'true';
  }
  if (refs.topicMain.classList.value === 'dark') {
    refs.topicMain.classList.remove('dark');
    refs.topicMain.classList.add('light');
  } else {
    refs.topicMain.classList.remove('light');
    refs.topicMain.classList.add('dark');
  }
});
