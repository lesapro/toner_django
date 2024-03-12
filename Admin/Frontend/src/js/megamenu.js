(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        factory();
    }
}(function () {
    'use strict';

    var swMegamenu = function () {
        document.querySelectorAll(".navigation.sw-megamenu li.classic .submenu, .navigation.sw-megamenu li.staticwidth .submenu, .navigation.sw-megamenu li.classic .subchildmenu .subchildmenu").forEach(function (elem) {
            elem.style.left = "-9999px";
            elem.style.right = "auto";
        });

        document.querySelectorAll(".navigation.sw-megamenu li").forEach(function (elem) {
            elem.addEventListener("mouseover", function () {
                var popup = this.querySelector(".submenu, .subchildmenu");
                if (!popup) return;
                var w_width = window.innerWidth;
                var pos = this.getBoundingClientRect();
                var c_width = popup.offsetWidth;

                if (w_width <= pos.left + this.offsetWidth + c_width) {
                    popup.style.left = "auto";
                    popup.style.right = "100%";
                } else {
                    popup.style.left = "100%";
                    popup.style.right = "auto";
                }
            });
        });

        window.addEventListener("resize", function () {
            document.querySelectorAll(".navigation.sw-megamenu li.classic .submenu, .navigation.sw-megamenu li.staticwidth .submenu, .navigation.sw-megamenu li.classic .subchildmenu .subchildmenu").forEach(function (elem) {
                elem.style.left = "-9999px";
                elem.style.right = "auto";
            });
        });

        var navToggle = document.querySelector(".nav-toggle");
        navToggle.addEventListener('click', function () {
            var html = document.documentElement;
            if (!html.classList.contains("nav-open")) {
                html.classList.add("nav-before-open");
                setTimeout(function () {
                    html.classList.add("nav-open");
                }, 300);
            } else {
                html.classList.remove("nav-open");
                setTimeout(function () {
                    html.classList.remove("nav-before-open");
                }, 300);
            }
        });

        document.querySelectorAll("li.ui-menu-item > .open-children-toggle").forEach(function (toggle) {
            toggle.addEventListener("click", function () {
                var submenu = this.nextElementSibling; // Assuming the submenu is the next element
                var link = this.previousElementSibling; // Assuming the link is the previous element
                if (submenu && !submenu.classList.contains("opened")) {
                    submenu.classList.add("opened");
                    if (link) link.classList.add("ui-state-active");
                } else if (submenu) {
                    submenu.classList.remove("opened");
                    if (link) link.classList.remove("ui-state-active");
                }
            });
        });
    };

    swMegamenu(); // Auto-initialize
}));
