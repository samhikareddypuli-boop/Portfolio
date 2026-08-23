/**
 * Samhika Reddy Puli - Portfolio Routing & Interactivity Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // Select views and navigation links
  const sections = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll(".nav-link-item");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksList = document.querySelector(".nav-links");

  // Mobile Menu Toggle
  if (menuToggle && navLinksList) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinksList.classList.toggle("active");
    });

    // Close menu when clicking on links
    navLinksList.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinksList.classList.remove("active");
      });
    });
  }

  // Navigation Router Function
  function router() {
    // Get current hash, default to '#home'
    let hash = window.location.hash || "#home";
    
    // Deactivate all links and sections
    navLinks.forEach(link => link.classList.remove("active"));
    sections.forEach(sec => sec.classList.add("hidden-section"));

    // Find section to show
    let targetSection = document.querySelector(hash);
    
    // Fallback if hash doesn't exist
    if (!targetSection) {
      hash = "#home";
      targetSection = document.getElementById("home");
    }

    // Show target section
    targetSection.classList.remove("hidden-section");

    // Highlight corresponding navbar link
    let navHash = hash;
    // If we're inside a project case study, highlight the 'Projects' nav link
    if (hash.startsWith("#project-")) {
      navHash = "#home"; // Highlight 'Work' / 'Projects' link
    }
    
    const activeLink = document.querySelector(`.nav-link-item[href="${navHash}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // Scroll smoothly to top
    window.scrollTo({
      top: 0,
      behavior: "instant" // Use instant to mimic loading a new page
    });
  }

  // Bind hash change event
  window.addEventListener("hashchange", router);

  // Initial routing
  router();
});
