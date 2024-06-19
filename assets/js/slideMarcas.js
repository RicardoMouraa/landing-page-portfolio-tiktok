document.addEventListener('DOMContentLoaded', function() {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelector('.slides');
    const clone = slides.cloneNode(true);
    slidesWrapper.appendChild(clone);

    slidesWrapper.addEventListener('mouseenter', () => {
        slidesWrapper.style.animationPlayState = 'paused';
    });

    slidesWrapper.addEventListener('mouseleave', () => {
        slidesWrapper.style.animationPlayState = 'running';
    });
});
