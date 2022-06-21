window.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.hero-slider', {
        allowTouchMove: false,
        loop: true,
        effect: 'fade',
        speed: 10000,
        autoplay: {
            delay: 10000
        }
    });
});