const express = require('express');
const route = express.Router();

const AuthController = require("../controllers/AuthController")

module.exports = function (route) {

    route.use((req, res, next) => {
        var uemail = req.session.useremail;
        const allowUrls = ["/login", "/auth-validate", "/register", "/signup", "/forgotpassword", "/sendforgotpasswordlink", "/resetpassword", "/error", "/changepassword"];
        if (allowUrls.indexOf(req.path) !== -1) {
            if (uemail != null && uemail != undefined) {
                return res.redirect('/');
            }

        } else if (!uemail) {
            return res.redirect('/login');
        }
        next();
    })

    route.get('/', (req, res, next) => {
        res.render('index', { title: 'Hi, Welcome Back!' });
    })

    route.get('/index', (req, res, next) => {
        res.render('index', { title: 'Hi, Welcome Back!' });
    })
    route.get('/about-us', (req, res, next) => {
        res.render('about-us', { title: 'Hi, Welcome Back!' });
    })
    route.get('/account', (req, res, next) => {
        res.render('account', { title: 'Hi, Welcome Back!' });
    })
    route.get('/checkout', (req, res, next) => {
        res.render('checkout', { title: 'Hi, Welcome Back!' });
    })
    route.get('/confirmation', (req, res, next) => {
        res.render('confirmation', { title: 'Hi, Welcome Back!' });
    })
    route.get('/contact-us', (req, res, next) => {
        res.render('contact-us', { title: 'Hi, Welcome Back!' });
    })
    route.get('/order-history', (req, res, next) => {
        res.render('order-history', { title: 'Hi, Welcome Back!' });
    })
    route.get('/payment', (req, res, next) => {
        res.render('payment', { title: 'Hi, Welcome Back!' });
    })
    route.get('/privacy-policy', (req, res, next) => {
        res.render('privacy-policy', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-details', (req, res, next) => {
        res.render('product-details', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-grid-defualt', (req, res, next) => {
        res.render('product-grid-defualt', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-grid-right', (req, res, next) => {
        res.render('product-grid-right', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-grid-sidebar-banner', (req, res, next) => {
        res.render('product-grid-sidebar-banner', { title: 'Hi, Welcome Back!' });
    })
    route.get('/address', (req, res, next) => {
        res.render('address', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-grid', (req, res, next) => {
        res.render('product-grid', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-list-defualt', (req, res, next) => {
        res.render('product-list-defualt', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-list-left', (req, res, next) => {
        res.render('product-list-left', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-list-right', (req, res, next) => {
        res.render('product-list-right', { title: 'Hi, Welcome Back!' });
    })
    route.get('/product-list', (req, res, next) => {
        res.render('product-list', { title: 'Hi, Welcome Back!' });
    })
    route.get('/products-category', (req, res, next) => {
        res.render('products-category', { title: 'Hi, Welcome Back!' });
    })
    route.get('/purchase-guide', (req, res, next) => {
        res.render('purchase-guide', { title: 'Hi, Welcome Back!' });
    })
    route.get('/invoice', (req, res, next) => {
        res.render('invoice', { title: 'Hi, Welcome Back!' });
    })
    route.get('/review', (req, res, next) => {
        res.render('review', { title: 'Hi, Welcome Back!' });
    })
    route.get('/shop-cart', (req, res, next) => {
        res.render('shop-cart', { title: 'Hi, Welcome Back!' });
    })
    route.get('/store-locator', (req, res, next) => {
        res.render('store-locator', { title: 'Hi, Welcome Back!' });
    })
    route.get('/terms-conditions', (req, res, next) => {
        res.render('terms-conditions', { title: 'Hi, Welcome Back!' });
    })
    route.get('/trend-fashion', (req, res, next) => {
        res.render('trend-fashion', { layout: 'layouts/layout-fluid'});
    })
    route.get('/watch-main-layout', (req, res, next) => {
        res.render('watch-main-layout',);
    })
    route.get('/wishlist', (req, res, next) => {
        res.render('wishlist',);
    })
    route.get('/track-order', (req, res, next) => {
        res.render('track-order', { title: 'Hi, Welcome Back!' });
    })
    route.get('/modern-fashion', (req, res, next) => {
        res.render('modern-fashion', { layout: 'layouts/layout-fluid' });
    })
    route.get('/email-black-friday', (req, res, next) => {
        res.render('email-black-friday',{ layout: 'layouts/layout-without-nav' });
    })
    route.get('/email-flash-sale', (req, res, next) => {
        res.render('email-flash-sale',{ layout: 'layouts/layout-without-nav' });
    })
    route.get('/email-order-success-2', (req, res, next) => {
        res.render('email-order-success-2',{ layout: 'layouts/layout-without-nav' });
    })
    route.get('/email-order-success', (req, res, next) => {
        res.render('email-order-success',{ layout: 'layouts/layout-without-nav' });
    })
    route.get('/ecommerce-faq', (req, res, next) => {
        res.render('ecommerce-faq', {layout: 'layouts/layout-without-main' });
    })
    route.get('/auth-404', (req, res, next) => {
        res.render('auth-404',{ layout: 'layouts/layout-without-nav' } );
    })
    route.get('/auth-500', (req, res, next) => {
        res.render('auth-500', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-logout-basic', (req, res, next) => {
        res.render('auth-logout-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-pass-change-basic', (req, res, next) => {
        res.render('auth-pass-change-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-pass-reset-basic', (req, res, next) => {
        res.render('auth-pass-reset-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-signin-basic', (req, res, next) => {
        res.render('auth-signin-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-signup-basic', (req, res, next) => {
        res.render('auth-signup-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-success-msg-basic', (req, res, next) => {
        res.render('auth-success-msg-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/auth-twostep-basic', (req, res, next) => {
        res.render('auth-twostep-basic', { layout: 'layouts/layout-without-nav' });
    })
    route.get('/pages-starter', (req, res, next) => {
        res.render('pages-starter',);
    })
    route.get('/product-create', (req, res, next) => {
        res.render('product-create',);
    })
    route.get('/coming-soon', (req, res, next) => {
        res.render('coming-soon', { layout: 'layouts/layout-without-nav' });
    })

    // Authentication
    route.get('/login', (req, res, next) => {
        res.render('auth/login', { title: 'Login', layout: 'layouts/layout-without-nav', 'message': req.flash('message'), error: req.flash('error') })
    })

    // validate login form
    route.post("/auth-validate", AuthController.validate)

    // logout
    route.get("/logout", AuthController.logout);

    route.get('/register', (req, res, next) => {
        res.render('auth/register', { title: 'Register', layout: 'layouts/layout-without-nav', message: req.flash('message'), error: req.flash('error') })
    })

    // validate register form
    route.post("/signup", AuthController.signup)

    route.get('/forgotpassword', (req, res, next) => {
        res.render('auth/forgotpassword', { title: 'Forgot password', layout: 'layouts/layout-without-nav', message: req.flash('message'), error: req.flash('error') })
    })

    // send forgot password link on user email
    route.post("/sendforgotpasswordlink", AuthController.forgotpassword)

    // reset password
    route.get("/resetpassword", AuthController.resetpswdview);
    // Change password
    route.post("/changepassword", AuthController.changepassword);

    //500
    route.get('/error', (req, res, next) => {
        res.render('auth/auth-404', { title: '404 Error', layout: 'layouts/layout-without-nav' });
    })
}