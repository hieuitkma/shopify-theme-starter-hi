/**
 * Import sections bên dưới
 */
import './sections/sliders/sliders-01';
import { doSomething } from './sections/sliders/sliders-01';

// From ./sections/slides/sliders-01
doSomething();
console.log('kmacoders developing...');

var hi = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 56
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }
  });