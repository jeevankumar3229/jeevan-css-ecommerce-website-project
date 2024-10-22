const ham = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");
ham.addEventListener("click", function () {
  mobileMenu.style.display = "block";
});

close.addEventListener("click", function () {
  mobileMenu.style.display = "none";
});
