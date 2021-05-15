const slides = document.querySelector(".image-items").children;
const prevSlide = document.querySelector("#prev");
const nextSlide = document.querySelector("#next");
const totalSlides = slides.length;

let currentIndex = 0;

nextSlide.addEventListener("click", () => {
  imageSlide('next');
});
prevSlide.addEventListener("click", () => {
  imageSlide('prev');
});

const imageSlide = (direction) => {
  slides[currentIndex].classList.remove("active");

  if (direction === 'next') {
    currentIndex++;
    if (currentIndex === totalSlides) currentIndex = 0;
    slides[currentIndex].classList.add("active");
  }

  if (direction === 'prev') {
    if (currentIndex === 0) currentIndex = totalSlides;
    currentIndex--;
    slides[currentIndex].classList.add("active");
  }
}



