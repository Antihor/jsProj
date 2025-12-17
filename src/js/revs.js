import { getData } from './api';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const slides = document.querySelectorAll('.rev-card');
const prev = document.querySelector('.rev-btn-prev');
const next = document.querySelector('.rev-btn-next');

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.rev-btn-next',
    prevEl: '.rev-bnt-prev',
  },
  wrapperClass: 'rev-list swiper-wrapper',
  slideClass: 'rev-card',
  spaceBetween: 0,
  cssMode: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1440: { slidesPerView: 4 },
  },
  on: {
    slideChange: function () {
      if (this.isBeginning) {
        prev.disabled = true;
        prev.classList.add('disabled');
      } else {
        prev.disabled = false;
        prev.classList.remove('disabled');
      }

      if (this.isEnd) {
        next.disabled = true;
        next.classList.add('disabled');
      } else {
        next.classList.remove('disabled');
        next.disabled = false;
      }
    },
  },
});

window.swiper = swiper;

next.addEventListener('click', () => {
  swiper.slideNext();
});

prev.addEventListener('click', () => {
  swiper.slidePrev();
});

if (swiper.isBeginning) {
  prev.classList.add('disabled');
}

if (swiper.isEnd) {
  next.classList.add('disabled');
}

async function loadRev() {
  const data = await getData();

  slides.forEach((slide, index) => {
    if (data[index]) {
      slide.innerHTML = `
      <li class="rev-card">
        <img
  class="rev-card-img"
  src="${data[index].avatar_url}"
  alt="${data[index].author}"
  width="48"
  height="48"
/>
<h3 class="rev-card-title">${data[index].author}</h3>
<p class="rev-card-txt">${slidesData[index].review}
</p>
</li>`;
    }
  });
}

loadRev();

//   class="rev-card-img"
//   src="./img/reviews/Dmytro.jpg"
//   alt="Dmytro"
//   width="48"
//   height="48"
// />
// <h3 class="rev-card-title">Dmytro</h3>
// <p class="rev-card-txt">
//   I have the honor to recommend him as an exceptional
//   professional in his field. His knowledge and expertise are
//   undeniable. Cooperation with him always brings impressive
//   results.
// </p>
// <img
//   class="rev-card-img"
//   src="./img/reviews/Anna.jpg"
//   alt="Anna"
//   width="48"
//   height="48"
// />
// <h3 class="rev-card-title">Anna</h3>
// <p class="rev-card-txt">
//   The developed project impresses with its quality and
//   efficiency. The code is cleanly written and the functionality
//   exceeds expectations. Extremely satisfied with the
//   cooperation!
// </p>
// <img
//   class="rev-card-img"
//   src="./img/reviews/Ivetta.jpg"
//   alt="Ivetta"
//   width="48"
//   height="48"
// />
// <h3 class="rev-card-title">Ivetta</h3>
// <p class="rev-card-txt">
//   Thanks for the excellent work on the project! His talent and
//   professionalism deserve recognition. I recommend it to
//   everyone who is looking for an expert in the field of software
//   development.
// </p>
