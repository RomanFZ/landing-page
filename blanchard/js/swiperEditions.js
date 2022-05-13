
(function () {

    'use strict';

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(max-width:449px)');

    // keep track of swiper instances to destroy later
    let swiperEdit;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const breakpointChecker = function () {

        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {

            // clean up old instances and inline styles when available
            if (swiperEdit !== undefined) swiperEdit.destroy(true, true);

            // or/and do nothing
            return;

            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {

            // fire small viewport version of swiper
            return enableSwiper();

        }

    };

    const enableSwiper = function () {

        swiperEdit = new Swiper('.editions-slider', {


            slidesPerView: 'auto',


            navigation: {
                nextEl: '.edit-next',
                prevEl: '.edit-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 28,
                },
                1600: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 44
                },
            },

            pagination: {
                el: '.edit',
                type: 'fraction',
                clickable: true,

                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' + ' <span>/</span> ' + '<span class="' + totalClass + '"></span>';
                }
            }

        });

    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();



})(); /* IIFE end */