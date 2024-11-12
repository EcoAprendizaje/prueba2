
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100; // Ajusta el offset según el ancho de cada slide
    document.querySelector('.carousel').style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Cambia de imagen automáticamente cada 5 segundos
setInterval(nextSlide, 5000);


// Mensaje de confirmación para el enlace de WhatsApp
const whatsappLink = document.querySelector('.contact-info a[href*="wa.me"]');
whatsappLink.addEventListener('click', function(event) {
    event.preventDefault();
    const userConfirmed = confirm("¿Quieres abrir WhatsApp para enviar un mensaje?");
    if (userConfirmed) {
        window.open(whatsappLink.href, '_blank');
    }
});
