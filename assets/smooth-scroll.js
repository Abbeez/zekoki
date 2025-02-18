document.addEventListener('DOMContentLoaded', function () {
  const scrollSpeed = 500; // Adjust scrolling speed (higher = slower)
  const easing = 1; // Adjust easing (0 = no easing, 1 = full easing)

  let isScrolling = false;

  window.addEventListener('wheel', function (e) {
    e.preventDefault();

    if (!isScrolling) {
      isScrolling = true;

      const delta = e.deltaY || e.detail || e.wheelDelta;
      const targetScroll = window.scrollY + delta * easing;

      smoothScrollTo(targetScroll, scrollSpeed, function () {
        isScrolling = false;
      });
    }
  }, { passive: false });

  function smoothScrollTo(target, duration, callback) {
    const start = window.scrollY;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
      else if (callback) callback();
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});