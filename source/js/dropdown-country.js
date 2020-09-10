const dropdownCountryTable = document.querySelector('.dropdown-country-table');
const dropdownActivator = document.querySelector('.country__dropdown--activator');
const dropdownCountryTableHeaderToggle = document.querySelector('.dropdown-country-table__toggle');

if (dropdownCountryTable) {
  dropdownActivator.addEventListener('click', () => {
    dropdownCountryTable.classList.toggle('dropdown-country-table--opened');
  });

  dropdownCountryTableHeaderToggle.addEventListener('click', () => {
    dropdownCountryTable.classList.remove('dropdown-country-table--opened');
  });
}
