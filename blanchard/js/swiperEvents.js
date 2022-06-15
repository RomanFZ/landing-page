window.addEventListener('DOMContentLoaded', function () {

    const swiperEvents = new Swiper('.events-slider', {
        navigation: {
            nextEl: '.events-next',
            prevEl: '.events-prev',
            disabledClass: 'disabled_swiper_button',
        },
        pagination: {
            el: ".swiper-pagination-events",
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
           525: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 27,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 27,
            },
            1600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    });

});