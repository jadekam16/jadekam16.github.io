var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideshadows: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesperview: 2
        },
        768: {
            slidesperview: 1
        },
        1024: {
            slidesperview: 2
        },
        1560: {
            slidesperview: 3
        }
    }
});