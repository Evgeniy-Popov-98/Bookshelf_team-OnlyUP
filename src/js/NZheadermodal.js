const headerMobMenu = document.querySelector('.hmob-burger-menu');
const burgerBtn = document.querySelector('.hburger-menu-icon');
const closeBtn = document.querySelector('.hclose-menu-icon');
const hmodal = document.querySelector('.js-hmob-modal')

headerMobMenu.addEventListener('click', onHeaderMobMenuClick);

function onHeaderMobMenuClick(e) {
    e.preventDefault();
    burgerBtn.classList.toggle('is-visible');
    closeBtn.classList.toggle('is-visible');
    hmodal.classList.toggle('is-visible');
}