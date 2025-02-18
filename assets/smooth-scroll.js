// Load Lenis Smooth Scroll
class Lenis {
  constructor() {
    this.lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for more/less smoothness
    });

    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
}

// Initialize smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  new Lenis();
});
