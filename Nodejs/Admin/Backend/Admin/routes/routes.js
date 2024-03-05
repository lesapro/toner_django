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
    route.get('/account-settings', (req, res, next) => {
        res.render('account-settings', { title: 'Hi, Welcome Back!' });
    })
    route.get('/account', (req, res, next) => {
        res.render('account', { title: 'Hi, Welcome Back!' });
    })
    route.get('/auth-404', (req, res, next) => {
        res.render('auth-404', { layout: 'layouts/layout-without-nav' });
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
    route.get('/brands', (req, res, next) => {
        res.render('brands',);
    })
    route.get('/calendar', (req, res, next) => {
        res.render('calendar',);
    })
    route.get('/categories', (req, res, next) => {
        res.render('categories',);
    })
    route.get('/coupons', (req, res, next) => {
        res.render('coupons',);
    })
    route.get('/courier-partner', (req, res, next) => {
        res.render('courier-partner',);
    })
    route.get('/currency-rates', (req, res, next) => {
        res.render('currency-rates',);
    })
    route.get('/invoices-create', (req, res, next) => {
        res.render('invoices-create',);
    })
    route.get('/invoices-details', (req, res, next) => {
        res.render('invoices-details',);
    })
    route.get('/invoices-list', (req, res, next) => {
        res.render('invoices-list',);
    })
    route.get('/orders-list-view', (req, res, next) => {
        res.render('orders-list-view',);
    })
    route.get('/orders-overview', (req, res, next) => {
        res.render('orders-overview',);
    })
    route.get('/pages-starter', (req, res, next) => {
        res.render('pages-starter',);
    })
    route.get('/product-create', (req, res, next) => {
        res.render('product-create',);
    })
    route.get('/product-grid', (req, res, next) => {
        res.render('product-grid',);
    })
    route.get('/product-list', (req, res, next) => {
        res.render('product-list',);
    })
    route.get('/product-overview', (req, res, next) => {
        res.render('product-overview',);
    })
    route.get('/reviews-ratings', (req, res, next) => {
        res.render('reviews-ratings',);
    })
    route.get('/seller-overview', (req, res, next) => {
        res.render('seller-overview',);
    })
    route.get('/sellers-grid-view', (req, res, next) => {
        res.render('sellers-grid-view',);
    })
    route.get('/sellers-list-view', (req, res, next) => {
        res.render('sellers-list-view',);
    })
    route.get('/shipments', (req, res, next) => {
        res.render('shipments',);
    })
    route.get('/shipping-list', (req, res, next) => {
        res.render('shipping-list',);
    })
    route.get('/statistics', (req, res, next) => {
        res.render('statistics',);
    })
    route.get('/sub-categories', (req, res, next) => {
        res.render('sub-categories',);
    })
    route.get('/transactions', (req, res, next) => {
        res.render('transactions',);
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