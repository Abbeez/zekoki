document.addEventListener("DOMContentLoaded", function () {
    let scrollY = window.scrollY;
    let isScrolling = false;

    function smoothScroll() {
        isScrolling = true;
        let scrollStep = (scrollY - window.scrollY) * 0.1; // Adjust smoothness
        window.scrollBy(0, scrollStep);

        if (Math.abs(scrollStep) > 0.5) {
            requestAnimationFrame(smoothScroll);
        } else {
            isScrolling = false;
        }
    }

    document.addEventListener("wheel", function (event) {
        event.preventDefault();
        scrollY += event.deltaY * 0.8; // Adjust speed
        if (!isScrolling) {
            requestAnimationFrame(smoothScroll);
        }
    }, { passive: false });
});
