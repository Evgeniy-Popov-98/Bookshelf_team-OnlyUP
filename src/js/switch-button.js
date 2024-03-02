import { addItemLocalStorage, infoItemLocalStorage } from './localStorage';

const switchBox = document.querySelector('.switch-box');
const switchButton = document.querySelector('.switch-button');
const topicMain = document.querySelector('body');
const TASK_KEY_SEITCH = '';

let infoSwitchButton = false;

document.addEventListener('DOMContentLoaded', () => {
  const dataSwitch = infoItemLocalStorage(TASK_KEY_SEITCH);
  if (dataSwitch) {
    switchTopic();
  }
});

switchButton.addEventListener('click', switchTopic);

function switchTopic() {
  if (infoSwitchButton) {
    switchButton.classList.remove('new-position');
    switchBox.classList.remove('new-background');
    topicMain.classList.remove('dark');
    topicMain.classList.add('light');
    infoSwitchButton = false;
    addItemLocalStorage(TASK_KEY_SEITCH, infoSwitchButton);
  } else {
    switchButton.classList.add('new-position');
    switchBox.classList.add('new-background');
    topicMain.classList.remove('light');
    topicMain.classList.add('dark');
    infoSwitchButton = true;
  }

  if (infoSwitchButton) {
    addItemLocalStorage(TASK_KEY_SEITCH, infoSwitchButton);
  }
}
