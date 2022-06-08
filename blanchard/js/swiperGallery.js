document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    grid: {
      rows: 2,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gall-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gall-next",
      prevEl: ".gall-prev"
    },

    breakpoints: {
      320: {
        grid: {
          rows: 1,
          fill: "row"
        },
        slidesPerView: 1,
        spaceBetween: 30
      },
      450: {
        grid: {
          rows: 1,
          fill: "row"
        },
        slidesPerView: 2,
        spaceBetween: 30
      },

     768: {
        grid: {
          rows: 2,
          fill: "row"
        },
        slidesPerView: 2,
        spaceBetween: 30
      },

      1177: {
        grid: {
          rows: 2,
          fill: "row"
        },
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      beforeResize: function () {
            this.slides.forEach((el) => {
              el.style.marginTop = "";
            });
            },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});