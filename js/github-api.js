export async function fetchRepoScreenshots(repoName) {
    if (!repoName) {
        return [{
            url: './images/projects/default-thumb.png',
            name: 'default-thumb'
        }];
    }

    try {
        // Instead of fetching from GitHub, use local images
        const imageUrls = [];
        
        // Try to load local images (you'll need to add these manually)
        for (let i = 1; i <= 5; i++) {
            const imagePath = `./images/projects/${repoName}/screenshot${i}.png`;
            
            // Add image if it exists
            imageUrls.push({
                url: imagePath,
                name: `screenshot${i}`
            });
        }

        // If no images found, return default
        if (imageUrls.length === 0) {
            return [{
                url: './images/projects/default-thumb.png',
                name: 'default-thumb'
            }];
        }

        return imageUrls;
    } catch (error) {
        console.error(`Error loading screenshots for ${repoName}:`, error);
        return [{
            url: './images/projects/default-thumb.png',
            name: 'default-thumb'
        }];
    }
}