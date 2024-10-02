document.addEventListener("DOMContentLoaded", function() {
    const image1 = document.querySelector('.image1');

    // Анімація прозорості для першого зображення
    let opacity = 1;
    setInterval(() => {
        opacity -= 0.01;
        if (opacity <= 0) {
            opacity = 1; // Скидання
        }
        image1.style.opacity = opacity;
    }, 100);
});
