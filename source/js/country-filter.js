const filter = document.querySelector('.countries-filter');
const filterToggle = document.querySelector('.countries-filter__toggle');
const filterToggleText = document.querySelector('.countries-filter__toggle-text');
const filterToggleIcon = document.querySelector('.countries-filter__toggle-use');

let spritePath = 'img/sprite.svg';
let openIconName = 'dots-icon';
let closeIconName = 'filter-close-icon';

let openedText = 'Показать все';
let closeText = 'Свернуть';



const toggleCountriesFilter = () => {
  if (filter.classList.contains('countries-filter--opened')) {
    filterToggleText.textContent = openedText;
  } else {
    filterToggleText.textContent = closeText;
  }
  filter.classList.toggle('countries-filter--opened');
};

filterToggle.addEventListener('click', toggleCountriesFilter);

const filterCloseButton = document.querySelector('.countries-filter__close');
filterCloseButton.addEventListener('click', toggleCountriesFilter);
