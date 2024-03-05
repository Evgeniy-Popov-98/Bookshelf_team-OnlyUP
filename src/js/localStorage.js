// localStorage.js

export const TASKS_KEY = 'TASKS_KEY';
export const USER_KEY = 'USER_KEY';

export function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function infoItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function restoreData(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const idItem = event.target.getAttribute('id');
  let newArr = [];
  const dataArr = infoItemLocalStorage(TASKS_KEY);
  for (const item of dataArr) {
    if (item.constID !== idItem) {
      newArr.push(item);
    }
  }
  addItemLocalStorage(TASKS_KEY, newArr);
}
