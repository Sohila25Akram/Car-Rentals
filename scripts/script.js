let slider = document.querySelector(".desc-slider");
let slide_1 = document.querySelector(".desc-slide-1");
let slide_2 = document.querySelector(".desc-slide-2");
let slide_3 = document.querySelector(".desc-slide-3");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let menu = document.querySelector("header label input");
let nav = document.querySelector("nav");


slide_1.style.zIndex = "2";

slide_1.style.opacity = "1" 

one.classList.add('active');

one.onclick = function () {
    two.classList.remove('active');
    three.classList.remove('active');
    one.classList.add('active');
    slide_1.style.zIndex = "2";
    slide_2.style.zIndex = "1";
    slide_3.style.zIndex = "1";
    slide_1.style.opacity = "1";
    slide_2.style.opacity = "0";
    slide_3.style.opacity = "0";
};
two.onclick = function () {
    one.classList.remove('active');
    three.classList.remove('active');
    two.classList.add('active');
    slide_1.style.zIndex = "1";
    slide_2.style.zIndex = "2";
    slide_3.style.zIndex = "1";
    slide_1.style.opacity = "0";
    slide_2.style.opacity = "1";
    slide_3.style.opacity = "0";
};

three.onclick = function () {
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.add('active');
    slide_1.style.zIndex = "1";
    slide_2.style.zIndex = "1";
    slide_3.style.zIndex = "2";
    slide_1.style.opacity = "0";
    slide_2.style.opacity = "0";
    slide_3.style.opacity = "1";
};

menu.addEventListener("change", function(){
    if (menu.checked) {
        nav.classList.add("show");
    } else {
        nav.classList.remove("show");
    }
});

