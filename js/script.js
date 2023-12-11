// Scroll
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onload = scrollToTop;
window.addEventListener("beforeunload", scrollToTop);

// Burger
let menuBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// Date
function updateDate() {
  const currentDateElement = document.getElementById("currentDate");
  const currentDate = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("uk-UA", options);

  currentDateElement.textContent = formattedDate;
}

updateDate();

setInterval(updateDate, 24 * 60 * 60 * 1000);

// Slider

let slideIndex = 1;
slideContent(slideIndex);

function plusSlides(n, event) {
  event.preventDefault();
  slideContent((slideIndex += n));
  updateStrip();
}

function currentSlide(n, event) {
  event.preventDefault();
  slideContent((slideIndex = n));
  updateStrip();
}

function slideContent(n) {
  let i;
  let slides = document.getElementsByClassName("slider-items");
  let strips = document.getElementsByClassName("strip");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < strips.length; i++) {
    strips[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  strips[slideIndex - 1].classList.add("active");
}

function updateStrip() {
  let strips = document.getElementsByClassName("strip");
  for (let i = 0; i < strips.length; i++) {
    strips[i].classList.remove("active");
  }
  strips[slideIndex - 1].classList.add("active");
}
