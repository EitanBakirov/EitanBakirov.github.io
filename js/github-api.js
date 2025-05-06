export async function fetchRepoScreenshots(repoName) {
    if (!repoName) {
        return [{
            url: './images/projects/default-thumb.png',
            name: 'default-thumb',
            isThumb: true
        }];
    }

    try {
        const imageUrls = [];
        
        // First check for thumbnail/cover image
        const thumbnailPaths = [
            `./images/projects/${repoName}/thumbnail.png`,
            `./images/projects/${repoName}/cover.png`
        ];

        // Add thumbnail if it exists
        imageUrls.push({
            url: thumbnailPaths[0], // Use first thumbnail path
            name: 'thumbnail',
            isThumb: true
        });
        
        // Then add other screenshots
        for (let i = 1; i <= 5; i++) {
            const imagePath = `./images/projects/${repoName}/screenshot${i}.png`;
            imageUrls.push({
                url: imagePath,
                name: `screenshot${i}`,
                isThumb: false
            });
        }

        // If no images found, return default
        if (imageUrls.length === 0) {
            return [{
                url: './images/projects/default-thumb.png',
                name: 'default-thumb',
                isThumb: true
            }];
        }

        return imageUrls;
    } catch (error) {
        console.error(`Error loading screenshots for ${repoName}:`, error);
        return [{
            url: './images/projects/default-thumb.png',
            name: 'default-thumb',
            isThumb: true
        }];
    }
}