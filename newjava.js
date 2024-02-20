document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll('.gallery-slider span');
    spans.forEach((span, index) => {
        span.style.setProperty('--i', index + 1);
    });
});
