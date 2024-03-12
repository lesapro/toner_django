$(".sw-megamenu2").swMegamenu();
$('.menu-mobile2').hide();
$(document).ready(function () {
    $('.nav-toggle1').click(function () {
        $('.menu-mobile2').show();
        $('html').addClass('show-menu');
        $('.menu-mobile2 .navigation.sw-megamenu2 .sw-megamenu-mobile .parent.mobile-parent-active').click();
    })
    $('.menu-mobile2 .right-menu-top svg').click(function () {
        $('.menu-mobile2').hide();
        $('html').removeClass('show-menu');
    })

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

})