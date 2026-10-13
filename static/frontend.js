const testFields = {
    banner : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftestsigma.com%2Fblog%2Fwp-content%2Fuploads%2FRandom-Testing-In-Software-Testing-An-Overview.png%3Fformat%3Dwebp%26w%3D3840%26q%3D75&f=1&nofb=1&ipt=b001100f5795f93a59dab4cacc96412fde2603083650f9edddda4cf7b9c117bd&ipo=images",
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

