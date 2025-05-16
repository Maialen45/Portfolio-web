document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navLinks = document.querySelector(".nav-links");
  const hamburgerIcon = hamburgerBtn.querySelector("i");

  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
      document.body.style.overflow = "hidden";
    } else {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
      document.body.style.overflow = "";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburgerBtn.classList.remove("active");
      navLinks.classList.remove("active");
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
      document.body.style.overflow = "";
    });
  });
});
