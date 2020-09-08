const expanderHeaders = document.querySelectorAll('.expander__header');

expanderHeaders.forEach(expanderHeader => {
  expanderHeader.addEventListener('click', (event) => {
    let expander = expanderHeader.parentElement;
    console.log(expander);
    expander.classList.toggle('expander--opened')
  })
})
