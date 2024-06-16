document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('loadingVideo');
    const container = document.querySelector('.container');
    const videoLoading = document.querySelector('.video-loading');
    const body = document.body;

    // Adiciona a classe loading ao body para esconder o overflow
    body.classList.add('loading');

    video.onended = function () {
        videoLoading.classList.add('fade-out');
        container.classList.remove('hidden');
        container.classList.add('fade-in');

        // Remove a classe loading do body para mostrar o overflow
        setTimeout(() => {
            body.classList.remove('loading');
        }, 1000); // Ajuste este tempo para coincidir com a duração da animação
    };

    // Rola a página para o topo ao recarregar
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});

// Código para adicionar uma rolagem suave e moderna
document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});
