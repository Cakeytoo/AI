fetch('https://924637b1-4ab3-4b45-8860-02352b7f28d0-00-8r45cfl342qf.sisko.replit.dev')
 .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = data;
    })
    .catch(err => console.error('Error:', err));
