var image = ["images/display1.png", "images/display2.JFIF", "images/display3.png", "images/display4.JFIF", "images/display5.png", 
"images/display6.png", "images/display7.svg", "images/display8.png"]

function display_1(){
    document.getElementById('display').src='image[0]'
}

function diplay_2(){
    document.getElementById('display').src='image[1]'
}

function display_3(){
    document.getElementById('display').src='image[2]'
}

function display_4(){
    document.getElementById('display').src='image[3]'
}

function display_5(){
    document.getElementById('display').src='image[4]'
}

function display_6(){
    document.getElementById('display').src='image[5]'
}

function display_7(){
    document.getElementById('display').src='image[6]'
}

function display_8(){
    document.getElementById('display').src='image[7]'
}

const buttons = document.querySelector("[data-slide-button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1 
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})