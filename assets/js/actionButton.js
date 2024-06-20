document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');
    const loadingVideo = document.getElementById('loadingVideo');

    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    document.addEventListener('scroll', toggleButtons);

    loadingVideo.addEventListener('ended', function () {
        document.body.classList.remove('loading');
        document.querySelector('.container').classList.add('visible');
        document.addEventListener('scroll', toggleButtons);
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
