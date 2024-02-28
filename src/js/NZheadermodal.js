const headerMobMenu = document.querySelector('.hmob-burger-menu');
const burgerBtn = document.querySelector('.hburger-menu-icon');
const closeBtn = document.querySelector('.hclose-menu-icon');
const hmodal = document.querySelector('.js-hmob-modal');
const body = document.querySelector('.light');

burgerBtn.addEventListener('click', onHeaderMobMenuClick);

function onHeaderMobMenuClick(e) {
  e.preventDefault();
  burgerBtn.classList.toggle('is-visible');
  closeBtn.classList.toggle('is-visible');
  hmodal.classList.toggle('is-visible');
  body.style.overflow = 'hidden';
  closeBtn.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('is-visible');
  closeBtn.classList.toggle('is-visible');
  hmodal.classList.toggle('is-visible');
  body.style.overflow = 'visible';

  closeBtn.style.display = 'none';
});
