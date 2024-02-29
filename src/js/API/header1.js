const arrSuppotr = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const firstButton = document.querySelector('.plus-btn');
const secondButton = document.querySelector('.second-btn');
const supportList = document.querySelector('.header-menu');

const supportItem = document.querySelectorAll('.header-link');
const hidentItem = document.querySelectorAll('.header-item');

for (let i = 0; i < supportItem.length; i++) {
  // supportItem[i].setAttribute('href', `${arrSuppotr[i].url}`);
  let markup = '';

  markup += `<li class="header-item"> <a class="header-link" target="_blank" href="${arrSuppotr[i].url}">
  <span class="header-img">01</span>
  <img src="./images/section-support/Mask group-min.png" alt="Logo" Width="129" Height="32"></a></li>`;

  supportList.insertAdjacentHTML('beforeend', markup);
}

firstButton.addEventListener('click', function () {
  firstButton.style.display = 'none';
  secondButton.style.display = 'flex';
  supportList.style.transform = 'translateY(-156px)';
  supportList.style.transition = 'transform 2s allow-discrete';
});

secondButton.addEventListener('click', function () {
  firstButton.style.display = 'flex';
  secondButton.style.display = 'none';
  supportList.style.transform = '';
});
