// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const navActions = document.querySelector(".nav-actions");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    // Show mobile menu
    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column";
    navMenu.style.position = "absolute";
    navMenu.style.top = "100%";
    navMenu.style.left = "0";
    navMenu.style.right = "0";
    navMenu.style.backgroundColor = "#ffffff";
    navMenu.style.padding = "1rem";
    navMenu.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
    navMenu.style.gap = "1rem";

    navActions.style.display = "flex";
    navActions.style.flexDirection = "column";
    navActions.style.position = "absolute";
    navActions.style.top = "calc(100% + 200px)";
    navActions.style.left = "0";
    navActions.style.right = "0";
    navActions.style.backgroundColor = "#ffffff";
    navActions.style.padding = "1rem";
    navActions.style.gap = "0.5rem";
  } else {
    // Hide mobile menu
    navMenu.style.display = "";
    navActions.style.display = "";
  }
});

// Filter tabs functionality
const filterTabs = document.querySelectorAll(".filter-tab");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Restaurant card click animation
const restaurantCards = document.querySelectorAll(".restaurant-card");

restaurantCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Simulate navigation to restaurant detail page
    const restaurantName = card.querySelector("h3").textContent;
    console.log("Opening restaurant:", restaurantName);
  });
});

// Time slot selection
const timeSlots = document.querySelectorAll(".time-slot");

timeSlots.forEach((slot) => {
  slot.addEventListener("click", (e) => {
    e.stopPropagation();

    // Remove active class from siblings
    const siblings = slot.parentElement.querySelectorAll(".time-slot");
    siblings.forEach((s) => (s.style.backgroundColor = ""));
    siblings.forEach((s) => (s.style.color = ""));

    // Add active state
    slot.style.backgroundColor = "#ebebeb";
    slot.style.color = "#c0c0c0";

    console.log("Selected time:", slot.textContent);
  });
});

// Search functionality
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  if (searchTerm.trim()) {
    console.log("Searching for:", searchTerm);
    // Simulate search
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// Load more restaurants
const loadMoreBtn = document.querySelector(".load-more .btn-secondary");

loadMoreBtn.addEventListener("click", () => {
  console.log("Loading more restaurants...");
  // Simulate loading more content
  loadMoreBtn.textContent = "Loading...";

  setTimeout(() => {
    loadMoreBtn.textContent = "Load More Restaurants";
  }, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-container")) {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.style.display = "";
      navActions.style.display = "";
    }
  }
});

// Window resize handler
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Reset mobile menu on desktop
    if (window.innerWidth > 968) {
      hamburger.classList.remove("active");
      navMenu.style.display = "";
      navActions.style.display = "";
    }
  }, 250);
});
