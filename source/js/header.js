const header = document.querySelector('.header');
const menuToggle = document.querySelector('.header__toggle');
const footer = document.querySelector('.footer');

const HEADER_NO_JS_CLASS = 'header--no-js';
const HEADER_OPENED_CLASS = 'header--opened';
const HEADER_WHITE_CLASS = 'header--white';
const HEADER_STICKY_CLASS = 'header--sticky';

if (header) {
  header.classList.remove(HEADER_NO_JS_CLASS);
  header.classList.remove(HEADER_OPENED_CLASS);
  header.classList.remove(HEADER_WHITE_CLASS);

  menuToggle.addEventListener('click', () => {
    const headerIsSticky = header.classList.contains(HEADER_STICKY_CLASS);

    if (!headerIsSticky){
      header.classList.toggle(HEADER_WHITE_CLASS);
    }
    header.classList.toggle(HEADER_OPENED_CLASS);
  });

  const pageMain = document.querySelector('.page__main');
  const pageMainPaddingTop = parseInt(getComputedStyle(pageMain).paddingTop.replace('px', ''));

  window.addEventListener('scroll', function() {
    if (pageYOffset > 0){
      header.classList.add(HEADER_STICKY_CLASS);
      pageMain.style.paddingTop = `${pageMainPaddingTop + header.clientHeight}px`;
      header.classList.add(HEADER_WHITE_CLASS);

    } else {
      header.classList.remove(HEADER_STICKY_CLASS);
      pageMain.style.paddingTop = `${pageMainPaddingTop}px`;
      header.classList.remove(HEADER_WHITE_CLASS);
    }
  });
}
