const dropdownActivator = document.querySelector('.country__dropdown--activator');

const dropdownCountryTableHeaderToggle = document.querySelector('.dropdown-country-table__toggle');
const dropdownCountryTable = document.querySelector('.dropdown-country-table');

dropdownActivator.addEventListener('click', () => {
  dropdownCountryTable.classList.toggle('dropdown-country-table--opened');
});

dropdownCountryTableHeaderToggle.addEventListener('click', () => {
  dropdownCountryTable.classList.remove('dropdown-country-table--opened');
});
