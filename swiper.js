
var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   
  });

  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: "3",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      280:{
        slidesPerView: 1,
        spaceBetween: 5,
      },
      320:{
        slidesPerView: 1,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper3 = new Swiper(".swiper3", {
    slidesPerView: "3",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2100,
      disableOnInteraction: false,
    },
    breakpoints: {
      280:{
        slidesPerView: 1,
        spaceBetween: 5,
      },
      320:{
        slidesPerView: 1,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper4 = new Swiper(".swiper4", {
    slidesPerView: "2",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      280:{
        slidesPerView: 1,
        spaceBetween: 5,
      },
      320:{
        slidesPerView: 1,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
  var swiper5 = new Swiper(".swiper5", {
    slidesPerView: "1",
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    autoplay: {
      delay: 2100,
      disableOnInteraction: false,
    },
  });