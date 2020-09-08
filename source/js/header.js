const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header .logo');
const menuToggle = document.querySelector('.header__toggle');

header.classList.remove('header--no-js');

menuToggle.addEventListener('click', () => {
  headerLogo.classList.toggle('logo--light');
  header.classList.toggle('header--white');
  header.classList.toggle('header--opened');
});

const pageMain = document.querySelector('.page__main');
const pageMainPaddingTop = parseInt(getComputedStyle(pageMain).paddingTop.replace('px', ''));

window.addEventListener('scroll', function() {
  if (pageYOffset > 0){
    header.classList.add('header--sticky');
    pageMain.style.paddingTop = `${pageMainPaddingTop + header.clientHeight}px`;
    headerLogo.classList.add('logo--light');

  } else {
    header.classList.remove('header--sticky');
    pageMain.style.paddingTop = `${pageMainPaddingTop}px`;
    headerLogo.classList.remove('logo--light');
  }
});

