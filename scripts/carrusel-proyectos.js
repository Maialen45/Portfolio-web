const track = document.querySelector(".carrusel-track");
const cards = document.querySelectorAll(".card");
const btnLeft = document.querySelector(".proyectos-btn.left");
const btnRight = document.querySelector(".proyectos-btn.right");

let currentIndex = 0;
let visibleCards = 3;

function getVisibleCardsCount() {
  // Cambia este valor si haces diseño responsivo más adelante
  return 3;
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 32; // 2rem en px, como en CSS

  const offset = -(currentIndex * (cardWidth + gap));
  track.style.transform = `translateX(${offset}px)`;
}

btnRight.addEventListener("click", () => {
  const maxIndex = cards.length - visibleCards;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Inicializar
