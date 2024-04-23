
// menubar

let bars = document.getElementById('bars');
let cross = document.getElementById('cross');
let menuBar = document.getElementById('menu-bar');

bars.addEventListener('click', () => {

    menuBar.style.transform = " translate(0)";
    bars.style.display = "none";
    cross.style.display = "block";
    menuBar.classList.add("menu-bar");
    console.log("radhe radhe ");
})

cross.addEventListener('click', () => {

    menuBar.style.transform = " translate(100%)";
    cross.style.display = "none";
    bars.style.display = "block";

    console.log("radhe radhe ");
})



// // Gallery Slider js

// let slider = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let dots = document.querySelectorAll('.slider .dots li');


// let lengthItems = items.length - 1;
// let active = 0;
// next.onclick = function () {
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function () {
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(() => { next.click() }, 3500);
// function reloadSlider() {
//     slider.style.left = -items[active].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li.active');
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(() => { next.click() }, 3000);


// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', () => {
//         active = key;
//         reloadSlider();
//     })
// })
// window.onresize = function (event) {
//     reloadSlider();
// };



