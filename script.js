//menu button

document.querySelector(".button").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelector("nav a:nth-child(1)")
  .addEventListener("click", function () {
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector("nav a:nth-child(2)")
  .addEventListener("click", function () {
    document.querySelector("main").scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector("nav a:nth-child(3)")
  .addEventListener("click", function () {
    document.querySelector("section").scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector("nav a:nth-child(4)")
  .addEventListener("click", function () {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  });

//topbutton
const topbutton = document.querySelector(".topbutton");

topbutton.addEventListener("click", function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//topbutton hide

window.addEventListener("scroll", function buttonshow() {
  if (window.scrollY > 0) {
    topbutton.classList.add("show");
  } else {
    topbutton.classList.remove("show");
  }
});

//explanation
const buttons = document.querySelectorAll(".skills-button ul li");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});

//email
const emailAddress = "sliuy59@gmail.com";

document
  .querySelector(".fa-paper-plane")
  .addEventListener("click", function () {
    window.location.href = "mailto:" + emailAddress;
  });
