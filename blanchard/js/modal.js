const btnSlide = document.querySelectorAll('.link-slide');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closeModalBtn = document.querySelectorAll('.close-modal-btn')

btnSlide.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal-visible');
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
        modalOverlay.classList.add('modal-overlay-visible');
    })
})

closeModalBtn.forEach((el) =>
{
    el.addEventListener('click', (e) => {
        modalOverlay.classList.remove('modal-overlay-visible');
        modals.forEach((el) => {
            el.classList.remove('modal-visible');
        })
    })
})


modalOverlay.addEventListener('click', (e) => {

    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('modal-overlay-visible');
        modals.forEach((el) => {
            el.classList.remove('modal-visible');
        })
    }
})