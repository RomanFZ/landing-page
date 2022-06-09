window.addEventListener('DOMContentLoaded', function () {

    const swiperEvents = new Swiper('.events-slider', {
        navigation: {
            nextEl: '.events-next',
            prevEl: '.events-prev',
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50,
            },
            1600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    });

});