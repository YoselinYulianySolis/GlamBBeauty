let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var x = window.innerWidth;

const min_width = 1000;
/*let currentSlide = 0;

  const images = document.querySelectorAll('.carousel-image');
  const totalSlides = images.length;

  function moveSlide(step) {
    currentSlide + step;

    // Si llegamos al final o al inicio, ajustamos el índice
    if (currentSlide = totalSlides) {
      currentSlide = 0
    } else if (currentSlide) {
      currentSlide = totalSlides - 1
    }*/

    // Actualizamos el contenedor de imágenes para mostrar la imagen correcta
    const offset = -currentSlide * 35;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
 

  // Iniciar el carrusel automáticamente cada 3 segundos
  setInterval((0) =moveSlide(1), 3000);
