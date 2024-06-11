
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
  document.querySelector(".time").innerHTML = new Date().toLocaleTimeString(
undefined,
    { hour: "2-digit", minute: "2-digit", hour12:true }
  );
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

//drag and drop

const draggableElements = document.querySelectorAll(".draggable");

draggableElements.forEach(function (windows) {
  windows.addEventListener("mousedown", function (event) {
    let startX = event.clientX;
    let startY = event.clientY;

    function onMouseMove(event) {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      windows.style.left = windows.offsetLeft + deltaX + "px";
      windows.style.top = windows.offsetTop + deltaY + "px";
      startX = event.clientX;
      startY = event.clientY;
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", onMouseMove);
    });
  });
});



//menu button

document.querySelector(".button").addEventListener("click", function () {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelectorAll(".circle ul li:nth-child(1)")
  .forEach(function (buttons) {
    buttons.addEventListener("click", function () {
      document.querySelector("header").scrollIntoView({ behavior: "smooth" });
    });
  });

document
  .querySelectorAll(".circle ul li:nth-child(2)")
  .forEach(function (buttons) {
    buttons.addEventListener("click", function () {
      document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    });
  });

document
  .querySelectorAll(".circle ul li:nth-child(3)")
  .forEach(function (buttons) {
    buttons.addEventListener("click", function () {
      document.querySelector("section").scrollIntoView({ behavior: "smooth" });
    });
  });
document
  .querySelectorAll(".circle ul li:nth-child(4)")
  .forEach(function (buttons) {
    buttons.addEventListener("click", function () {
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
  });
  

// skill json

document.addEventListener("DOMContentLoaded", function () {
  const skillsButton = document.querySelector(".skills-button > ul");
  const skillsExplanation = document.querySelector(".skills-explanation");

  fetch("skills.json")
    .then((response) => response.json())
    .then((data) => {
      skillsButton.addEventListener("click", function (event) {
        const target = event.target.closest("li");
        if (!target) return;

        const skill = target.dataset.skill;
        const skillInfo = data[skill];

        skillsExplanation.textContent = skillInfo.description;

        const active = document.querySelector(
          ".skills-button > ul > li.active"
        );
        if (active) active.classList.remove("active");
        target.classList.add("active");
      });

      const firstSkill = skillsButton.querySelector("li");
      firstSkill.click();
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});

//modal new
document.addEventListener("DOMContentLoaded", function () {
  const modalTitle = document.querySelector(".modal-title p");
  const projectSkills = document.querySelector(".project-skills");
  const projectExplanation = document.querySelector(".project-explanation");
  const websiteLink = document.querySelector(".website a");
  const websiteImage = document.querySelector(".website img");

  const jsonFileName = "modal-contents.json"; 

  document.querySelectorAll(".box").forEach(function (box, index) {
    box.addEventListener("click", function () {
      fetch(jsonFileName)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const boxData = data[`box${index + 1}`];
          modalTitle.textContent = boxData.title;
          projectSkills.innerHTML = boxData.skills
            .map((skill) => `<span>${skill}</span>`)
            .join("");
          projectExplanation.textContent = boxData.explanation;
          websiteLink.href = boxData.website.url;
          websiteImage.src = boxData.website.image;
          document.querySelector(".modal").style.display = "block";
        })
        .catch((error) => console.error("Error fetching JSON:", error));
    });
  });

  // modal close
  const modal = document.querySelector(".modal");
  document.querySelector("#xmark").addEventListener("click", function () {
    modal.style.display = "none";
  });

  document.querySelector(".section").addEventListener("click", function () {
    modal.style.display = "none";
  });
});

//email
const emailAddress = "sliuy59@gmail.com";

document
  .querySelector(".fa-paper-plane")
  .addEventListener("click", function () {
    window.location.href = "mailto:" + emailAddress;
  });
