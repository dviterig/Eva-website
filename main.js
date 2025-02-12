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
 * SIDEBAR LOGIC
 *******************/
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('#sidebar a');
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerBtn = hamburgerButton.querySelector('button');

// Toggle sidebar on hamburger button click
hamburgerBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  sidebar.classList.toggle('open');
});

// Hide the sidebar when a link inside it is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Close sidebar if clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !hamburgerButton.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

// Prevent sidebar clicks from closing it
sidebar.addEventListener('click', (event) => {
  event.stopPropagation();
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