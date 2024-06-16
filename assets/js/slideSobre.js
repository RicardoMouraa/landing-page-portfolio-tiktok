document.addEventListener('DOMContentLoaded', function () {
    const headlineScroll = document.getElementById('headline-scroll');
    const clone = headlineScroll.cloneNode(true);
    headlineScroll.parentNode.appendChild(clone);

    const scrollWidth = headlineScroll.scrollWidth;
    headlineScroll.style.width = `${scrollWidth}px`;
    clone.style.width = `${scrollWidth}px`;
});

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}`;
document.head.appendChild(styleSheet);
