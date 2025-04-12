let buttons = document.querySelectorAll(".faq__buttons-but");
let ps = document.querySelectorAll(".button__p");
let pluses = document.querySelectorAll(".plus");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    ps[index].classList.toggle("active");
    pluses[index].classList.toggle("active");
  });
});
