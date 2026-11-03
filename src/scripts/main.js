'use strict';

const sliderImages = [
  new URL('../images/slider/slide-img-1.jpg', import.meta.url).href,
  new URL('../images/slider/slide-img-2.jpg', import.meta.url).href,
  new URL('../images/slider/slide-img-3.jpg', import.meta.url).href,
  new URL('../images/slider/slide-img-4.jpg', import.meta.url).href,
];

function scrollTo(block) {
  document
    .querySelector(block)
    .scrollIntoView({
      block: 'center', behavior: 'smooth',
    });
}

const aboutUs = document.querySelectorAll('.navigation__link--about-us');
const services = document.querySelectorAll('.navigation__link--services');
const testimonials = document.querySelectorAll(
  '.navigation__link--testimonials',
);
const contactUs = document.querySelectorAll(
  '.navigation__link--contact-us',
);
const hireUs = document.querySelectorAll('.navigation__link--hire-us');
const hireUsButton = document.querySelectorAll('.hire-us__button');

const servicesLink = document.querySelectorAll('.services__link');
const headerButton = document.querySelectorAll('.header__button');

aboutUs.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.about');
  });
});

services.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.services');
  });
});

testimonials.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.testimonials');
  });
});

contactUs.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.footer__contact-us');
  });
});

hireUs.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.footer__contact-us');
  });
});

hireUsButton.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.footer__contact-us');
  });
});

servicesLink.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.our-expertise');
  });
});

headerButton.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.our-expertise');
  });
});

const sliderLeftButton = document.querySelector('.header__arrow--left');
const sliderRightButton = document.querySelector('.header__arrow--right');
const headerSlider = document.querySelector('.header__slider');

function setSliderImage(number) {
  headerSlider.style.backgroundImage
    = `url("${sliderImages[number - 1]}")`;
}

setSliderImage(1);

let imageNumber = 1;
const maxImageNumber = 4;
const minImageNumber = 1;

sliderLeftButton.addEventListener('click', () => {
  if (imageNumber - 1 < minImageNumber) {
    imageNumber = maxImageNumber;
  } else {
    imageNumber--;
  }
  setSliderImage(imageNumber);
});

sliderRightButton.addEventListener('click', () => {
  if (imageNumber + 1 > maxImageNumber) {
    imageNumber = minImageNumber;
  } else {
    imageNumber++;
  }
  setSliderImage(imageNumber);
});
