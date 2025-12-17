import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

new Accordion('.accordion-container', {
  elementClass: 'ab-list-item',
  triggerClass: 'ab-toggle-btn',
  panelClass: 'ab-list-content',
  headerClass: 'ab-list-head',
  showMultiple: true,
  duration: 300,
  openOnInit: [0],
});

const items = document.querySelectorAll('.ab-list-item');

items.forEach(item => {
  const panel = item.querySelector('.ab-list-head');
  const trigger = item.querySelector('.ab-toggle-btn');

  panel.addEventListener('click', toggleIcon);

  function toggleIcon() {
    const icon = trigger.querySelector('use');
    if (item.classList.contains('is-active')) {
      icon.setAttribute('href', `./img/sprite.svg#icon-arrUp`);
    } else {
      icon.setAttribute('href', './img/sprite.svg#icon-arrDown');
    }
  }
});

// ==========swiper=============

new Swiper('.about-end', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 6,
  oneWayMovement: true,
  slideToClickedSlide: true,
  loopedSlides: 6,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 0,
  cssMode: true,
});
