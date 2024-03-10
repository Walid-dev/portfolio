document.addEventListener("DOMContentLoaded", () => {
  const toggleExpansion = element => {
    element.classList.toggle("not-expanded");
    element.classList.toggle("expanded");
  };

  const initializeCollapsibleElements = () => {
    document.querySelectorAll(".not-expanded").forEach(element => {
      element.addEventListener("click", () => toggleExpansion(element));
    });
  };

  const adjustElementOnResize = () => {
    const responsiveElement = document.getElementById("aboutContent");
    const shouldCollapse = window.innerWidth < 992;

    if (shouldCollapse) {
      responsiveElement.classList.add("not-expanded");
      responsiveElement.onclick = null; // Prevent adding multiple listeners
      responsiveElement.addEventListener("click", () => toggleExpansion(responsiveElement));
    } else {
      responsiveElement.classList.remove("not-expanded", "expanded");
    }
  };

  // Initialize and adjust elements right away and on resize
  initializeCollapsibleElements();
  adjustElementOnResize();
  window.addEventListener("resize", adjustElementOnResize);
});
