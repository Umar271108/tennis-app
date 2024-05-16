const nextBtn = document.querySelector('.right')
const prevBtn = document.querySelector('.left')
const carusel = document.querySelector('.section-4-line')
const slider = document.querySelector('.section-5-slider-inner')
const right = document.querySelector('.right-arrow')
const left = document.querySelector('.left-arrow')
const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


let num = 0

nextBtn.addEventListener('click', () => {
    num = num + 218
    if (num >= 1090) {
        num = 0
    }
    carusel.style.left = '-' + num + 'px'
})

prevBtn.addEventListener('click', () => {
    num += -218
    if (num < 0 ){
        num = 872
    }
    carusel.style.left = -num + 'px'
})

    let number = 0

    right.addEventListener('click', () => {
        number = number + 639
        if (number >= 2556) {
            number = 0
        }
        slider.style.left = '-' + number + 'px'
    })

    left.addEventListener('click', () => {
        number += -639
        if (number < 0) {
            number = 1917
        }
        slider.style.left = -number + 'px'
    })



menuBtn.addEventListener('click', () => {
    change()
})

function change() {
        menuBtn.classList.toggle('is-active')
        menu.classList.toggle('is-active')
}

