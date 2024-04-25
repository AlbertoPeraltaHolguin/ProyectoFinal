
// Selecciona todos los elementos de los slides
const seccionDestacadaSliderItems = document.querySelectorAll("[data-seccion-destacada-slider-item]");

// Variable para rastrear la posición del slide actual
let currentSlidePos = 0;

// Función para actualizar la posición del slider
const updateSliderPos = function () {
  // Quita la clase "active" de todos los slides
  seccionDestacadaSliderItems.forEach(item => {
    item.classList.remove("active");
  });
  // Añade la clase "active" al slide actual
  seccionDestacadaSliderItems[currentSlidePos].classList.add("active");
}

// Función para pasar al siguiente slide
const slideNext = function () {
  // Si estamos en el último slide, volvemos al primero, de lo contrario, avanzamos al siguiente
  if (currentSlidePos >= seccionDestacadaSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  // Actualiza la posición del slider
  updateSliderPos();
}

// Función para el desplazamiento automático del slider
const autoSlide = function () {
  // Establece un intervalo que llama a la función slideNext cada 7000 milisegundos (7 segundos)
  setInterval(function () {
    slideNext();
  }, 7000);
}

// Cuando la ventana se carga, inicia el desplazamiento automático
window.addEventListener("load", autoSlide);





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

