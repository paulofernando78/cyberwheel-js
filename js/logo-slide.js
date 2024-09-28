document.addEventListener("DOMContentLoaded", function() {
    const partnersSlide = document.querySelector(".logos");
    const images = partnersSlide.querySelectorAll("li");

    // Duplicate each image and append to the list
    images.forEach(img => {
        const clone = img.cloneNode(true);
        partnersSlide.appendChild(clone);
    });
});