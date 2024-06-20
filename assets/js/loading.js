document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('loadingVideo');
    const container = document.querySelector('.container');
    const videoLoading = document.querySelector('.video-loading');
    const body = document.body;

    body.classList.add('loading');

    video.onended = function () {
        videoLoading.classList.add('fade-out');
        container.classList.remove('hidden');
        container.classList.add('fade-in');

        setTimeout(() => {
            body.classList.remove('loading');
        }, 1000); 
    };

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
        location.hash = "#inicio";
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});
