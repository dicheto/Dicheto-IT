let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  document.querySelector(".carousel-slides").style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

// Автоматична промяна на слайдовете
setInterval(() => {
  currentSlide = (currentSlide + 1) % document.querySelectorAll(".slide").length;
  showSlide(currentSlide);
}, 3000);