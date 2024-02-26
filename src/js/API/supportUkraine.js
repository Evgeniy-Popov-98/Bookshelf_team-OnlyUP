document.addEventListener('DOMContentLoaded', supportUkraine);

const button = document.querySelector('.plus-btn');

export default function supportUkraine() {
  //   let isVisible = true;
  //   let isVisible = false;

  button.addEventListener('click', function () {
    const hiddenItems = document.querySelectorAll('.header-link');

    for (let i = 0; i < 3; i++) {
      hiddenItems[i].setAttribute('style', 'display: none;');
    }
  });

  // if (!isVisible) {
  //   hiddenItems.forEach(item => {
  //     item.classList.remove('hidden');
  //   });
  //   visibleItems.forEach(item => {
  //     item.classList.add('hidden');
  //   });
  // } else {
  //   hiddenItems.forEach(item => {
  //     item.classList.add('hidden');
  //   });
  //   visibleItems.forEach(item => {
  //     item.classList.remove('hidden');
  //   });
  // }
  // isVisible = !isVisible;
  //   });
}
