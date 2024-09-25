document.addEventListener('DOMContentLoaded', function () {
    // Clona o elemento com o ID 'headline-scroll' para criar um efeito de rolagem contínua
    const headlineScroll = document.getElementById('headline-scroll');
    const clone = headlineScroll.cloneNode(true);
    headlineScroll.parentNode.appendChild(clone);

    // Define a largura dos elementos com base na largura do conteúdo
    const scrollWidth = headlineScroll.scrollWidth;
    headlineScroll.style.width = `${scrollWidth}px`;
    clone.style.width = `${scrollWidth}px`;
});

// Cria e adiciona um estilo CSS para a animação de rolagem
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
