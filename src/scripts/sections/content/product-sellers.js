// let slidePerView = document.querySelectorAll('.slide-per-view')[0].outerText;
// console.log(slidePerView);

let container = document.querySelectorAll('.slide-content .swiper-container');

console.log(container)

let slidePerViews = container.dataset.slidePerView;

console.log(slidePerViews);

class SlidePrSellers {
    constructor() {
        this.init();
    }

    init() {
        this.slider();
    }

    slider() {
        let slideFeatureCollection = new Swiper('.section-feature-collection .slide-content .swiper-container', {
          navigation: {
            nextEl: '.section-feature-collection .slide-content .swiper-button-next',
            prevEl: '.section-feature-collection .slide-content .swiper-button-prev',
            // disabledClass: 'my-button-disabled',
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: slidePerViews,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: slidePerViews,
              spaceBetween: 30,
            }
          }
      });
    }
}

export default SlidePrSellers;