console.log("el Script funciona")

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
