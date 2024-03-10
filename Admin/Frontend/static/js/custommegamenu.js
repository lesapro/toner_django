jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
        jQuery("header.page-header").addClass("sticky");
    } else {
        jQuery("header.page-header").removeClass("sticky");
    }
});
jQuery(".sw-megamenu").swMegamenu();
jQuery('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').on('click', function (e) {
    e.preventDefault();
    jQuery('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').removeClass('mobile-parent-active');
    jQuery('.mobile-megamenu-children').removeClass('mobile-active');
    jQuery(this).addClass('mobile-parent-active');
    var cateId = $(this).attr('data-cateid');
    jQuery('.submenu-cate-' + cateId).addClass('mobile-active');
});
jQuery('.ui-menu-item.level0 .open-children-toggle').on('click', function () {
    var cateId = $(this).attr('data-cateid');
    jQuery('.subchildmenu').removeClass('child-menu-active');
    jQuery('.subchildmenu-cate-' + cateId).addClass('child-menu-active');
});
jQuery('.megamenu-mobile-navigation-left').on('click', function () {
    jQuery('.subchildmenu').removeClass('child-menu-active');
});
jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
        jQuery("header.page-header").addClass("sticky");
    } else {
        jQuery("header.page-header").removeClass("sticky");
    }
});
jQuery(".sw-megamenu").swMegamenu();
jQuery('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').on('click', function (e) {
    e.preventDefault();
    jQuery('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').removeClass('mobile-parent-active');
    jQuery('.mobile-megamenu-children').removeClass('mobile-active');
    jQuery(this).addClass('mobile-parent-active');
    var cateId = jQuery(this).attr('data-cateid');
    jQuery('.submenu-cate-' + cateId).addClass('mobile-active');
});
jQuery('.ui-menu-item.level0 .open-children-toggle').on('click', function () {
    var cateId = jQuery(this).attr('data-cateid');
    jQuery('.subchildmenu').removeClass('child-menu-active');
    jQuery('.subchildmenu-cate-' + cateId).addClass('child-menu-active');
});
jQuery('.megamenu-mobile-navigation-left').on('click', function () {
    jQuery('.subchildmenu').removeClass('child-menu-active');
});