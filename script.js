

/*  ---------------------------------------------------------------------------------------------------------------------------------- FOLIO DE RESERVACIONES ---------

------------------------ ESPECIFICACIONES:
> 'Math.random' genera un decimal aleatorio entre 0 y 1
> 'Math.floor' convierte en entero el numero anterior */
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById('confirmacion').addEventListener('click',function(){
  let user = document.getElementById("nombre").value;
  let number = document.getElementById("numero").value;

  if(user < 3 && number == ""){
    /* >'swal' funcion de SweetAlert, 1er campo titulo, 2do campo descripcion, 3er campo iconos que ofrece la liberia */
    swal('¡Ha ocurrido un error!', 'No se admiten espacios en blanco.', 'error');  /* Validar que no estén vacios los input (min. de user 3; ej. 'Ana') */
  } else if(number.length !== 10){
    swal('¡Información incompleta!', 'Verifique la longitud del número.', 'warning'); /* Validar la longitud del telefono */
  } else {
    swal('¡Operación exitosa!', 'Guarde su comprobante, el no. de folio.', 'success');

    const leyenda = document.getElementById('leyenda'); /* -- ubicar al h1 que contendra la leyenda por medio de una variable --*/
    leyenda.textContent = 'Su folio de reservación es:'; /* -- asignarle el texto a la variable anterior para que se muestre en pantalla al hacer click --*/

    /* -- Mismo proceso, pero, en vez de enviar un texto, invocamos a la funcion que nos dará el folio -- */
    const folio = document.getElementById('folio'); 
    folio.textContent = numeroAleatorio(10000,99999); /* los parametros son el minimo y maximo para generar un numero de 5 digitos*/
}
});















































/**
 * SLIDER DE SECCIÓN DESTACADA
 * 
 * const seccionDestacadaSlider = document.querySelector("[data-seccion-destacada-slider]");
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

 */

