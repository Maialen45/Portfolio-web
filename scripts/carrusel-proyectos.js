const track = document.querySelector(".carrusel-track");
const cards = document.querySelectorAll(".card");
const btnLeft = document.querySelector(".proyectos-btn.left");
const btnRight = document.querySelector(".proyectos-btn.right");

let currentIndex = 0;
let visibleCards = getVisibleCardsCount();

function getVisibleCardsCount() {
  const trackWidth = track.offsetWidth;
  const cardWidth = cards[0].offsetWidth;
  const gap = 32;

  return Math.floor(trackWidth / (cardWidth + gap));
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 32;

  const offset = -(currentIndex * (cardWidth + gap));
  track.style.transform = `translateX(${offset}px)`;
}

btnRight.addEventListener("click", () => {
  visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, cards.length - 1 - visibleCards);
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = maxIndex;
  }
  updateCarousel();
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
