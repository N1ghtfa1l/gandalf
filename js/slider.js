document.addEventListener('DOMContentLoaded', () => {
    const sliderInnerContent = document.querySelector('.slider__inner-content');
    const slides = document.querySelectorAll('.slider__content-card');
    const nextButton = document.querySelector('.next-slider-arrow');
    const backButton = document.querySelector('.back-slider-arrow');

    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 26; 

    const updateSliderPosition = () => {
        sliderInnerContent.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; 
        }
        updateSliderPosition();
    });
    backButton.addEventListener('click', () => {
        if (currentSlide > totalSlides ) {
        } else {
            currentSlide -= 1; 
        }
        updateSliderPosition();
    });

    updateSliderPosition();
});
