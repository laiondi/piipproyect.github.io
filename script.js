document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el carrusel principal
    function handleCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const slides = carousel.querySelectorAll('img');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        carousel.querySelector('.next').addEventListener('click', nextSlide);
        carousel.querySelector('.prev').addEventListener('click', prevSlide);

        showSlide(currentIndex);
    }

    // Inicializar el carrusel principal
    handleCarousel('mainCarousel');

    // Inicializar los carruseles de los proyectos
    for (let i = 1; i <= 5; i++) {
        handleCarousel(`carousel${i}`);
    }

    // Función para manejar la descripción colapsable
    window.toggleDescription = function(descId) {
        const description = document.getElementById(descId);
        description.classList.toggle('expanded');
    }
});