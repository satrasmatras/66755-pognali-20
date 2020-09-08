const servicesModal = document.querySelector('.services__modal');
const servicesModalActivator = document.querySelector('.services__show-tariffs');
const servicesModalClose = document.querySelector('.services__close');
const activeClass = 'services__modal--opened';

servicesModalActivator.addEventListener('click', (event) => {
  event.preventDefault();
  servicesModal.classList.add(activeClass);
});

servicesModalClose.addEventListener('click', (event) => {
  servicesModal.classList.remove(activeClass);
});
