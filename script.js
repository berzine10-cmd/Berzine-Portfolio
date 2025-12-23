// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Show today's date for Air Pollution Tracker project
const airTime = document.getElementById("airTime");

if (airTime) {
  const today = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

    airTime.textContent = `Updated on ${today.toLocaleDateString("en-IN", options)}`;
  }