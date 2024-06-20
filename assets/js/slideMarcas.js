const carouselContainer = document.getElementById('carouselContainer');

const carouselItems = carouselContainer.innerHTML;
carouselContainer.innerHTML += carouselItems;

let scrollLeft = 0;
const scrollSpeed = 2;

function animateCarousel(timestamp) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }

    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    scrollLeft += scrollSpeed * deltaTime / 40;
    if (scrollLeft >= carouselContainer.scrollWidth / 2) {
        scrollLeft = 0;
    }
    carouselContainer.style.transform = `translateX(-${scrollLeft}px)`;

    requestAnimationFrame(animateCarousel);
}

let lastTimestamp = null;
requestAnimationFrame(animateCarousel);
