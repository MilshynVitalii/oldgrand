document.addEventListener("DOMContentLoaded", function(event) {
  const burger = document.querySelector(".navigation__burger");
  const menu = document.querySelector(".navigation__menu");

  burger.addEventListener("click", function() {
    this.classList.toggle("navigation__burger_active");
    menu.style.bottom == ""
      ? (menu.style.bottom = -menu.offsetHeight - 2 + "px")
      : (menu.style.bottom = "");
  });

  let reviewsCategories = document.querySelector(".reviews__categories");
  reviewsCategories.addEventListener("click", function(event) {
    if (event.target.tagName != "A") return;
    event.preventDefault();
    let selected = this.querySelectorAll(".reviews__categories-link_active");
    for (let elem of selected) {
      elem.classList.remove("reviews__categories-link_active");
    }
    event.target.classList.add("reviews__categories-link_active");
  });

  let videoSlider = document.querySelector(".reviews__slider-business");
  let videoSliderNext = document.querySelector(".reviews .slider-next");
  let videoSliderPrev = document.querySelector(".reviews .slider-prev");
  let counter = 0;

  videoSliderNext.addEventListener("click", showNextSlide.bind(videoSlider));
  videoSliderPrev.addEventListener("click", showPrevSlide.bind(videoSlider));

  let partnersSlider = document.querySelector(".partners__slider-wrap");
  let partnersSliderNext = document.querySelector(".partners .slider-next");
  let partnersSliderPrev = document.querySelector(".partners .slider-prev");
  partnersSliderNext.addEventListener(
    "click",
    showNextSlide.bind(partnersSlider)
  );
  partnersSliderPrev.addEventListener(
    "click",
    showPrevSlide.bind(partnersSlider)
  );

  function showPrevSlide() {
    let styles = getComputedStyle(this.firstElementChild);
    let width = parseFloat(styles.width) + parseFloat(styles.marginLeft) * 2;
    counter--;
    if (counter <= 0) {
      counter = 0;
    }
    this.style.transform = `translateX(-${width * counter}px)`;
  }

  function showNextSlide() {
    let windowWidth = document.documentElement.clientWidth;
    let styles = getComputedStyle(this.firstElementChild);
    let width = parseFloat(styles.width) + parseFloat(styles.marginLeft) * 2;
    let slides = 3;
    if (windowWidth > 560 && windowWidth < 800) {
      slides = 2;
    } else if (windowWidth < 560) {
      slides = 1;
    }
    counter++;
    if (counter > this.children.length - slides) {
      counter = this.children.length - slides;
    }
    this.style.transform = `translateX(-${width * counter}px)`;
  }
});
