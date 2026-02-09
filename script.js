document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Toggle
  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  });

  // 2. Project Filtering
  const chips = document.querySelectorAll(".chip");
  const projects = document.querySelectorAll(".project-card");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      // Update active chip
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.getAttribute("data-filter");

      projects.forEach(project => {
        const categories = project.getAttribute("data-category");
        if (filter === "all" || categories.includes(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // 3. Modal Logic
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("contactBtn");
  const span = document.querySelector(".close");

  btn.onclick = (e) => { e.preventDefault(); modal.style.display = "block"; }
  span.onclick = () => modal.style.display = "none";
  window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
});