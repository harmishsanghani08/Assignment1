async function fetchGooglePage() {
    const fetch = (await import('node-fetch')).default;

    await fetch('https://www.google.com')
        .then((data) => { console.log(data); })
        .catch((err) => { console.error('Error:', err.message); });
}

fetchGooglePage();