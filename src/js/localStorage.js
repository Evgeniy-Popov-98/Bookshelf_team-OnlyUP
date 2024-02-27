export const TASKS_KEY = 'TASKS_KEY';

export function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function infoItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function restoreData(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const idItem = event.target.parentNode.getAttribute('id');
  //   console.log(idItem);
  //   event.target.parentNode.remove();

  const dataArr = infoItemLocalStorage(TASKS_KEY);
  const newArr = dataArr.filter(item => {
    console.log(item.idItem);
    console.log(idItem);
    item.id !== idItem;
  });
  addItemLocalStorage(TASKS_KEY, newArr);

  //   const data = infoItemLocalStorage(TASKS_KEY);
  //   if (!data) return;
  //   const newArr = data.filter(item => item.id !== idItem);

  //   addItemLocalStorage(TASKS_KEY, newArr);
}
