
document.addEventListener('DOMContentLoaded', () => {
    const createCounter = (id, targetPercentage) => {
        const counter = document.getElementById(id);
        let count = 0;

        const updateCount = () => {
            const increment = 1; // Increment by 1%
            if (count < targetPercentage) {
                count += increment;
                counter.innerText = `${count}%`;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = `${targetPercentage}%`;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });

        observer.observe(counter);
    };


    createCounter('counter-html', 90); 
    createCounter('counter-css', 86); 
    createCounter('counter-javascript', 50); 
    createCounter('counter-figma', 85); 
    createCounter('counter-Photoshop', 81); 
    createCounter('counter-wordpress', 95); 
    createCounter('counter-arabic', 100);
    createCounter('counter-english', 90);
    createCounter('counter-german', 80);
});


document.addEventListener('DOMContentLoaded', function() {
    var slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(function(container) {
        initSlideshow(container);
    });
});

function initSlideshow(container) {
    var slideIndex = 1;
    showSlides(slideIndex, container);

    var prevButton = container.querySelector('.prev');
    var nextButton = container.querySelector('.next');
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            plusSlides(-1, container);
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            plusSlides(1, container);
        });
    }

    var dots = container.querySelectorAll('.dot');
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            currentSlide(index + 1, container);
        });
    });
}

function plusSlides(n, container) {
    showSlides(getSlideIndex(container) + n, container);
}

function currentSlide(n, container) {
    showSlides(n, container);
}

function showSlides(n, container) {
    var slides = container.querySelectorAll('.mySlides');
    var dots = container.querySelectorAll('.dot');

    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }

    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });

    dots.forEach(function(dot) {
        dot.classList.remove('active');
    });

    slides[n - 1].style.display = 'block';
    dots[n - 1].classList.add('active');

    setSlideIndex(n, container);
}

function getSlideIndex(container) {
    return parseInt(container.getAttribute('data-slide-index')) || 1;
}

function setSlideIndex(n, container) {
    container.setAttribute('data-slide-index', n);
}

// Smooth scrolling
document.querySelectorAll('.cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});