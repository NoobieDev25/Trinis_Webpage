console.log("Carousel JS loaded")
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

// Function to show a espeific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.add('hidden'));

    // Show current slide
    slides[index].classList.remove('hidden');

    currentSlide = index;
}
    
// Show first slide on page load
startCarousel();
