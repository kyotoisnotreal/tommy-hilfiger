async function getBanner() {
    await fetch('/api/banner')
        .then(response => response.json())
        .then(data => {
            const aside = document.querySelector("aside");
            
        })
        .catch(error => console.error('Error fetching banner:', error));
};