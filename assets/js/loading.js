document.addEventListener('DOMContentLoaded', function () {
    if (location.hash) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }

    const video = document.getElementById('loadingVideo');
    const container = document.querySelector('.container');
    const videoLoading = document.querySelector('.video-loading');
    const body = document.body;
    const bgVideo = document.getElementById('bgVideo');

    body.classList.add('loading');

    function playVideo(videoElement) {
        videoElement.play().catch(error => {
            document.addEventListener('click', () => {
                videoElement.play();
            }, { once: true });
        });
    }

    playVideo(video);

    video.onended = function () {
        videoLoading.classList.add('fade-out');
        container.classList.remove('hidden');
        container.classList.add('fade-in');
        
        playVideo(bgVideo);

        setTimeout(() => {
            body.classList.remove('loading');
        }, 1000);
    };

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});
