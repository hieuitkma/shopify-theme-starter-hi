//slide header
let delaySlide = document.querySelectorAll('.slide-delay')[0].outerText;
console.log(delaySlide);

class slideHeader {
  constructor() {
    this.init();
  }

  init() {
    this.showSlide();
  }

  showSlide() {
    let slide = new Swiper('.slide-header .swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      speed:300,
      autoplay: {
          delay: delaySlide,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.slide-header .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.slide-header .swiper-button-next',
          prevEl: '.slide-header .swiper-button-prev',
      },
      on: {
          slideChange: () => {
            anime({
              targets: '.swiper-slide .slide--box',
              easing: 'easeInOutQuad',
              translateY: ['0%', '-70%'],
              opacity: ['0', '1'],
              duration: 1000,
              delay: 1500,
            }),
            anime({
              targets: '.swiper-slide .slide__img',
              scale: ['1.5', '1.2'],
              duration: 2000,
              easing: 'easeInOutQuad',
            });
          }
        }
    });
  }
}

export default slideHeader;