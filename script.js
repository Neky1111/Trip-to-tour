// ===== Hero Button Animation =====
const planButton = document.getElementById("plan-btn");
const heroImage = document.querySelector(".hero-illustration img");

planButton.addEventListener("mouseover", () => {
  heroImage.style.transform = "scale(1.05)";
});

planButton.addEventListener("mouseout", () => {
  heroImage.style.transform = "scale(1)";
});

planButton.addEventListener("click", () => {
  alert("Trip Planner Coming Soon!");
});

// ===== Destination Search Feature =====
const searchBtn = document.getElementById("search-btn");
const input = document.getElementById("destination-input");

searchBtn.addEventListener("click", () => {
  const destination = input.value.trim();
  if (destination) {
    alert(`Searching for trips to ${destination}...`);
  } else {
    alert("Please enter a destination to search!");
  }
});

// ===== Scroll Reveal Animation =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section .feature-card, .section .destination-card').forEach(el => observer.observe(el));
