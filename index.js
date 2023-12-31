const switcher = document.querySelector(".switcher");

switcher.addEventListener("click", () => {
  switcher.classList.toggle("switcher_on");
  document.body.classList.toggle("dark");
});
