class PopupGallery {
    constructor(popupId, slideSelector) {
        this.currentSlide = 0;
        this.popup = document.getElementById(popupId);
        this.slides = this.popup.querySelectorAll(slideSelector);
        this.totalSlides = this.slides.length;
        this.updateSlidePosition();
    }

    openPopup(index) {
        this.currentSlide = index;
        this.updateSlidePosition();
        this.popup.style.display = 'flex';
    }

    closePopup() {
        this.popup.style.display = 'none';
    }

    updateSlidePosition() {
        this.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
        });
    }

    changeSlide(direction) {
        this.currentSlide += direction;
        if (this.currentSlide < 0) this.currentSlide = this.totalSlides - 1;
        if (this.currentSlide >= this.totalSlides) this.currentSlide = 0;
        this.updateSlidePosition();
    }
}

// Initialize galleries
const gallery1 = new PopupGallery('imagePopup1', '.popupImage');
const gallery2 = new PopupGallery('imagePopup', '.popupImage');

// Event handlers for gallery 1
function openPopupGallery1(index) {
    gallery1.openPopup(index);
}
function closePopupGallery1() {
    gallery1.closePopup();
}
function changeSlideGallery1(direction) {
    gallery1.changeSlide(direction);
}

// Event handlers for gallery 2
function openPopupGallery2(index) {
    gallery2.openPopup(index);
}
function closePopupGallery2() {
    gallery2.closePopup();
}
function changeSlideGallery2(direction) {
    gallery2.changeSlide(direction);
}