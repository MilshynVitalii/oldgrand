document.addEventListener("DOMContentLoaded", function(event) {
  const burger = document.querySelector(".navigation__burger");
  const menu = document.querySelector(".navigation__menu");

  burger.addEventListener("click", function() {
    this.classList.toggle("navigation__burger_active");
    menu.style.bottom == ""
      ? (menu.style.bottom = -menu.offsetHeight - 2 + "px")
      : (menu.style.bottom = "");
  });
});
