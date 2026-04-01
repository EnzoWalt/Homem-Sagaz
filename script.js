document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer para revelar elementos (Scroll Animation)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do bloco estiver visível
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que roda a animação no CSS
                entry.target.classList.add('visible');
                // Desconecta assim que revelar uma vez, para performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => scrollObserver.observe(el));


    // 2. Smooth Scrolling nativo melhorado em links de clique (CTAs)
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
