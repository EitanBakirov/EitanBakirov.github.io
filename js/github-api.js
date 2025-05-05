export async function fetchRepoScreenshots(repoName) {
    try {
        // Get repository contents, specifically the Screenshots folder
        const response = await fetch(`https://api.github.com/repos/EitanBakirov/${repoName}/contents/Screenshots`);
        if (!response.ok) {
            throw new Error('Screenshots folder not found');
        }
        
        const contents = await response.json();
        
        // Filter for image files
        const imageFiles = contents.filter(file => 
            file.name.match(/\.(jpg|jpeg|png|gif)$/i)
        );
        
        // Get the raw URLs of the images
        return imageFiles.map(file => ({
            url: file.download_url,
            name: file.name
        }));
    } catch (error) {
        console.error(`Error fetching screenshots for ${repoName}:`, error);
        return [];
    }
}