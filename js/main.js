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
  videoSlider.counter = 0;

  videoSliderNext.addEventListener("click", showNextSlide.bind(videoSlider));
  videoSliderPrev.addEventListener("click", showPrevSlide.bind(videoSlider));

  let partnersSlider = document.querySelector(".partners__slider-wrap");
  let partnersSliderNext = document.querySelector(".partners .slider-next");
  let partnersSliderPrev = document.querySelector(".partners .slider-prev");
  partnersSlider.counter = 0;
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
    this.counter--;
    if (this.counter <= 0) {
      this.counter = 0;
    }
    this.style.transform = `translateX(-${width * this.counter}px)`;
  }

  function showNextSlide() {
    let styles = getComputedStyle(this.firstElementChild);
    let width = parseFloat(styles.width) + parseFloat(styles.marginLeft) * 2;
    let slides = Math.trunc((width * 100) / this.offsetWidth);
    switch (slides) {
      case 25:
        slides = 4;
        break;
      case 33:
        slides = 3;
        break;
      case 50:
        slides = 2;
        break;
      case 100:
        slides = 1;
        break;
    }
    this.counter++;
    if (this.counter > this.children.length - slides) {
      this.counter = this.children.length - slides;
    }
    this.style.transform = `translateX(-${width * this.counter}px)`;
  }
});
