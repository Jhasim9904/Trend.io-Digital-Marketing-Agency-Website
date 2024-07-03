// Navbar Js
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Navbar Responsiveness
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Work & Testimony Preview JS
const windowObject = window;
windowObject.addEventListener("scroll", function () {
  const scrollY = windowObject.scrollY;
  const horizontalScrollElement = document.getElementById("workPreview");
  const horizontalScrollElement2 = document.getElementById("testimonyPreview");

  horizontalScrollElement.scrollLeft = scrollY * 0.2;
  horizontalScrollElement2.scrollLeft = scrollY * 0.2;
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out"
});

// Hero Page Section
sr.reveal(".hero-page .gradient-blue");
sr.reveal(".hero-page .gradient-v", { delay: 400, origin: "left" });
sr.reveal(".hero-page-headline h1", { delay: 200, origin: "left" });
sr.reveal(".tagline", { delay: 300, origin: "left" });
sr.reveal(".hero-page-headline p", { delay: 500, origin: "left" });
sr.reveal(".brands", { delay: 500 });
sr.reveal(".btn-blue", { delay: 600 });
sr.reveal(".preview");
sr.reveal("#testimonyPreview", { delay: 500 });

// Service Section
sr.reveal(".services .gradient-lightblue");
sr.reveal(".services h1", { delay: 600 });
sr.reveal(".services p", { delay: 800 });
sr.reveal(".service-box");
sr.reveal(".services .gradient-blue", { delay: 600 });

// About Section
sr.reveal(".about .gradient-lightblue");
sr.reveal(".about h1", { delay: 600 });
sr.reveal("div.about-datas > div:nth-child(1)", { delay: 700 });
sr.reveal("div.about-datas > div:nth-child(3)", { delay: 800 });
sr.reveal("div.about-datas > div:nth-child(5)", { delay: 900 });
sr.reveal(".about-headlines", { origin: "left" });
sr.reveal(".about-img", { origin: "right" });

// Work Section
sr.reveal(".work h1");
sr.reveal(".work hr", { delay: 500 });
sr.reveal(".work-boxes", { delay: 700 });
sr.reveal(".gradient-lightblue", { delay: 800 });

sr.reveal(".footer-callout");
sr.reveal(".newsletter", { origin: "left" });
sr.reveal(".footer-link", { origin: "right" });
sr.reveal(".socials");

// Pricing Page
sr.reveal(".basic-plan", { delay: 300 });
sr.reveal(".pro-plan", { delay: 500 });
sr.reveal(".premium-plan", { delay: 800 });

// Contact Page
sr.reveal(".gradient-blue");
sr.reveal(".contact h1");
sr.reveal(".contact p", { delay: 300 });
sr.reveal(".contact form input:nth-child(2)", { delay: 400 });
sr.reveal(".contact form input:nth-child(3)", { delay: 500 });
sr.reveal(".contact form input:nth-child(4)", { delay: 600 });
sr.reveal(".contact form textarea", { delay: 700 });
sr.reveal(".btn-callout", { delay: 200 });
