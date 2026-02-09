const chips = document.querySelectorAll(".skill-chip");
const cards = document.querySelectorAll(".project-card");
const toggle = document.getElementById("themeToggle");

// MULTI-SELECT FILTERS
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");

    const activeSkills = [...chips]
      .filter(c => c.classList.contains("active"))
      .map(c => c.dataset.skill);

    cards.forEach(card => {
      const cardSkills = card.dataset.skills.split(" ");
      const matches =
        activeSkills.length === 0 ||
        activeSkills.every(skill => cardSkills.includes(skill));

      card.classList.toggle("hidden", !matches);
    });
  });
});

// SCROLL-IN ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// DARK MODE
if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.theme =
    document.body.classList.contains("dark") ? "dark" : "light";
});
