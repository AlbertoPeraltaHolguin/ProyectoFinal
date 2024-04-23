
/* ------------------- ESPECIFICACIONES:
> 'Math.random' genera un decimal aleatorio entre 0 y 1
> 'Math.floor' convierte en entero el numero anterior */
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(numeroAleatorio(10000,99999)); /* minimo y maximo para generar numeros de 5 digitos*/

/* Libreria SweetAlert */


/**
 * SLIDER DE SECCIÓN DESTACADA
 */

const seccionDestacadaSlider = document.querySelector("[data-seccion-destacada-slider]");
const seccionDestacadaSliderItems = document.querySelectorAll("[data-seccion-destacada-slider-item]");
const seccionDestacadaSliderPrevBtn = document.querySelector("[data-prev-btn]");
const seccionDestacadaSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = seccionDestacadaSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  seccionDestacadaSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = seccionDestacadaSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= seccionDestacadaSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

seccionDestacadaSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = seccionDestacadaSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

seccionDestacadaSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * Automatización del deslizamiento
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

const stopAutoSlide = function () {
  clearInterval(autoSlideInterval);
};

[seccionDestacadaSliderNextBtn, seccionDestacadaSliderPrevBtn].forEach(btn => {
  btn.addEventListener("mouseover", stopAutoSlide);
  btn.addEventListener("mouseout", autoSlide);
});

window.addEventListener("load", autoSlide);
