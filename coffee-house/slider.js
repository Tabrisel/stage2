const pictures = document.querySelectorAll(".slider_box .line_with_pic img");
const main_slider = document.querySelector(".slider_box");
const line_with_pic = document.querySelector(".line_with_pic");
const left_button = document.querySelector(".left_Arrow");
const right_button = document.querySelector(".right_Arrow");
const all_indicators = document.querySelectorAll(".progress_bar");
const indicator1 = document.querySelector(".control_1 .progress_bar");
const indicator2 = document.querySelector(".control_2 .progress_bar");
const indicator3 = document.querySelector(".control_3 .progress_bar");
let active = document.querySelector(".active");
let touch_x = 0;
let touch_x2;
let moveX = 0;

let count_slider = 0;
let width_slider;

addEventListener("animationend", () => {
    count_slider++;
    if (count_slider >= pictures.length) {
        count_slider = 0;
    }

    if (count_slider === 0) {
        indicator1.classList.add("active");
        indicator2.classList.remove("active");
        indicator3.classList.remove("active");

    }
    else if (count_slider === 1) {
        indicator2.classList.add("active");
        indicator1.classList.remove("active");
        indicator3.classList.remove("active");
    }
    else if (count_slider === 2) {
        indicator3.classList.add("active");
        indicator2.classList.remove("active");
        indicator1.classList.remove("active");
    }
    
    moveSlider();
})


/* like hover */
main_slider.addEventListener("mouseover", () => {
    all_indicators[count_slider].style.animationPlayState = "paused";
})

main_slider.addEventListener("mouseout", () => {
    all_indicators[count_slider].style.animationPlayState = "running";
})

main_slider.addEventListener("mousedown", () => {
    all_indicators[count_slider].style.animationPlayState = "paused";
})

main_slider.addEventListener("mouseup", () => {
    all_indicators[count_slider].style.animationPlayState = "running";
})

main_slider.addEventListener("pointerenter", () => {
    all_indicators[count_slider].style.animationPlayState = "paused";
})

main_slider.addEventListener("pointerleave", () => {
    all_indicators[count_slider].style.animationPlayState = "running";
})

main_slider.addEventListener("touchstart", (event) => {
    touch_x = event.touches[0].clientX;
})


main_slider.addEventListener("touchmove", (event) => {
        event.preventDefault();
        touch_x2 = event.touches[0];
        moveX = touch_x - touch_x2.clientX;
})

main_slider.addEventListener("contextmenu", (event) => {
    event.preventDefault();
})


main_slider.addEventListener("touchend", (event) => {
    event.preventDefault();
    if(moveX > 0) {
        moveRight();
    }
    if (moveX <0) {
        moveLeft();
    }
    if (moveX = 0) {
        all_indicators[count_slider].style.animationPlayState = "running"; 
    }
})


function init() {
    width_slider = document.querySelector(".slider_box").offsetWidth;
    line_with_pic.style.width = width_slider * pictures.length + "px";
    pictures.forEach(item => {
        item.style.width = width_slider + "px";
        item.style.height = "auto";
    })
    moveSlider();
}

init();

window.addEventListener("resize", init);


right_button.addEventListener("click", moveRight);

function moveRight() {
    all_indicators[count_slider].classList.remove("active");
    count_slider++;
    if (count_slider >= pictures.length) {
        count_slider = 0;
    }
    moveSlider();
    all_indicators[count_slider].classList.add("active");
}

left_button.addEventListener("click", moveLeft);

function moveLeft() {
    all_indicators[count_slider].classList.remove("active");
    count_slider--;
    if (count_slider < 0) {
        count_slider = pictures.length-1;
    }
    moveSlider();
    all_indicators[count_slider].classList.add("active");
}

function moveSlider() {
    line_with_pic.style.transform = `translate(-${+count_slider * width_slider}px)`
}