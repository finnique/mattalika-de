document.getElementById("year").textContent = new Date().getFullYear();

// Renders the achievements timeline from achievements-data.js (ACHIEVEMENTS
// array). Only runs on pages that have both the data file loaded and a
// #timeline container (i.e. index.html) -- safe to include everywhere.
(function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container || typeof ACHIEVEMENTS === "undefined") return;

  // Turns a blank line in the source text into a paragraph break, and
  // collapses ordinary line wrapping (single newlines) back into spaces.
  function formatText(text) {
    return text
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .map((p) => `<p>${p}</p>`)
      .join("");
  }

  container.innerHTML = ACHIEVEMENTS.map((item) => `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true">${item.icon}</div>
      <div class="timeline-content">
        ${item.showPhoto === false ? "" : `
        <div class="timeline-photo-wrap">
          <div class="timeline-photo" aria-hidden="true">
            <img src="${item.photo}" alt=""
                 onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
                 onerror="this.remove();">
            <span>${item.icon}</span>
          </div>
          ${item.photoCaption ? `<p class="timeline-photo-caption">${item.photoCaption}</p>` : ""}
        </div>`}
        <div class="timeline-text">
          <h3>${item.title}</h3>
          <p class="meta">${item.meta}</p>
          ${formatText(item.text)}
        </div>
      </div>
    </article>
  `).join("");
})();
