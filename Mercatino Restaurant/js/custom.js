/****************************Header***********************************/


jQuery(document).ready(function () {
    jQuery('.mobileIcon').click(function () {
        jQuery("body").toggleClass('menu-open');
    });
});


/****************** gallary slider ********************/ 

var swiper = new Swiper(".gallary_slider", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 4.5,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next_arrow",
      prevEl: ".previous_arrow",
    },
  });


  /******************** about slider ********************/
  
 
    var swiper = new Swiper(".about_slider", {
        slidesPerView: 1,
        spaceBetween: 30, // Add space between slides if needed
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: ".next_btn",
            prevEl: ".prev_btn",
        },
    });

