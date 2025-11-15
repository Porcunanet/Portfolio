// Carousel functionality
        let currentSlide = 0;
        const track = document.querySelector('.carousel-track');
        const cards = document.querySelectorAll('.project-card');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const totalSlides = cards.length;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        indicators.forEach((indicator) => {
            indicator.addEventListener('click', () => {
                currentSlide = parseInt(indicator.dataset.index);
                updateCarousel();
            });
        });

