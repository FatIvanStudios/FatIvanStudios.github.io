
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
            viewersElement.innerText = 'Error fetching viewer countxcvbcvbcvbfdxhfcghgccvhxcvhxvch';
        });

    const btn = document.getElementById('ok-btn');
    function change() {
        btn.innerText = "sorry but i'm too lazy to make the button working"
        btn.style.height = '190px'
        btn.style.width = '90px'
    }
// why do you work on live preview but not on github