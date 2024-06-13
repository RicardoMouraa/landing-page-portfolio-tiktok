document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('loadingVideo');
    const container = document.querySelector('.container');
    const videoLoading = document.querySelector('.video-loading');

    video.onended = function () {
        videoLoading.classList.add('fade-out');
        container.classList.remove('hidden');
        container.classList.add('fade-in');
    };
});
