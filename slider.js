const slider = document.querySelector("#slider");

let sliderSection = document.querySelectorAll(".slider-section");

let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector("#btn-right");
const btnLetf = document.querySelector("#btn-left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}


btnRight.addEventListener('click', function() {
    moverDerecha();
});

btnLetf.addEventListener('click', function() {
    moverIzquierda();
});

setInterval(function(){
    moverDerecha();
}, 4000);

