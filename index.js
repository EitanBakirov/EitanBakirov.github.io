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
        // Create a row for each category
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row animate-box';
        rowDiv.setAttribute('data-animate-effect', 'fadeInLeft');
        
        // Create the skill div
        const skillDiv = document.createElement('div');
        skillDiv.className = 'col-md-12';
        
        // Create paragraph element
        const p = document.createElement('p');
        p.innerHTML = `<b>${category.category}:</b> ${category.items.join(', ')}`;
        
        skillDiv.appendChild(p);
        rowDiv.appendChild(skillDiv);
        skillsContainer.appendChild(rowDiv);
    });
}

async function populateRepos() {
    const reposContainer = document.getElementById('repos');
    try {
        // GraphQL query to fetch pinned repositories
        const query = `
        {
            user(login: "EitanBakirov") {
                pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                        ... on Repository {
                            name
                            description
                            url
                            primaryLanguage {
                                name
                            }
                            stargazerCount
                        }
                    }
                }
            }
        }`;

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Using no token - works for public data with rate limits
            },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        
        // Check if we got pinned repos
        if (data.data && data.data.user && data.data.user.pinnedItems) {
            const pinnedRepos = data.data.user.pinnedItems.nodes;
            
            if (pinnedRepos.length === 0) {
                // Fallback to REST API if no pinned repos
                await fetchRegularRepos();
                return;
            }
            
            pinnedRepos.forEach(repo => {
                const li = document.createElement('li');
                li.className = 'animate-box';
                li.innerHTML = `
                    <div class="repo-card">
                        <h3 class="repo-heading">${repo.name}</h3>
                        <p class="repo-description">${repo.description || 'No description available'}</p>
                        <p class="repo-language">Main language: ${repo.primaryLanguage ? repo.primaryLanguage.name : 'Not specified'}</p>
                        <p class="repo-stars">⭐ ${repo.stargazerCount} stars</p>
                        <a href="${repo.url}" target="_blank" class="repo-link">View Repository</a>
                    </div>
                `;
                reposContainer.appendChild(li);
            });
        } else {
            // Fallback to REST API
            await fetchRegularRepos();
        }
    } catch (error) {
        console.error("Error fetching pinned repositories:", error);
        // Fallback to regular repos
        await fetchRegularRepos();
    }
}

// Helper function for fetching regular repos as fallback
async function fetchRegularRepos() {
    const reposContainer = document.getElementById('repos');
    try {
        const response = await fetch(`https://api.github.com/users/EitanBakirov/repos?sort=updated&direction=desc&per_page=6`);
        const repos = await response.json();
        
        reposContainer.innerHTML = ''; // Clear previous content
        
        repos.forEach(repo => {
            const li = document.createElement('li');
            li.className = 'animate-box';
            li.innerHTML = `
                <div class="repo-card">
                    <h3 class="repo-heading">${repo.name}</h3>
                    <p class="repo-description">${repo.description || 'No description available'}</p>
                    <p class="repo-language">Main language: ${repo.language || 'Not specified'}</p>
                    <p class="repo-stars">⭐ ${repo.stargazers_count} stars</p>
                    <a href="${repo.html_url}" target="_blank" class="repo-link">View Repository</a>
                </div>
            `;
            reposContainer.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching repositories:", error);
        reposContainer.innerHTML = `<p>Failed to load repositories. Please check my <a href="https://github.com/EitanBakirov" target="_blank">GitHub profile</a> directly.</p>`;
    }
}

// Run all population functions
populateBio(bio, "bio");
populateExpEdu(experience, "experience");
populateExpEdu(education, "education");

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  populateSkills();
  populateRepos();
});
