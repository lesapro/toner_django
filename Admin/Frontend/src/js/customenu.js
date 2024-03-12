// Handle window scroll to toggle "sticky" class
// window.addEventListener('scroll', function () {
//     var scroll = window.scrollY;
//     var header = document.querySelector('header.page-header');
//     if (scroll >= 50) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// });

// Event handler for click events on mobile menu items
document.querySelectorAll('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('ul.sw-megamenu-mobile li.ui-menu-item.level0.parent').forEach(function (el) {
            el.classList.remove('mobile-parent-active');
        });
        document.querySelectorAll('.mobile-megamenu-children').forEach(function (child) {
            child.classList.remove('mobile-active');
        });
        this.classList.add('mobile-parent-active');
        var cateId = this.getAttribute('data-cateid');
        document.querySelectorAll('.submenu-cate-' + cateId).forEach(function (submenu) {
            submenu.classList.add('mobile-active');
        });
    });
});

// Event handler for opening child menus
document.querySelectorAll('.ui-menu-item.level0 .open-children-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        var cateId = this.getAttribute('data-cateid');
        document.querySelectorAll('.subchildmenu').forEach(function (menu) {
            menu.classList.remove('child-menu-active');
        });
        document.querySelectorAll('.subchildmenu-cate-' + cateId).forEach(function (childMenu) {
            childMenu.classList.add('child-menu-active');
        });
    });
});

// Event handler for mobile navigation left button
document.querySelector('.megamenu-mobile-navigation-left').addEventListener('click', function () {
    document.querySelectorAll('.subchildmenu').forEach(function (menu) {
        menu.classList.remove('child-menu-active');
    });
});
