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
    
    const mySwiper = new Swiper('.gallery-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,

            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' <span>/</span> ' + '<span class="' + totalClass + '"></span>';
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            450: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 17,
                grid: {
                    rows: 2,
                },
            },
            1600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                    rows: 2,
                },
            },
        },

    });

    const swiperProject = new Swiper('.swiper-project', {
        navigation: {
            nextEl: '.project-next',
            prevEl: '.project-prev',
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