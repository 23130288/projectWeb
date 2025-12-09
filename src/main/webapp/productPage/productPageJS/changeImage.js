const mainImage = document.querySelector('.main-image');
const subImages = document.querySelectorAll('.sub-image');

subImages.forEach(img => {
    img.addEventListener('click', () => {
        mainImage.src = img.src;

        // remove old active
        subImages.forEach(i => i.classList.remove('active'));

        // set active thumbnail
        img.classList.add('active');
    });
});