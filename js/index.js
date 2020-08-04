// Your code goes here
// mouseover
// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop

let navBar = document.querySelector("nav");

navBar.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);
