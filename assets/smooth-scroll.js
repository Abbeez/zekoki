document.addEventListener("wheel", (event) => {
  event.preventDefault();

  window.scrollBy({
    top: event.deltaY * 5, // Adjust speed (lower = slower)
    behavior: "smooth",
  });
}, { passive: false });
