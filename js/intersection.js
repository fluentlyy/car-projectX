document.addEventListener("DOMContentLoaded", () => {
  const scrollItems = document.querySelectorAll(".list__li");

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  scrollItems.forEach((item) => {
    observer.observe(item);
  });
});
