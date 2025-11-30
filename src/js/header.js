const navButtonref = document.querySelector('.js-nav-btn');
const headNavRef = document.querySelector('.js-header-nav');

navButtonref.addEventListener('click', onNavButtonClick);

function onNavButtonClick() {
  headNavRef.classList.toggle('is-open');
}
