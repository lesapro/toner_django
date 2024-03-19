$(document).ready(function () {
    $('.categories-list .nav-center-images-only').slick({
        rows: 2,
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: true,
        mobileFirst: true
    })
    $('.section-categories-list .categories-list-pc .nav-center-images-only').slick({
        rows: 2,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        draggable: true
    })
})