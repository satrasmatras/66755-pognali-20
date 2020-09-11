const expanderHeaders = document.querySelectorAll('.expander__header');
const expanders = document.querySelectorAll('.expander');

if (expanderHeaders) {

  expanders.forEach(expander => {
    expander.classList.remove('expander--no-js');
  });

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  expanderHeaders.forEach(expanderHeader => {
    expanderHeader.addEventListener('click', (event) => {
      const expander = expanderHeader.parentElement;
      expander.classList.toggle('expander--opened')
    });

    expanderHeader.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        eventFire(expanderHeader, 'click');
      }
    });
  });
}
