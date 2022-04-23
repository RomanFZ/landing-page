window.addEventListener('DOMContentLoaded', function () {

    const params = {
        btnClassName: "js-header-dropdown-btn",
        dropClassName: "js-header-drop",
        activeClassName: "is-active",
        disabledClassName: "is-disabled"
    }

    function onDisable(evt) {
        document.querySelector(".header-top__logo-link").classList.toggle('hide')
        if (evt.target.classList.contains(params.disabledClassName)) {
            evt.target.classList.remove(params.disabledClassName, params.activeClassName);
            evt.target.removeEventListener("animationend", onDisable);
        }
    }

    function setMenuListener() {
        document.body.addEventListener("click", (evt) => {
            const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

            if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
                activeElements.forEach((current) => {
                    if (current.classList.contains(params.btnClassName)) {
                        current.classList.remove(params.activeClassName);
                    } else {
                        current.classList.add(params.disabledClassName);
                    }
                });
            }

            if (evt.target.closest(`.${params.btnClassName}`)) {
                const btn = evt.target.closest(`.${params.btnClassName}`);
                const path = btn.dataset.path;
                const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

                btn.classList.toggle(params.activeClassName);

                if (!drop.classList.contains(params.activeClassName)) {
                    drop.classList.add(params.activeClassName);
                    drop.addEventListener("animationend", onDisable);
                } else {
                    drop.classList.add(params.disabledClassName);
                }
            }
        });
    }

    setMenuListener();

    //Checkbox custom

    document.querySelectorAll('.checkbox-category-item').forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {
            checkbox.classList.toggle('active-checkbox');
        });
    });

    // Events button

    let eventBtn = document.querySelector('.events__button');

    eventBtn.addEventListener('click', function () {
        let cardEv1024 = document.querySelector('.card-1024-none');
        cardEv1024.classList.remove('card-1024-none')
        let cardEv = document.querySelectorAll('.card-slide-bottom')
        cardEv.forEach((e) => {
            e.classList.toggle('card-slide-bottom-show');
        })
        document.querySelector('.events__button').classList.add('events__button-off');
    })

    // Author tabs

    const setTabsAuthor = (selectorAuthor, selectorBtn) => {
        document.querySelectorAll(selectorBtn).forEach(function (tabsStep) {
            tabsStep.addEventListener('click', function (event) {
                const path = event.currentTarget.dataset.path

                document.querySelectorAll(selectorAuthor).forEach(function (tabContent) {
                    tabContent.classList.remove('author-active')
                });
                document.querySelector(`[data-target="${path}"]`).classList.add('author-active')
            });
        });

        const tabsBtn = document.querySelectorAll(selectorBtn);

        tabsBtn.forEach(function (item) {
            item.addEventListener('click', function () {
                let currentBtn = item;

                tabsBtn.forEach(function (item) {
                    item.classList.remove('active-btn');
                });
                currentBtn.classList.add('active-btn');
            });
        });
    }

    setTabsAuthor('.catalog-left__author', '.accordion-list__item-btn')
    setTabsAuthor('.catalog-left__author-rus', '.accordion-list__item-btn-rus')
    setTabsAuthor('.catalog-left__author-fra', '.accordion-list__item-btn-fra')
    setTabsAuthor('.catalog-left__author-ger', '.accordion-list__item-btn-ger')
    setTabsAuthor('.catalog-left__author-bel', '.accordion-list__item-btn-bel')

    // Burger

    const burger = document.querySelector('.burger-menu')
    const nav = document.querySelector('.nav')

    burger.addEventListener('click', function () {
        document.querySelector(".header-top__logo-link").classList.toggle('hide')
        document.querySelector(".search-form__btn").classList.toggle('hide')
        burger.classList.toggle('burger-menu__show')
        nav.classList.toggle('nav-show')
    })

    // Search Form

    const searchButton = document.querySelector('.search-form__btn');
    const logoHide = document.querySelector('.header-top__logo-link');
    const closeBtn = document.querySelector('.search-form__btn-close')

    searchButton.addEventListener('click', function (event) {
        event.preventDefault()
        document.querySelector('.search-form__input').classList.add('nav-show')
        document.querySelector('.search-form__btn-close').classList.add('search-form__btn-close_show')
    })

    closeBtn.addEventListener('click', function (event) {
        event.preventDefault()
        document.querySelector('.search-form__input').classList.toggle('nav-show')
        document.querySelector('.search-form__btn-close').classList.remove('search-form__btn-close_show')
    })

    const screenWidth = window.screen.width

    if (screenWidth <= 1023) {

        searchButton.addEventListener('click', function (event) {
            event.preventDefault()
            document.querySelector('.header-top__logo-link').classList.add('hide-show')
            document.querySelector('.search-form').classList.add('search-form__show')
            document.querySelector('.burger-menu').classList.add('hide-show')
            document.querySelector('.search-form__input').classList.add('search-form__input-show')
            document.querySelector('.header-top').classList.add('header-top_320-show')
        })
        closeBtn.addEventListener('click', function (event) {
            event.preventDefault()
            document.querySelector('.header-top__logo-link').classList.remove('hide-show')
            document.querySelector('.search-form').classList.remove('search-form__show')
            document.querySelector('.burger-menu').classList.remove('hide-show')
            document.querySelector('.search-form__input').classList.remove('search-form__input-show')
        })
    }

    if (screenWidth <= 449) {

        searchButton.addEventListener('click', function (event) {
            event.preventDefault()
            document.querySelector('.header-top').classList.add('header-top_320-show')
            document.querySelector('.header-top-container').classList.add('header-top-container_show')
        })
        closeBtn.addEventListener('click', function (event) {
            event.preventDefault()
            document.querySelector('.header-top').classList.remove('header-top_320-show')
            document.querySelector('.header-top-container').classList.remove('header-top-container_show')
        })
    }

    // tabs Editions

    let editElem = document.querySelector('.checkbox-heading');

    function showEdit() {
        document.querySelectorAll('.input-checkbox').forEach(function (val) {
            if (val.checked) {
                val.closest('.custom-checkbox').classList.add('custom-checkbox-show');
            } else {
                val.closest('.custom-checkbox').classList.remove('custom-checkbox-show');
            }
        })
    }

    showEdit();

    document.querySelectorAll('.input-checkbox').forEach(function (elem) {
        elem.addEventListener('change', function (event) {
            showEdit();
        });
    });
    editElem.addEventListener('click', function (event) {

        editElem.classList.toggle('checkbox-heading-active');

        document.querySelectorAll('.custom-checkbox').forEach(function (item) {
            item.classList.toggle('custom-checkbox-show-view');
        });
    });

});