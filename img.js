const images = document.querySelector('.images');
const totalImages = document.querySelectorAll('.images img').length;
let currentIndex = 0;

function scrollImages() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(scrollImages, 2200); 