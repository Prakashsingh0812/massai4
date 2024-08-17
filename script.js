async function fetchData(start, limit) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await response.json();
    return data;
}
const gallery = document.getElementById('gallery');
let start = 0;
const limit = 10;

async function loadImages() {
    const images = await fetchData(start, limit);
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.thumbnailUrl;
        imgElement.alt = image.title;
        gallery.appendChild(imgElement);
    });
    start += limit;
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadImages();
    }
});

loadImages(); // Initial load
