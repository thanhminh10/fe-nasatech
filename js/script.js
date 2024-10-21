
const thumbnails = document.querySelectorAll('.thumbnail');
const currentImage = document.getElementById('currentImage');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        currentImage.src = thumbnail.dataset.img;
    });
});