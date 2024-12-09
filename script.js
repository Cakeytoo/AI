fetch('https://your-project.replit.app/')
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = data;
    })
    .catch(err => console.error('Error:', err));
