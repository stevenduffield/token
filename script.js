// Fade In Effect for Timeline Items on Scroll
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const triggerPoint = window.innerHeight / 1.3;
    
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        
        if (itemPosition < triggerPoint) {
            item.classList.add('fade-in');
        }
    });
});

// Smooth Scroll for Anchors
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
