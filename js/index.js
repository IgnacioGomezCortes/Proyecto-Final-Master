// Declaracion de variables 

const headerButton = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')
const header = document.querySelector('.header');
const headerDivs = document.querySelectorAll('.header__div')

const contactButton = document.querySelector('.contact')
const contactWrapper = document.querySelector('.contact__wrapper')
const contactConfirm = document.querySelector('.contact__confirm')
const contactForm = document.querySelector('.contact__form')
const submitButton = document.querySelector('.form__button')
const closeButtons = document.querySelectorAll('.close__button')

const heading = document.querySelector('.hero__heading')
const lis = document.querySelectorAll('.artists__a')
const artists = document.querySelector('.artists')
const artistsNav = document.querySelector('.artists__nav')
const imgs = [
  'assets/artists/18074g_lg.jpeg',
  'assets/artists/morgan_myles.jpg',
  'assets/artists/brucespringsteen.jpg',
  'assets/artists/bruno_mars.jpg',
  'assets/artists/reba_meyers.jpg',
  'assets/artists/big_RogerKisby-2494.jpg',
  'assets/artists/simon_neil_1.jpg',
  'assets/artists/glenhansard.jpg',
  'assets/artists/stevewilson.jpg',
  'assets/artists/glenn-frey-eagles_1453170004.jpg'
]


// Funciones 


// Añadimos un evento CLICK para controlar el comportamiento de elementos de encabezado

headerButton.addEventListener('click', function () {

  /* Al hacer CLICK :
  Hacemos TOGGLE de la clase ACTIVE al elemento headerNav del header para mostrarlo/ocultarlo.
  Hacemos TOGGLE de la clase HIDE al elemento heading para ocultarlo/mostrarlo.
  Hacemos TOGGLE de las clases ROTATE OPACITY y ROTATE-INVERT para crear un efecto en dicho botón.
  */

  headerNav.classList.toggle('active');
  heading.classList.toggle('hide');
  headerDivs[0].classList.toggle('rotate');
  headerDivs[1].classList.toggle('opacity');
  headerDivs[2].classList.toggle('rotate-invert');
});


// Añadimos un evento SCROLL a la página para controlar la visibilidad del elemento header
// Previamente guardamos la posición de desplazamiento previa en una variable.

let prevScrollPosition = window.scrollY;

window.addEventListener('scroll', function () {

  // Guardamos la posición actual de scroll
  const currentScrollPosition = window.scrollY;

  // Comprobamos si la posición actual de scroll es mayor que la altura de la ventana
  if (currentScrollPosition > this.window.innerHeight) {

    // Comprobamos si el formulario no está visible
    if (!contactForm.classList.contains('show')) {

      // Añadimos la clase SHADOW al header solo si el formulario no está visible
      header.classList.add('shadow');

      // Comprobamos si estamos haciendo scroll hacia abajo o hacia arriba
      if (currentScrollPosition > prevScrollPosition) {

        // Si estamos haciendo scroll hacia abajo, ocultamos el header
        header.classList.add("hidden");
        contactButton.classList.add('opacity');

      } else {

        // Si estamos haciendo scroll hacia arriba, mostramos el header
        header.classList.remove("hidden");
        contactButton.classList.remove('opacity');
      }
    }
  } else {

    // Si la posición de scroll no es mayor que la altura de la ventana, eliminamos la clase SHADOW
    header.classList.remove('shadow');
  }
  // Actualizamos la posición de desplazamiento previa
  prevScrollPosition = currentScrollPosition;

});

// Eventos para controlar el funcionamiento del formulario de contacto :

//Añadimos un evento CLICK al elemento contactButton para abrir el formulario.
contactButton.addEventListener('click', function () {

  // Comprobamos si el elemento headerNav contiene la clase ACTIVE.
  if (headerNav.classList.contains('active')) {

    // Hacemos la funcion CLICK en el elemento headerButton.
    // En caso de que hagamos click y el menu esté visible, lo ocultamos.
    headerButton.click();
  }
  // Hacemos TOGGLE de la clase HIDDEN al elemento header para ocultarlo/mostrarlo.
  header.classList.toggle("hidden");

  // Hacemos REMOVE de la clase SHADOW al elemento header para visualizar mejor.
  header.classList.remove("shadow");

  // Hacemos TOGGLE de la clase SHOW al elemento contactForm para mostrar/ocultar el formulario.
  contactForm.classList.toggle('show');

});

// Añadimos un evento CLICK al elemento submitButton.
submitButton.addEventListener('click', function () {

  // Ocultamos el elemento contactWrapper y mostramos el contactConfirm
  contactWrapper.style.display = 'none'
  contactConfirm.style.display = 'flex'

});

// Recorremos el array closeButtons para controlar su funcionamiento.
closeButtons.forEach(function (eachButton, index) {

  // Añadimos el evento CLICK a cada elemento.
  closeButtons[index].addEventListener('click', function () {

    // Al hacer CLICK hacemos TOGGLE de la clase SHOW y REMOVE de la clase HIDDEN para ocultar el formulario.
    contactForm.classList.toggle('show');
    header.classList.remove("hidden");

  });

});

// Añadimos un evento CLICK para cerrar el formulario al hacer click fuera del elemento contactForm y contactButton. 
document.addEventListener('click', function (event) {

  // Comprobamos si el clic no ocurrió dentro de los dos elementos.
  if (!contactForm.contains(event.target) && !contactButton.contains(event.target)) {

    // Hacemos TOGGLE de la clase SHOW y REMOVE de la clase HIDDEN para ocultar el formulario.
    contactForm.classList.remove('show');
    header.classList.remove("hidden");

  }

});

// Recorremos el array de imágenes para controlar el funcionamiento de la seccion ARTISTS :
lis.forEach(function (eachLi, index) {

  // Por defecto hacemos ADD de la clase aactive a cada elemento.
  lis[index].classList.add('aactive')

  // Por defecto hacemos REMOVE de la clase aactive al elemento de la posicion 3.
  lis[3].classList.remove('aactive')

  // Por defecto cambiamos el color del elemento de la posicion 3.
  lis[3].style.color = '#c89e67'

  // Cuando hago MOUSEOVER en un elemento li se le ADD la clase AACTIVE a todos ellos 
  // y hacemos REMOVE de la clase AACTIVE al elemento del mismo INDEX.
  lis[index].addEventListener('mouseover', function () {
    lis.forEach(function (eachLi, index) {
      lis[index].classList.add('aactive')
      lis[3].style.color = ''
    });
    lis[index].classList.remove('aactive')

    // Añadimos en la url del backgroundImage el elemento del array img con el index correspondiente al evento.
    artists.style.backgroundImage = 'url(' + imgs[index] + ')';

  });

  // Cuando hago MOUSEOUT en un li se le REMOVE la clase AACTIVE a todos ellos.
  lis[index].addEventListener('mouseout', function () {
    lis.forEach(function (eachLi, index) {
      lis[index].classList.remove('aactive')

    });

  });

});




