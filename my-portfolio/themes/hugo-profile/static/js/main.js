// Select all elements with the class 'card-text'
let notExpandeds = document.querySelectorAll(".not-expanded");

// Function to toggle between 'card-text' and 'expanded' classes
function toggleExpand() {
  if (this.classList.contains("not-expanded")) {
    this.classList.remove("not-expanded");
    this.classList.add("expanded");
  } else {
    this.classList.remove("expanded");
    this.classList.add("not-expanded");
  }
}

// Add click event listener to each card
notExpandeds.forEach(function (notExpanded) {
  notExpanded.addEventListener("click", toggleExpand);
});

window.addEventListener("resize", function () {
  let aboutMeText = document.getElementById("aboutContent");

  if (window.innerWidth < 992) {
    aboutMeText.classList.add("not-expanded");
    aboutMeText.addEventListener("click", toggleExpand);
  } else {
    aboutMeText.classList.remove("not-expanded");
  }
});
