import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
  elementClass: 'faq-list-item',
  triggerClass: 'faq-toggle-btn',
  panelClass: 'faq-list-txt',
  showMultiple: true,
  duration: 300,
});

const items = document.querySelectorAll('.faq-list-item');

items.forEach(item => {
  const trigger = item.querySelector('.faq-toggle-btn');

  trigger.addEventListener('click', toggleIcon);

  function toggleIcon() {
    const icon = trigger.querySelector('use');
    if (item.classList.contains('is-active')) {
      icon.setAttribute('href', `./img/sprite.svg#icon-arrUp`);
    } else {
      icon.setAttribute('href', './img/sprite.svg#icon-arrDown');
    }
  }
});
