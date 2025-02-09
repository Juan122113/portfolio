function openLightbox(element) {
    const lightbox = document.querySelector('.lightbox');
    // const lightboxImg = lightbox.querySelector('img');
    const iframe = lightbox.querySelector("iframe");
    const visitBtn = lightbox.querySelector(".visit-btn");

    // Obtener datos del proyecto
    const iframeUrl = element.data.iframeUrl;
    const projectUrl = element.dataset.projectUrl;

    // Configurar iframe y enlace
    iframe.src = iframeUrl;
    visitBtn.href = projectUrl;

    // lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
}

function closeLightbox(event) {
    if(event.target === document.querySelector(".lightbox")) {
        const lightbox = document.querySelector(".lightbox");
        lightbox.querySelector("iframe").src = "https://juan122113.github.io/tip-calculator-app-main/";
        lightbox.classList.remove("active");
    }
    // document.querySelector('.lightbox').classList.remove('active');
}

// Event listeners para los proyectos
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", () => openLightbox(project));
});