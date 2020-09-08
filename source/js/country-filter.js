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

const letters = document.querySelectorAll('.country-table__letter');
const tableContent = document.querySelector('.country-table__content');

const liClass = 'country-table__content-item';
const aClass = 'country-table__content-link';
const cellActiveClass = 'country-table__cell--selected';

const getCountriesList = (letterElement) => {
  const letterCountries = letterElement.parentNode.querySelectorAll('.country-table__letter-link');

  let countries = [];

  letterCountries.forEach(country => {
    countries.push({name: country.textContent, href: country.getAttribute('href')})
  });

  return countries;
};
const createLiWithLink = (country) => {
  let li = document.createElement('li');
  li.classList.add(liClass);

  let a = document.createElement('a')
  a.classList.add(aClass);

  a.textContent = country.name;
  a.setAttribute('href', country.href);

  li.appendChild(a);

  return li;
};
const makeNewContent = (countries) => {
  return countries.map(createLiWithLink);
};

const getActiveLetter = (selector) => {
  return document.querySelector(selector);
};

letters.forEach(letter => {
  letter.addEventListener('click', event => {
    event.preventDefault();

    let countries = getCountriesList(letter);

    tableContent.innerHTML = '';

    let newContentElements = makeNewContent(countries);

    newContentElements.forEach(element => {
      tableContent.appendChild(element);
    })

    const activeLetter = getActiveLetter('.' + cellActiveClass);
    activeLetter.classList.remove(cellActiveClass);
    letter.classList.add(cellActiveClass);
  })
});
