let availableDates = document.querySelectorAll('.table__cell');
availableDates.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('table__cell--available') || cell.classList.contains('table__cell--selected')) {
      cell.classList.toggle('table__cell--available');
      cell.classList.toggle('table__cell--selected');
    }
  })
});
