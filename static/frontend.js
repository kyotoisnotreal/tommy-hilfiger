const testFields = {
    banner : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.kendam.com%2Fphotos%2Ffull%2F34a1092a82baaecd0750772433849ff1_3215.jpg&f=1&nofb=1&ipt=8a9a8783ccf0c9f45c994a605593de000d6b4ef3208e8fdc5311ea519a44b869&ipo=images",
    image1 : "",
    image2 : "",
    image3 : "",
};

/* async function getBanner() {
    await fetch('/api/banner')
        .then(response => response.json())
        .then(data => {
            const aside = document.querySelector("aside");
            
        })
        .catch(error => console.error('Error fetching banner:', error));
}; */

(function() {
    const bg = document.querySelector(".background img");
    bg.src = testFields.banner;
    bg.alt = "Advertisement Banner";
})();
