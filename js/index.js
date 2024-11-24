document.addEventListener("DOMContentLoaded", function() {
    const viewersElement = document.getElementById("github-website-viewers");

    const githubApiUrl = 'https://api.github.com/repos/fativanstudios/fativanstudios.github.io';

    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            const viewerCount = data.watchers_count;
            viewersElement.innerText = `Viewers: ${viewerCount}`;
        })
        .catch(error => {
            console.error('Error fetching GitHub viewers:', error);
            viewersElement.innerText = 'Error fetching viewer count';
        });
});
