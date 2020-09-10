const servicesModal = document.querySelector('.services__modal');
const servicesModalActivator = document.querySelector('.services__show-tariffs');
const servicesModalClose = document.querySelector('.services__close');
const activeClass = 'services__modal--opened';

if (servicesModal && servicesModalActivator && servicesModalClose) {
  servicesModalActivator.addEventListener('click', (e) => {
    e.preventDefault();
    servicesModal.classList.add(activeClass);
  });

  servicesModalClose.addEventListener('click', () => {
    servicesModal.classList.remove(activeClass);
  });
}
