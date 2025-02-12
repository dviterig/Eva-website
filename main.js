/*******************
 * NAVBAR LOGIC
 *******************/
// Grab navbar element
const navbar = document.getElementById('navbar');

// Calculate 1vh in pixels initially
let oneVH = window.innerHeight / 100;

// Keep track of last scroll position
let lastScrollTop = 0;

// Recalculate 1vh on window resize
window.addEventListener('resize', () => {
  oneVH = window.innerHeight / 100;
});

// Listen to scroll
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // 1) Hide/Show navbar on scroll
  if (currentScroll > lastScrollTop) {
    // Scrolling down --> hide the navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up --> show the navbar
    navbar.style.transform = "translateY(0)";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
});

/*******************
 * FOOTER YEAR
 *******************/
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});