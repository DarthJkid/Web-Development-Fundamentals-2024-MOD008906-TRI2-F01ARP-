(function () {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;
  const totalSlides = slides.length;
  const nextButton = document.getElementById("nextSlide");
  const prevButton = document.getElementById("prevSlide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  nextButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  prevButton.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  // Auto-slide every 5 seconds
  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000);
})();
