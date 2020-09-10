const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
  const minus = number.querySelector('.number__icon--minus');
  const plus = number.querySelector('.number__icon--plus');
  const input = number.querySelector('.number__input');
  const min = number.dataset.min ?? 0;

  const changeValue = (value) => {
    const inputValue = parseInt(input.value);

    if (value + inputValue >= min) {
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
