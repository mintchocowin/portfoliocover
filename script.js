//menu button

document.querySelector(".button").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelectorAll(".circle ul li:nth-child(1)")
  .forEach(function (click) {
    click.addEventListener("click", function () {
      document.querySelector("header").scrollIntoView({ behavior: "smooth" });
    });
  });

document
  .querySelectorAll(".circle ul li:nth-child(2)")
  .forEach(function (click) {
    click.addEventListener("click", function () {
      document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    });
  });

document
  .querySelectorAll(".circle ul li:nth-child(3)")
  .forEach(function (click) {
    click.addEventListener("click", function () {
      document.querySelector("section").scrollIntoView({ behavior: "smooth" });
    });
  });
document
  .querySelectorAll(".circle ul li:nth-child(4)")
  .forEach(function (click) {
    click.addEventListener("click", function () {
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
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

//time

const currentTime = () => {
  document.querySelector(".time").innerHTML = new Date().toLocaleTimeString();
};

const currentDay = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;
  document.querySelector(".day").innerHTML = `${dateString}`;
};

setInterval(currentTime, 1000);
setInterval(currentDay, 1000);
currentTime();
currentDay();

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
// skill json
// fetch("skills.json")
//   .then((response) => response.json())
//   .then((skills) => {
//     data = skills;
//   });

// buttons.forEach((button) => {
//   const text = document.querySelector(".skills-explanation");
// });
//
fetch("skills.json")
  .then((response) => response.json())
  .then((skills) => {
    // 각 버튼을 선택합니다.
    const buttons = document.querySelectorAll(".skills-button ul li");

    // 각 버튼에 클릭 이벤트 리스너를 추가합니다.
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // 클릭된 버튼의 텍스트를 가져옵니다.
        const skillText = this.textContent.trim().toLowerCase();

        // JSON 데이터에서 해당하는 스킬의 설명을 가져옵니다.
        const skillDescription = skills.find(
          (skill) => skill.description.toLowerCase() === skillText
        )?.description;

        // 설명을 출력합니다.
        document.getElementById("skill-description").textContent =
          skillDescription;
      });
    });
  })
  .catch((error) => console.error("Error fetching skills data:", error));
//email
const emailAddress = "sliuy59@gmail.com";

document
  .querySelector(".fa-paper-plane")
  .addEventListener("click", function () {
    window.location.href = "mailto:" + emailAddress;
  });
