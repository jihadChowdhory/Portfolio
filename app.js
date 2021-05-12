// Slide changing functionality
const handleNextCount = () => {
  let count = document.getElementById("count");
  if (parseFloat(count.innerText) < 3) {
    count.innerText = parseFloat(count.innerText) + 1;
    changeProject(count.innerText);
  }
};
const handlePreviousCount = () => {
  let count = document.getElementById("count");
  if (parseFloat(count.innerText) > 1) {
    count.innerText = parseFloat(count.innerText) - 1;
    changeProject(count.innerText);
  }
};

const changeProject = (count) => {
  if (count === "2") {
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "flex";
    document.getElementById("project-3").style.display = "none";
  } else if (count === "3") {
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "flex";
  } else {
    document.getElementById("project-1").style.display = "flex";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
  }
};

// Responsive navigation bar functionality
let isDisplaying = false;
const dropDownMenu = () => {
  isDisplaying = !isDisplaying;
  if (isDisplaying) {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("cross").style.display = "block";
    document.getElementById("side-nav").style.display = "flex";
  } else {
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("cross").style.display = "none";
    document.getElementById("side-nav").style.display = "none";
  }
};
