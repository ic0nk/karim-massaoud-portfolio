
document.addEventListener('DOMContentLoaded', () => {
    let createCounter = (id, targetPercentage) => {
        let counter = document.getElementById(id);
        let count = 0;

        let updateCount = () => {
            let increment = 1; // Increment by 1%
            if (count < targetPercentage) {
                count += increment;
                counter.innerText = `${count}%`;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = `${targetPercentage}%`;
            }
        };

        let observer = new IntersectionObserver((entries) => {
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


let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

