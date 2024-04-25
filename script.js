

/*  ---------------------------------------------------------------------------------------------------------------------------------- FOLIO DE RESERVACIONES ---------
------------------------ ESPECIFICACIONES:
> 'Math.random' genera un decimal aleatorio entre 0 y 1
> 'Math.floor' convierte en entero el numero anterior */
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById('confirmacion').addEventListener('click',function(){
  const leyenda = document.getElementById('leyenda'); /* -- ubicar al h1 que contendra la leyenda por medio de una variable --*/
  leyenda.textContent = 'Su folio de reservación es:'; /* -- asignarle el texto a la variable anterior para que se muestre en pantalla al hacer click --*/

  /* -- Mismo proceso, pero, en vez de enviar un texto, invocamos a la funcion que nos dará el folio -- */
  const folio = document.getElementById('folio'); 
  folio.textContent = numeroAleatorio(10000,99999); /* los parametros son el minimo y maximo para generar un numero de 5 digitos*/
});



/*  ---------------------------------------------------------------------------------------------------------------------------------- VALIDACIONES ---------*/

function reservaciones() {
  let user = document.getElementById("nombre").value;
  let number = document.getElementById("numero").value;

  if(user == "" || number == ""){
      swal('¡Ha ocurrido un error!', 'No se admiten espacios en blanco.', 'error');  /* Validar que no estén vacios los input */
  } else if(number.length !== 10){
    swal('¡Información incompleta!', 'Verifique la longitud del número.', 'warning'); /* Validar la longitud del telefono */
  } else {
    swal('¡Operación exitosa!', 'Guarde su comprobante, el no. de folio.', 'success');
  }
}

/**
 * SLIDER DE SECCIÓN DESTACADA
 */

// Selecciona todos los elementos que tienen el atributo "data-seccion-destacada-slider-item" y los almacena en la variable seccionDestacadaSliderItems.
const seccionDestacadaSliderItems = document.querySelectorAll("[data-seccion-destacada-slider-item]");

// Inicializa una variable llamada currentSlidePos y la establece en 0, esto representa la posición actual del slide.
let currentSlidePos = 0;

// Definición de una función llamada updateSliderPos que actualiza la posición del slider.
const updateSliderPos = function () {
  // Itera sobre todos los elementos de seccionDestacadaSliderItems.
  seccionDestacadaSliderItems.forEach(item => {
    // Remueve la clase "active" de cada elemento, para ocultarlos.
    item.classList.remove("active");
  });
  // Agrega la clase "active" al elemento en la posición currentSlidePos, para mostrarlo.
  seccionDestacadaSliderItems[currentSlidePos].classList.add("active");
}

// Definición de una función llamada slideNext que avanza al siguiente slide.
const slideNext = function () {
  // Incrementa el valor de currentSlidePos en 1.
  currentSlidePos++;
  // Si currentSlidePos es igual o mayor que la longitud de seccionDestacadaSliderItems, establece currentSlidePos en 0, lo que permite un bucle infinito del carrusel.
  if (currentSlidePos >= seccionDestacadaSliderItems.length) {
    currentSlidePos = 0;
  }

  // Llama a la función updateSliderPos para actualizar la visualización del slide.
  updateSliderPos();
}

// Definición de una función llamada autoSlide que activa el avance automático del carrusel.
const autoSlide = function () {
  // Establece un intervalo que llama a la función slideNext cada 7000 milisegundos (7 segundos), avanzando automáticamente al siguiente slide.
  setInterval(function () {
    slideNext();
  }, 7000);
}

// Agrega un evento "load" al objeto window, que inicia el avance automático del carrusel cuando se carga la página.
window.addEventListener("load", autoSlide);












































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

