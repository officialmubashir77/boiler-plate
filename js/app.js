// console.log("Hello");

// Swiper JS Slider Initialize

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,  // Enable dynamic bullets
    },
     // Navigation arrows
  navigation: {
    nextEl: '.swiper-nav-next',
    prevEl: '.swiper-nav-prev',
  },
  });

