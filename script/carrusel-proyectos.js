const track = document.querySelector(".carrusel-track");
const btnLeft = document.querySelector(".proyectos-btn.left");
const btnRight = document.querySelector(".proyectos-btn.right");

let currentIndex = 0;

btnRight.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  const maxIndex = cards.length - 3; // Siempre mostrar 3 tarjetas
  if (currentIndex < maxIndex) {
    currentIndex += 1;
    track.style.transform = `translateX(-${(100 / 3) * currentIndex}%)`;
  }
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    track.style.transform = `translateX(-${(100 / 3) * currentIndex}%)`;
  }
});
