import { infoItemLocalStorage, TASKS_KEY } from './localStorage';

const numberInfo = document.querySelector('.number-shopping-list');

document.addEventListener('DOMContentLoaded', chekInfoNumber);

export default function chekInfoNumber() {
  let data = infoItemLocalStorage(TASKS_KEY);
  numberInfo.innerHTML = `${data.length}`;
}
