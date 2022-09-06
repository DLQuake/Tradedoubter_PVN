const swiper1 = new Swiper('.benefits__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    mousewheel: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});

const swiper2 = new Swiper('.references__slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    mousewheel: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});