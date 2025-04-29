import {
  bio,
  skills,
  education,
  experience,
} from "./user-data/data.js";

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = document.createElement("p");
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateExpEdu(items, id) {
  const container = document.getElementById(id);

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-entry animate-box";

    const inner = document.createElement("div");
    inner.className = "timeline-entry-inner";

    const icon = document.createElement("div");
    icon.className = "timeline-icon color-2";
    const i = document.createElement("i");
    i.className = `fa fa-${item.icon}`;
    icon.append(i);

    const label = document.createElement("div");
    label.className = "timeline-label";

    const title = document.createElement("h2");
    title.innerHTML = `${item.title} <span>${item.duration}</span>`;
    label.append(title);

    const subtitle = document.createElement("span");
    subtitle.className = "timeline-sublabel";
    subtitle.innerHTML = item.subtitle;
    label.append(subtitle);

    item.details.forEach((detail) => {
      const p = document.createElement("p");
      p.className = "timeline-text";
      p.innerHTML = `&blacksquare; ${detail}`;
      label.append(p);
    });

    const tagsDiv = document.createElement("div");
    item.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "badge";
      span.innerHTML = tag;
      tagsDiv.append(span);
    });
    label.append(tagsDiv);

    inner.append(icon);
    inner.append(label);
    article.append(inner);
    container.append(article);
  });

  // Add final circle
  const endArticle = document.createElement("article");
  endArticle.className = "timeline-entry begin animate-box";
  const endInner = document.createElement("div");
  endInner.className = "timeline-entry-inner";
  const endIcon = document.createElement("div");
  endIcon.className = "timeline-icon color-none";
  endInner.append(endIcon);
  endArticle.append(endInner);
  container.append(endArticle);
}

function populateSkills() {
    const skillsContainer = document.getElementById('skills');
    
    skills.forEach(category => {
        // Create a full-width row for each category
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row animate-box';
        rowDiv.setAttribute('data-animate-effect', 'fadeInLeft');
        
        // Create the skill div that takes full width
        const skillDiv = document.createElement('div');
        skillDiv.className = 'col-md-12';
        
        skillDiv.innerHTML = `
            <div class="progress-wrap">
                <b>${category.category}:</b> ${category.items.join(', ')}
            </div>
        `;
        
        rowDiv.appendChild(skillDiv);
        skillsContainer.appendChild(rowDiv);
    });
}

// Run all population functions
populateBio(bio, "bio");
populateExpEdu(experience, "experience");
populateExpEdu(education, "education");

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  populateSkills();
});
