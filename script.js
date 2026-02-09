// EXPERIENCE / EDUCATION TABS
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// PROJECT FILTERS (MULTI-SELECT)
const chips = document.querySelectorAll(".skill-chip");
const cards = document.querySelectorAll(".project-card");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");

    const active = [...chips]
      .filter(c => c.classList.contains("active"))
      .map(c => c.dataset.skill);

    cards.forEach(card => {
      const skills = card.dataset.skills.split(" ");
      const show = active.length === 0 || active.every(s => skills.includes(s));
      card.classList.toggle("hidden", !show);
    });
  });
});

// DARK MODE
if (localStorage.theme === "dark") document.body.classList.add("dark");
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
};
