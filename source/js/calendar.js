const availableDates = document.querySelectorAll('.table__cell');

if (availableDates) {

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  availableDates.forEach(cell => {
    cell.addEventListener('click', () => {
      if (cell.classList.contains('table__cell--available') || cell.classList.contains('table__cell--selected')) {
        cell.classList.toggle('table__cell--available');
        cell.classList.toggle('table__cell--selected');
      }
    });

    cell.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        eventFire(cell, 'click');
      }
    });
  });
}
