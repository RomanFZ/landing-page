window.addEventListener('DOMContentLoaded', function () {

    const swiperProject = new Swiper('.swiper-project', {
        navigation: {
            nextEl: '.project-next',
            prevEl: '.project-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
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