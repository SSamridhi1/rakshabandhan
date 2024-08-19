document.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    document.querySelectorAll('.layer').forEach((layer, index) => {
        const speed = (index + 1) * 0.3;
        layer.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
