const homeBtn = document.querySelector('.js-mobhome');
const shoppingBtn = document.querySelector('.js-mobhopping');
 
homeBtn.addEventListener('click', onHomeBtnClick);
shoppingBtn.addEventListener('click', onShoppingBtnClick);


function onHomeBtnClick(e) {
    e.preventDefault();
    homeBtn.classList.add('mob-home-btn');
    shoppingBtn.classList.remove('mob-shopping-btn')
  
}

function onShoppingBtnClick(e) {
    e.preventDefault();
    homeBtn.classList.remove('mob-home-btn');
    shoppingBtn.classList.add('mob-shopping-btn')
  
}