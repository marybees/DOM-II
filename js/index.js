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

// 1.) mouseover

const navBar = document.querySelector("nav");

navBar.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.color = "red";
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// 2.) mouseleave

const introImage = document.querySelector(".intro img");

introImage.addEventListener("mouseleave", function () {
  introImage.style.transform = "scale (1)";
});

// 3.) mouseenter

introImage.addEventListener("mouseenter", function () {
  console.log("Your mouse is over the bus." + Date.now());
  introImage.style.transform = "scale (1.2)";
});

// 4.) load

window.addEventListener("load", (event) => {
  console.log("Page successfully loaded");
});

// 5.) onclick

const destinations = document.querySelectorAll(".destination");
console.log(destinations);

destinations.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.color = "gray";
  });
});

//keydown

// let photos = document.querySelectorAll("img");

// photos.addEventListener("keydown", (event) => {
//     if (event.keyCode === 13) {
//         return;
//     }
//     event.target.style.visibility = "hidden";
// });

//onwheel

// function zoom(event) {
//     event.preventDefault();
//     scale += event.deltaY * -0.01;
//     scale = Math.min(Math.max(.125, scale), 4);
//     introSection.style.transform = `scale(${scale})`;
// }
// let introSection = document.querySelector("intro");
// let scale = 1;
// introSection.onwheel = zoom;

//resize

// const imageHeight = document.querySelector('img');
// const imageWidth = document.querySelector('img');

// function reportWindowSize() {
//   imageHeight.textContent = window.innerHeight;
//   imageWidth.textContent = window.innerWidth;
// }

// window.addEventListener('resize', reportWindowSize);

//dblclick

// introduction.addEventListener('dblclick', function (e) {
//   introduction.classList.toggle('large');
// });

//drag and drop

// "text-msContent"
// "img-content"
