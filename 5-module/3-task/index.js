function initCarousel() {
  const carouselInner = document.querySelector(".carousel__inner");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const slideWidth = carouselInner.offsetWidth;
  const totalSlides = carouselInner.querySelectorAll(".carousel__slide").length;
  let currentPosition = 0;
  let currentSlideIndex = 0;

  function moveCarousel(direction) {
    if (direction === "left") {
      currentPosition += slideWidth;
      currentSlideIndex = Math.max(0, currentSlideIndex - 1);
    } else {
      currentPosition -= slideWidth;
      currentSlideIndex = Math.min(totalSlides - 1, currentSlideIndex + 1);
    }

    carouselInner.style.transform = `translateX(${currentPosition}px)`;

    arrowLeft.style.display = currentPosition === 0 ? "none" : "";
    arrowRight.style.display =
      currentSlideIndex >= totalSlides - 1 ? "none" : "";
  }

  arrowLeft.addEventListener("click", () => moveCarousel("left"));
  arrowRight.addEventListener("click", () => {
    if (currentSlideIndex < 4) moveCarousel("right");
  });

  arrowLeft.style.display = "none";
  arrowRight.style.display =
    carouselInner.offsetWidth >= carouselInner.scrollWidth ? "none" : "";
}
