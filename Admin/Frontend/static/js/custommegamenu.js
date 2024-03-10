$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header.page-header").addClass("sticky");
    } else {
        $("header.page-header").removeClass("sticky");
    }
});
$(".sw-megamenu").swMegamenu();
$('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').on('click', function (e) {
    e.preventDefault();
    $('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').removeClass('mobile-parent-active');
    $('.mobile-megamenu-children').removeClass('mobile-active');
    $(this).addClass('mobile-parent-active');
    var cateId = $(this).attr('data-cateid');
    $('.submenu-cate-' + cateId).addClass('mobile-active');
});
$('.ui-menu-item.level0 .open-children-toggle').on('click', function () {
    var cateId = $(this).attr('data-cateid');
    $('.subchildmenu').removeClass('child-menu-active');
    $('.subchildmenu-cate-' + cateId).addClass('child-menu-active');
});
$('.megamenu-mobile-navigation-left').on('click', function () {
    $('.subchildmenu').removeClass('child-menu-active');
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header.page-header").addClass("sticky");
    } else {
        $("header.page-header").removeClass("sticky");
    }
});
$(".sw-megamenu").swMegamenu();
$('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').on('click', function (e) {
    e.preventDefault();
    $('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').removeClass('mobile-parent-active');
    $('.mobile-megamenu-children').removeClass('mobile-active');
    $(this).addClass('mobile-parent-active');
    var cateId = $(this).attr('data-cateid');
    $('.submenu-cate-' + cateId).addClass('mobile-active');
});
$('.ui-menu-item.level0 .open-children-toggle').on('click', function () {
    var cateId = $(this).attr('data-cateid');
    $('.subchildmenu').removeClass('child-menu-active');
    $('.subchildmenu-cate-' + cateId).addClass('child-menu-active');
});
$('.megamenu-mobile-navigation-left').on('click', function () {
    $('.subchildmenu').removeClass('child-menu-active');
});