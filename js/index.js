// 1.) mouseover

const navBar = document.querySelector("nav");

navBar.addEventListener("mouseover",(event) => {
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
    introImage.style.height = "250px";
});

// 3.) mouseenter

introImage.addEventListener("mouseenter", function () {
  console.log("Your mouse is over the bus.");
  introImage.style.height = "300px";
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

// 6.) dblclick
const headers = document.querySelectorAll("h2");

const headersArray = Array.from(headers);

headersArray.forEach((element) => {
    element.addEventListener("dblclick", () => {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    });
});

// 7.) keydown

const logo = document.querySelector(".logo-heading");

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { //enter
        logo.style.color = "red";
    }
});

// 8.) keyup

document.addEventListener("keyup", (event) => {
    if (event.keyCode === 8) { //backspace
        logo.style.color = "black";
    }
});

// 9.) wheel

const signUpButton = document.querySelector(".btn")

signUpButton.addEventListener("wheel", () => {
    signUpButton.style.opacity = ".5";
});

// 10.) resize

window.addEventListener("resize", () => {
    introImage.src = "https://images.unsplash.com/photo-1596021758839-70c4be7dd98b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
});