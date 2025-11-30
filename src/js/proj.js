import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: document.querySelector('.proj-btn swiper-button-next'),
    prevEl: document.querySelector('.proj-btn swiper-button-prev'),
  },
  speed: 500,
  slidesPerView: 1,
  cssMode: true,
});
