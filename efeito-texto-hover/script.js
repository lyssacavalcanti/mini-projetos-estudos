const menuButtons = document.querySelectorAll(".menu");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("menu--active");
  });
});
