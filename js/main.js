document.addEventListener("DOMContentLoaded", function(event) {
  const burger = document.querySelector(".navigation__burger");
  const menu = document.querySelector(".navigation__menu");

  burger.addEventListener("click", function() {
    this.classList.toggle("navigation__burger_active");
    menu.style.bottom == ""
      ? (menu.style.bottom = -menu.offsetHeight - 2 + "px")
      : (menu.style.bottom = "");
  });

  let categories = document.querySelectorAll(".categories");
  categories.forEach(category =>
    category.addEventListener("click", seclectCategories)
  );

  function seclectCategories(event) {
    if (event.target.tagName != "A") return;
    event.preventDefault();
    let selected = this.querySelectorAll(".categories-link_active");
    for (let elem of selected) {
      elem.classList.remove("categories-link_active");
    }
    event.target.classList.add("categories-link_active");
  }

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

  let modal = document.querySelector(".modal");
  let navigationButton = document.querySelector(".navigation__button");
  navigationButton.onclick = function() {
    modal.classList.add("modal_active");
  };
  modal.onclick = function(event) {
    if (
      event.target.classList.contains("modal__button") ||
      event.target.classList.contains("modal-overlay")
    ) {
      modal.classList.remove("modal_active");
    }
  };
});
