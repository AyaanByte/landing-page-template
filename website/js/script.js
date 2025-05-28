const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btnG');
const nextBtn = document.querySelector('.next-btnG');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto play
let autoPlay = setInterval(nextSlide, 4000);

// Pause auto play on hover
slider.addEventListener('mouseover', () => {
    clearInterval(autoPlay);
});

slider.addEventListener('mouseout', () => {
    autoPlay = setInterval(nextSlide, 5000);
});

// Initial slide
showSlide(currentIndex);