// Lógica del carrusel
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(newIndex) {
    const totalSlides = document.querySelectorAll('.slide').length;
    index = (newIndex + totalSlides) % totalSlides;
    slides.style.transform = translateX({index100});
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1))
document.getElementById('vaciar-carrito').addEventListener('click', function() {
    // Vaciar la lista de productos
    document.getElementById('lista-carrito').innerHTML = '';

    // Actualizar el total
    document.querySelector('#carrito p strong').textContent = 'Total: $0.00';
});