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
    route.get('/advance-ui-highlight', (req, res, next) => {
        res.render('advance-ui-highlight', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-nestable', (req, res, next) => {
        res.render('advance-ui-nestable', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-ratings', (req, res, next) => {
        res.render('advance-ui-ratings', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-scrollbar', (req, res, next) => {
        res.render('advance-ui-scrollbar', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-scrollbar', (req, res, next) => {
        res.render('advance-ui-scrollbar', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-scrollspy', (req, res, next) => {
        res.render('advance-ui-scrollspy', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-sweetalerts', (req, res, next) => {
        res.render('advance-ui-sweetalerts', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-swiper', (req, res, next) => {
        res.render('advance-ui-swiper', { title: 'Hi, Welcome Back!' });
    })
    route.get('/advance-ui-tour', (req, res, next) => {
        res.render('advance-ui-tour', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-area', (req, res, next) => {
        res.render('charts-apex-area', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-bar', (req, res, next) => {
        res.render('charts-apex-bar', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-boxplot', (req, res, next) => {
        res.render('charts-apex-boxplot', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-bubble', (req, res, next) => {
        res.render('charts-apex-bubble', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-candlestick', (req, res, next) => {
        res.render('charts-apex-candlestick', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-column', (req, res, next) => {
        res.render('charts-apex-column', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-heatmap', (req, res, next) => {
        res.render('charts-apex-heatmap', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-line', (req, res, next) => {
        res.render('charts-apex-line', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-mixed', (req, res, next) => {
        res.render('charts-apex-mixed', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-pie', (req, res, next) => {
        res.render('charts-apex-pie', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-polar', (req, res, next) => {
        res.render('charts-apex-polar', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-radar', (req, res, next) => {
        res.render('charts-apex-radar', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-radialbar', (req, res, next) => {
        res.render('charts-apex-radialbar', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-scatter', (req, res, next) => {
        res.render('charts-apex-scatter', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-timeline', (req, res, next) => {
        res.render('charts-apex-timeline', { title: 'Hi, Welcome Back!' });
    })
    route.get('/charts-apex-treemap', (req, res, next) => {
        res.render('charts-apex-treemap', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-advanced', (req, res, next) => {
        res.render('forms-advanced', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-checkboxs-radios', (req, res, next) => {
        res.render('forms-checkboxs-radios', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-editors', (req, res, next) => {
        res.render('forms-editors', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-elements', (req, res, next) => {
        res.render('forms-elements', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-file-uploads', (req, res, next) => {
        res.render('forms-file-uploads', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-layouts', (req, res, next) => {
        res.render('forms-layouts', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-masks', (req, res, next) => {
        res.render('forms-masks', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-pickers', (req, res, next) => {
        res.render('forms-pickers', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-range-sliders', (req, res, next) => {
        res.render('forms-range-sliders', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-select', (req, res, next) => {
        res.render('forms-select', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-tom-select', (req, res, next) => {
        res.render('forms-tom-select', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-validation', (req, res, next) => {
        res.render('forms-validation', { title: 'Hi, Welcome Back!' });
    })
    route.get('/forms-wizard', (req, res, next) => {
        res.render('forms-wizard', { title: 'Hi, Welcome Back!' });
    })
    route.get('/icons-bootstrap', (req, res, next) => {
        res.render('icons-bootstrap', { title: 'Hi, Welcome Back!' });
    })
    route.get('/icons-boxicons', (req, res, next) => {
        res.render('icons-boxicons', { title: 'Hi, Welcome Back!' });
    })
    route.get('/icons-materialdesign', (req, res, next) => {
        res.render('icons-materialdesign', { title: 'Hi, Welcome Back!' });
    })
    route.get('/icons-phosphor', (req, res, next) => {
        res.render('icons-phosphor', { title: 'Hi, Welcome Back!' });
    })
    route.get('/icons-remix', (req, res, next) => {
        res.render('icons-remix', { title: 'Hi, Welcome Back!' });
    })
    route.get('/maps-google', (req, res, next) => {
        res.render('maps-google', { title: 'Hi, Welcome Back!' });
    })
    route.get('/maps-leaflet', (req, res, next) => {
        res.render('maps-leaflet', { title: 'Hi, Welcome Back!' });
    })
    route.get('/maps-vector', (req, res, next) => {
        res.render('maps-vector', { title: 'Hi, Welcome Back!' });
    })
    route.get('/pages-starter', (req, res, next) => {
        res.render('pages-starter', { title: 'Hi, Welcome Back!' });
    })
    route.get('/tables-basic', (req, res, next) => {
        res.render('tables-basic', { title: 'Hi, Welcome Back!' });
    })
    route.get('/tables-datatables', (req, res, next) => {
        res.render('tables-datatables', { title: 'Hi, Welcome Back!' });
    })
    route.get('/tables-gridjs', (req, res, next) => {
        res.render('tables-gridjs', { title: 'Hi, Welcome Back!' });
    })
    route.get('/tables-listjs', (req, res, next) => {
        res.render('tables-listjs', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-accordions', (req, res, next) => {
        res.render('ui-accordions', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-alerts', (req, res, next) => {
        res.render('ui-alerts', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-badges', (req, res, next) => {
        res.render('ui-badges', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-buttons', (req, res, next) => {
        res.render('ui-buttons', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-cards', (req, res, next) => {
        res.render('ui-cards', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-carousel', (req, res, next) => {
        res.render('ui-carousel', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-colors', (req, res, next) => {
        res.render('ui-colors', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-counter', (req, res, next) => {
        res.render('ui-counter', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-dropdowns', (req, res, next) => {
        res.render('ui-dropdowns', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-embed-video', (req, res, next) => {
        res.render('ui-embed-video', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-general', (req, res, next) => {
        res.render('ui-general', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-grid', (req, res, next) => {
        res.render('ui-grid', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-images', (req, res, next) => {
        res.render('ui-images', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-lists', (req, res, next) => {
        res.render('ui-lists', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-media', (req, res, next) => {
        res.render('ui-media', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-modals', (req, res, next) => {
        res.render('ui-modals', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-notifications', (req, res, next) => {
        res.render('ui-notifications', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-offcanvas', (req, res, next) => {
        res.render('ui-offcanvas', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-placeholders', (req, res, next) => {
        res.render('ui-placeholders', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-profile', (req, res, next) => {
        res.render('ui-profile', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-progress', (req, res, next) => {
        res.render('ui-progress', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-ribbons', (req, res, next) => {
        res.render('ui-ribbons', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-tabs', (req, res, next) => {
        res.render('ui-tabs', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-typography', (req, res, next) => {
        res.render('ui-typography', { title: 'Hi, Welcome Back!' });
    })
    route.get('/ui-utilities', (req, res, next) => {
        res.render('ui-utilities', { title: 'Hi, Welcome Back!' });
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