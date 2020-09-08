const numbers = document.querySelectorAll('.number');
const minLimit = 0;

numbers.forEach(number => {
  let minus = number.querySelector('.number__icon--minus');
  let plus = number.querySelector('.number__icon--plus');
  let input = number.querySelector('.number__input');

  const changeValue = (value) => {
    let inputValue = parseInt(input.value);
    if (value + inputValue >= 0) {
      input.value = value + inputValue;
    }
  };

  minus.addEventListener('click', event => {
    changeValue(-1);
  });

  plus.addEventListener('click', event => {
    changeValue(1);
  });
});
