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

  let youtubeSlider = document.querySelector(".reviews__slider");
  let youtubeSliderScroll = "0%";
  youtubeSlider.addEventListener("click", function(event) {
    if (event.target.tagName != "BUTTON") return;
    if (event.target.classList.contains("reviews__slider-next")) {
      youtubeSliderScroll =
        parseFloat(youtubeSliderScroll) > 90
          ? "99.99%"
          : parseFloat(youtubeSliderScroll) + 33.33 + "%";
      this.firstElementChild.style.transform = `translateX(-${youtubeSliderScroll})`;
    }
    if (event.target.classList.contains("reviews__slider-prev")) {
      youtubeSliderScroll =
        parseFloat(youtubeSliderScroll) <= 0
          ? "0%"
          : parseFloat(youtubeSliderScroll) - 33.33 + "%";
      this.firstElementChild.style.transform = `translateX(-${youtubeSliderScroll})`;
    }
  });
});
