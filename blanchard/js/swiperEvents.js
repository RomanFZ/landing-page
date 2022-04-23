
(function () {

    'use strict';

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:449px)');

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

        const swiperEvents = new Swiper('.swiper-events-320', {
            direction: 'horizontal',
            pagination: {
                el: ".swiper-pagination-events",
            },
            slidesPerView: 1,
            spaceBetween: 10
        });

    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();



})(); /* IIFE end */