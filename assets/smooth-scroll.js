document.addEventListener("wheel", (event) => {
  event.preventDefault();

  window.scrollBy({
    top: event.deltaY * 500, // Adjust speed (lower = slower)
    behavior: "smooth",
  });
}, { passive: false });
