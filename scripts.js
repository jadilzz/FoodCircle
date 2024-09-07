// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Testimonials Slider Logic
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        const testimonialWidth = 300; // Width of a single testimonial
        const gap = 10; // Gap between testimonials
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.transform = `translateX(${(idx - index) * (testimonialWidth + gap)}px)`;
        });
    }

    // Initialize the first testimonial view
    showTestimonial(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 3000);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
