function openLightbox(imageSrc) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.querySelector('.lightbox').classList.remove('active');
}