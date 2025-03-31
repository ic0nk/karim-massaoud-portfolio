        let currentSlide = 0;
        const slides = document.querySelectorAll('.popupImage');
        const totalSlides = slides.length;

        function openPopup(index) {
            currentSlide = index;
            updateSlidePosition();
            document.getElementById('imagePopup').style.display = 'flex';
        }

        function closePopup() {
            document.getElementById('imagePopup').style.display = 'none';
        }

        function updateSlidePosition() {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
            });
        }

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            if (currentSlide >= totalSlides) currentSlide = 0;
            updateSlidePosition();
        }

        // Initialize slide positions
        updateSlidePosition();

        // Close popup when clicking outside
        document.querySelector('.popupOverlay').addEventListener('click', function(e) {
            if (e.target === this) closePopup();
        });