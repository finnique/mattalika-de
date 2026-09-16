document.getElementById("year").textContent = new Date().getFullYear();

// Renders the achievements timeline from achievements-data.js (ACHIEVEMENTS
// array). Only runs on pages that have both the data file loaded and a
// #timeline container (i.e. index.html) -- safe to include everywhere.
(function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container || typeof ACHIEVEMENTS === "undefined") return;

  container.innerHTML = ACHIEVEMENTS.map((item) => `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true">${item.icon}</div>
      <div class="timeline-content">
        <div class="timeline-photo" aria-hidden="true">
          <img src="${item.photo}" alt="" loading="lazy"
               onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
               onerror="this.remove();">
          <span>${item.icon}</span>
        </div>
        <div class="timeline-text">
          <h3>${item.title}</h3>
          <p class="meta">${item.meta}</p>
          <p>${item.text}</p>
        </div>
      </div>
    </article>
  `).join("");
})();
