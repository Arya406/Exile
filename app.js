// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
});

// Video Background Parallax effect (Simple)
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Slow down the hero content scroll for parallax feel
        heroContent.style.transform = `translateY(${scrollPos * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrollPos / 600);
    }
});

console.log('Bear Legal Website Loaded - Animations Initialized');