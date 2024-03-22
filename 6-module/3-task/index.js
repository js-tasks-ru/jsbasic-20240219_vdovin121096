import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.render();
    this.updateArrows();
    this.elem
      .querySelector(".carousel__arrow_left")
      .addEventListener("click", this.prevSlide.bind(this));
    this.elem
      .querySelector(".carousel__arrow_right")
      .addEventListener("click", this.nextSlide.bind(this));
    this.elem.addEventListener("click", this.onButtonClick.bind(this));
  }

  render() {
    const carousel = createElement(`
            <div class="carousel">
                <div class="carousel__arrow carousel__arrow_right">
                    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                </div>
                <div class="carousel__arrow carousel__arrow_left" style="display:none;">
                    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                </div>
                <div class="carousel__inner">
                </div>
            </div>
        `);

    const inner = carousel.querySelector(".carousel__inner");

    this.slides.forEach((slide) => {
      const slideElem = createElement(`
                <div class="carousel__slide" data-id="${slide.id}">
                    <img src="/assets/images/carousel/${
                      slide.image
                    }" class="carousel__img" alt="slide">
                    <div class="carousel__caption">
                        <span class="carousel__price">€${slide.price.toFixed(
                          2
                        )}</span>
                        <div class="carousel__title">${slide.name}</div>
                        <button type="button" class="carousel__button">
                            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                        </button>
                    </div>
                </div>
            `);
      inner.append(slideElem);
    });

    return carousel;
  }

  prevSlide() {
    const width = this.elem.offsetWidth;
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.elem.querySelector(
        ".carousel__inner"
      ).style.transform = `translateX(-${width * this.currentSlideIndex}px)`;
      this.update();
    }
  }

  nextSlide() {
    const width = this.elem.offsetWidth;
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
      this.elem.querySelector(
        ".carousel__inner"
      ).style.transform = `translateX(-${width * this.currentSlideIndex}px)`;
      this.update();
    }
  }

  update() {
    const slides = this.elem.querySelectorAll(".carousel__slide");
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === this.currentSlideIndex);
    });
    this.updateArrows();
  }

  updateArrows() {
    const leftArrow = this.elem.querySelector(".carousel__arrow_left");
    const rightArrow = this.elem.querySelector(".carousel__arrow_right");

    if (this.currentSlideIndex === 0) {
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "";
    }

    if (this.currentSlideIndex === this.slides.length - 1) {
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "";
    }
  }

  onButtonClick(event) {
    if (event.target.closest(".carousel__button")) {
      const slideId = event.target.closest(".carousel__slide").dataset.id;
      this.elem.dispatchEvent(
        new CustomEvent("product-add", {
          detail: slideId,
          bubbles: true,
        })
      );
    }
  }
}
