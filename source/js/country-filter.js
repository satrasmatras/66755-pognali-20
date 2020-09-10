const filter = document.querySelector('.countries-filter');
const filterToggle = document.querySelector('.countries-filter__toggle');
const filterToggleText = document.querySelector('.countries-filter__toggle-text');
const filterCloseButton = document.querySelector('.countries-filter__close');

const openedText = 'Показать все';
const closeText = 'Свернуть';

if (filter) {
  filter.classList.remove('countries-filter--no-js');

  const toggleCountriesFilter = () => {
    if (filter.classList.contains('countries-filter--opened')) {
      filterToggleText.textContent = openedText;
    } else {
      filterToggleText.textContent = closeText;
    }
    filter.classList.toggle('countries-filter--opened');
  };

  filterToggle.addEventListener('click', toggleCountriesFilter);

  filterCloseButton.addEventListener('click', toggleCountriesFilter);
}
