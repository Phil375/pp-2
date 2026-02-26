// ===== NAVIGATION ACTIVE STATE =====

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Fonction pour mettre à jour le lien actif
    function updateActiveLink() {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Émettre l'événement au scroll
    window.addEventListener('scroll', updateActiveLink);

    // Émettre l'événement au chargement initial
    updateActiveLink();
});

// ===== ANIMATION DES CARTES AU SCROLL =====

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de débouchés et de portraits
const cards = document.querySelectorAll('.debuche-card, .portrait-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== ÉVÉNEMENTS DE CLIC SUR LES BOUTONS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== EFFET DE PARALLAXE LÉGER =====

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// ===== CONSOLE MESSAGE =====

console.log('%c Bienvenue sur la page Licence Économie & Gestion !', 'color: #de416d; font-size: 16px; font-weight: bold;');
console.log('%c Université de Bretagne Occidentale - Brest', 'color: #000; font-size: 12px;');
