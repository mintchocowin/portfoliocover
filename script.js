//email
const emailAddress = "sliuy59@gmail.com";

document
  .getElementById("email-contact")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "mailto:" + emailAddress;
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
