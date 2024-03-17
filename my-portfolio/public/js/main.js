// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before running the script.
document.addEventListener("DOMContentLoaded", () => {
  // Define a function to toggle the expansion state of an element.
  const toggleExpansion = element => {
    // Toggle the 'not-expanded' class on the element.
    element.classList.toggle("not-expanded");
    // Toggle the 'expanded' class on the element.
    element.classList.toggle("expanded");
  };

  // Define a function to initialize collapsible elements by attaching click event listeners to them.
  const initializeCollapsibleElements = () => {
    // Select all elements with the class 'not-expanded' and iterate over them.
    document.querySelectorAll(".not-expanded").forEach(element => {
      // Add a click event listener to each element that toggles its expansion state.
      element.addEventListener("click", () => toggleExpansion(element));
    });
  };

  // Define a function to adjust an element's state based on the window's width.
  const adjustElementOnResize = () => {
    // Select the element with the ID 'aboutContent'.
    const responsiveElement = document.getElementById("aboutContent");
    // Check if the selected element exists to avoid errors.
    if (responsiveElement) {
      // Determine whether the window's width is less than 992 pixels.
      const shouldCollapse = window.innerWidth < 992;

      // If the window is narrower than 992 pixels, adjust the element for a collapsed state.
      if (shouldCollapse) {
        // Add the 'not-expanded' class to make the element collapsible.
        responsiveElement.classList.add("not-expanded");
        // Clear any existing onclick handler to prevent duplicates.
        responsiveElement.onclick = null;
        // Add a click event listener to toggle the element's expansion state.
        responsiveElement.addEventListener("click", () => toggleExpansion(responsiveElement));
      } else {
        // If the window is wider than 992 pixels, remove classes to reset the element's state.
        responsiveElement.classList.remove("not-expanded", "expanded");
      }
    }
  };

  // Initialize collapsible elements and adjust the specific element immediately.
  initializeCollapsibleElements();
  adjustElementOnResize();
  // Attach an event listener to the window's resize event to adjust the element's state dynamically.
  window.addEventListener("resize", adjustElementOnResize);
});


// Add box shadow to colored badges

const addBoxBorder = (colors, className) => {
  const coloredBadges = document.querySelectorAll(className);
  console.log(coloredBadges.length);

  if (coloredBadges.length === 0) return;

  coloredBadges.forEach(badge => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    badge.style.border = `1px solid ${randomColor}`;
  });
};

addBoxBorder(
  // [
  //   "var(--neon-orange-color)",
  //   "var(--neon-green-color)",
  //   "var(--light-violet-color)",
  //   "var(--neon-blue-color)",
  //   "var(--neon-red-color)",
  //   "var(--light-green-color)",
  // ],
  ".colored-badge"
);