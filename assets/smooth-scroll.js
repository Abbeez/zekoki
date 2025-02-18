document.addEventListener("DOMContentLoaded", function () {
    let scrollPosition = window.scrollY;
    let scrollSpeed = 0;
    let isScrolling = false;

    function smoothScroll() {
        if (Math.abs(scrollSpeed) > 0.1) {
            scrollPosition += scrollSpeed;
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
            scrollSpeed *= 0.9; // Adjust this for more/less inertia
            requestAnimationFrame(smoothScroll);
        } else {
            isScrolling = false;
        }
    }

    document.addEventListener("wheel", function (event) {
        event.preventDefault();
        scrollSpeed += event.deltaY * 0.3; // Adjust this for more/less speed

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    }, { passive: false });
});
