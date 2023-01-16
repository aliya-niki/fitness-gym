import '../vendor/swiper';

const initSlider = () => {
  const sliderButtonPrev = document.querySelector('[data-slider-btn-prev]');
  const sliderButtonNext = document.querySelector('[data-slider-btn-next]');
  const sliderElement = document.querySelector('[data-slider]');
  if (sliderButtonPrev) {
    sliderButtonPrev.classList.remove('no-js');
  }
  if (sliderButtonNext) {
    sliderButtonNext.classList.remove('no-js');
  }
  if (sliderElement) {
    sliderElement.classList.remove('no-js');

    const slider = new window.Swiper(sliderElement, {
      loop: true,
      watchOverflow: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      navigation: {
        nextEl: '[data-slider-btn-next]',
        prevEl: '[data-slider-btn-prev]',
      },

    });
    slider.init();
  }
};

const initCarousel = () => {
  const carouselElement = document.querySelector('[data-carousel]');
  if (carouselElement) {
    carouselElement.classList.remove('no-js');

    const carousel = new window.Swiper(carouselElement, {
      loop: false,
      watchOverflow: true,
      autoHeight: true,

      navigation: {
        nextEl: '[data-carousel-btn-next]',
        prevEl: '[data-carousel-btn-prev]',
      },

    });
    carousel.init();
  }
};

export {initSlider, initCarousel};
