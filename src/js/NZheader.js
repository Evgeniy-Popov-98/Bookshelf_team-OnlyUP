const homeBtn = document.querySelector('.js-hhome');
const shoppingBtn = document.querySelector('.js-hshopping');

console.log(homeBtn);
console.log(shoppingBtn);
 
homeBtn.addEventListener('click', onHomeBtnClick);
shoppingBtn.addEventListener('click', onShoppingBtnClick);


function onHomeBtnClick(e) {
    e.preventDefault();
    homeBtn.classList.add('hhome-btn');
    shoppingBtn.classList.remove('hshopping-btn')
  
}

function onShoppingBtnClick(e) {
    e.preventDefault();
    homeBtn.classList.remove('hhome-btn');
    shoppingBtn.classList.add('hshopping-btn')
  
}