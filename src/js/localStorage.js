export const TASKS_KEY = 'TASKS_KEY';

export function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function infoItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function restoreData(idItem) {
  const data = infoItemLocalStorage(TASKS_KEY);
  if (!data) return;
  const newArr = data.filter(item => item.ID !== idItem);
  addItemLocalStorage(TASKS_KEY, newArr);
  //   const dataLi = data
  //     .map(
  //       elem =>
  //         `<li id = "${elem.ID}">${elem.value} <button type = "button">X</button></li>`
  //     )
  //     .join('');
}
