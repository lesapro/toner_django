import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Button, Row, Col, Card, Image, Navbar, Nav } from "react-bootstrap";

//img
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import avtar1 from "assets/images/users/avatar-1.jpg";
import img1 from "assets/images/ecommerce/img-1.jpg";
import Eimg2 from "assets/images/ecommerce/img-2.jpg";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img8 from "assets/images/brands/img-8.png";

import { CardModal, SearchModal } from "Components/MainModal";
import { withTranslation } from "react-i18next";
import withRouter from "Components/withRouter";

const Header = (props: any) => {
    //search modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //card modal
    const [card, setCard] = useState(false);

    const handlecardClose = () => setCard(false);
    const handlecardShow = () => setCard(true);

    const [showMenu, setShowMenu] = useState<any>("")
    const [showSubMenu, setShowSubMenu] = useState<any>("")
    const [showPageSubMenu, setShowPageSubMenu] = useState<any>("")

    const menuShow = (item: any) => {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 992 && showMenu !== item) {
            setShowMenu(item)
        } else {
            setShowMenu("")
        }
    }

    const subMenuShow = (item: any) => {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 992 && showSubMenu !== item) {
            setShowSubMenu(item)
        } else {
            setShowSubMenu("")
        }
    }

    const listSubMenuShow = (item: any) => {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 992 && showPageSubMenu !== item) {
            setShowPageSubMenu(item)
        } else {
            setShowPageSubMenu("")
        }
    }

    const path = props.router.location.pathname;
    useEffect(() => {
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + path;
            const ul = document.getElementById("navigation-menu") as HTMLElement;
            const items: any = ul.getElementsByTagName("a");
            let itemsArray: any = Array.from(items);
            removeActivation(itemsArray);
            let matchingMenuItem = itemsArray.find((x: HTMLAnchorElement) => x.pathname === pathName);
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };

        const removeActivation = (items: HTMLAnchorElement[]) => {
            items.forEach((item: HTMLAnchorElement) => {
                item.classList.remove("active");
            });
        };

        const activateParentDropdown = (item: HTMLAnchorElement) => {
            item.classList.add("active");
            let parentDrop: any = item.closest(".dropdown");
            if (parentDrop) {
                parentDrop.classList.add("active");
                parentDrop.querySelector('.dropdown-toggle').classList.add("active");
                let parentDropdown = parentDrop.parentElement.closest(".dropdown");

                if (parentDropdown) {
                    parentDropdown.querySelector('.dropdown-toggle').classList.add("active");
                    let parentEleDropdown = parentDropdown.parentElement.closest(".dropdown");
                    console.log("parentEleDropdown", parentEleDropdown)
                    if (parentEleDropdown) {
                        parentEleDropdown.querySelector('.dropdown-toggle').classList.add("active");
                    }
                }
            }
        };

        initMenu();
        let collapse = document.getElementById("navbarSupportedContent") as HTMLElement;
        if (collapse && collapse.classList.contains("show")) {
            collapse.classList.remove("show");
        }
    }, [path]);

    const windowScroll = () => {
        let navbar = document.getElementById("navbar");
        if (navbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                navbar.classList.add("is-sticky");
            } else {
                navbar.classList.remove("is-sticky");
            }
        }
    }

    window.addEventListener('scroll', function (ev) { ev.preventDefault(); windowScroll(); });

    const handleShowColl = () => {
        let navbar = document.getElementById("navbar");
        let collapse = document.getElementById("navbarSupportedContent") as HTMLElement;
        navbar && navbar.classList.remove("navbar-expand");
        if (collapse && collapse.classList.contains("show")) {
            collapse.addEventListener('shown.bs.collapse', event => {
                collapse.classList.remove("show")
            })
        } else {
            collapse.classList.add("show")
        }
    }

    // Resize Nav Collapse
    const windowResizeHover = () => {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize > 992) {
            let collapse = document.getElementById("navbarSupportedContent") as HTMLElement;
            if (collapse && collapse.classList.contains("show")) {
                collapse.classList.remove("show")
            }
            setShowMenu("");
            setShowSubMenu("");
            setShowPageSubMenu("")
        }
    };

    useEffect(() => {
        window.addEventListener('resize', windowResizeHover);
        return () => {
            window.removeEventListener('resize', windowResizeHover);
        }
    }, []);

    return (
        <React.Fragment>
            <Navbar className="navbar-expand-lg ecommerce-navbar" id="navbar" expanded={false}>
                <Container >
                    <Navbar.Brand href="/#" className="d-none d-lg-block">
                        <div className="logo-dark">
                            <Image src={logodark} alt="" height="25" />
                        </div>
                        <div className="logo-light">
                            <Image src={logolight} alt="" height="25" /> <span className="logo-txt"></span>
                        </div>
                    </Navbar.Brand>
                    <Button className="btn btn-soft-primary btn-icon d-lg-none collapsed" aria-controls="navbarSupportedContent" onClick={handleShowColl}>
                        <i className="bi bi-list fs-20"></i>
                    </Button>

                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
                            <li className="nav-item d-block d-lg-none">
                                <Link to="/#" className="d-block p-3 h-auto text-center"><Image src={logodark} alt="" height="25" className="card-logo-dark mx-auto" /></Link>
                                <Link to="/#" className="d-block p-3 h-auto text-center"><Image src={logolight} alt="" height="25" className="card-logo-light mx-auto" /></Link>
                            </li>
                            <li className="dropdown nav-item dropdown-hover">
                                <Link className="dropdown-toggle nav-link" data-key="t-home" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => {
                                    e.preventDefault();
                                    menuShow("demos");
                                }}>
                                    {props.t('demos')}</Link>
                                <ul
                                    className={showMenu === "demos"
                                        ? "dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu show"
                                        : "dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu"}>
                                    <li className="nav-item">
                                        <Link to="/dashboard" className="nav-link" data-key="main-layout">{props.t('main-layout')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/watch-main-layout" className="nav-link" data-key="unique-watches">{props.t('unique-watches')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/modern-fashion" className="nav-link" data-key="modern-fashion">{props.t('modern-fashion')}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/trend-fashion" className="nav-link" data-key="trend-fashion">{props.t('trend-fashion')}</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown nav-item dropdown-hover dropdown-mega-full">
                                <Link to="/#" className="nav-link dropdown-toggle" data-key="t-catalog" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        menuShow("catalog");
                                    }}>{props.t('catalog')}</Link>
                                <div className={showMenu === "catalog" ? "dropdown-menu p-0 show" : "dropdown-menu p-0"}>
                                    <Row className="g-0 g-lg-4">
                                        <Col lg={2} className="d-none d-lg-block">
                                            <Card className="rounded-start rounded-0 border-0 h-100 mb-0 overflow-hidden" style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}>
                                                <div className="bg-overlay bg-light bg-opacity-25"></div>
                                                <Card.Body className="d-flex align-items-center justify-content-center">
                                                    <div className="text-center">
                                                        <Link to="/product-grid-sidebar-banner" className="btn btn-secondary btn-hover"><i className="ph-storefront align-middle me-1"></i> <span data-key="t-shop-now">{props.t("shop-now")}</span></Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={2}>
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-men">{props.t('men')}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/catalog/clothing' className="nav-link" data-key="t-clothing">{props.t('clothing')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-watches">{props.t('watches')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/left' className="nav-link" data-key="t-bags-Luggage">{props.t('bags-Luggage')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-footwear">{props.t('footwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list' className="nav-link" data-key="t-innerwear">{props.t('innerwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/right' className="nav-link" data-key="t-other-accessories">{props.t('other-accessories')}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-women">{props.t('women')}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/defualt' className="nav-link" data-key="t-western-wear">{props.t('western-wear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/left' className="nav-link" data-key="t-handbags-clutches">{props.t('handbags-clutches')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-lingerie-nightwear">{props.t('lingerie-nightwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/sidebar-banner' className="nav-link" data-key="t-footwear">{props.t('footwear')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/Default' className="nav-link" data-key="t-fashion-silver-jewellery">{props.t('fashion-silver-jewellery')}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2} >
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-accessories-others">{props.t('accessories-others')}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/right' className="nav-link" data-key="t-home-kitchen-pets">{props.t('home-kitchen-pets')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/left' className="nav-link" data-key="t-beauty-health-grocery">{props.t('beauty-health-grocery')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/products-grid/sidebar-banner' className="nav-link" data-key="t-sports-fitness-bags-luggage">{props.t('sports-fitness-bags-luggage')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list' className="nav-link" data-key="t-car-motorbike-industrial">{props.t('car-motorbike-industrial')}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/product-list/right' className="nav-link" data-key="t-books">{props.t('books')}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2}>
                                            <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                <li>
                                                    <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-others">{props.t("others")}</p>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-signup-basic' className="nav-link" data-key="t-sign-up">{props.t("sign-up")}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-signin-basic' className="nav-link" data-key="t-sign-in">{props.t("sign-in")}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-pass-reset-basic' className="nav-link" data-key="t-password-reset">{props.t("password-reset")}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/auth-404' className="nav-link" data-key="t-error-404">{props.t("error-404")}</Link>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col lg={2} className="d-none d-lg-block">
                                            <div className="p-3">
                                                <p className="mb-3 text-uppercase fs-11 fw-medium text-muted" data-key="t-top-brands">{props.t("top-brands")}</p>
                                                <Row className="g-2">
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img8} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img2} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img3} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img4} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img5} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Link to="/#" className="d-block p-2 border border-dashed text-center rounded-3">
                                                            <Image src={img6} alt="" className="avatar-sm" />
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </li>

                            <li className="nav-item dropdown dropdown-hover">
                                <Link className="nav-link dropdown-toggle" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-shop"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        menuShow("shop");
                                    }}>{props.t("shop")}</Link>
                                <div className={showMenu === "shop" ? "dropdown-menu dropdown-mega-menu-xl dropdown-menu-center p-0 show" : "dropdown-menu dropdown-mega-menu-xl dropdown-menu-center p-0"}>
                                    <Row className="g-0 g-lg-4">
                                        <Col lg={5} className="d-none d-lg-block">
                                            <Card className="rounded-start rounded-0 border-0 h-100 mb-0 overflow-hidden" style={{ backgroundImage: `url(${Eimg2})`, backgroundSize: "cover" }}>
                                                <div className="bg-overlay bg-primary" style={{ opacity: 0.90 }}></div>
                                                <Card.Body className="d-flex align-items-center justify-content-center position-relative">
                                                    <div className="text-center">
                                                        <h6 className="card-title text-white">Welcome to Toner</h6>
                                                        <p className="text-white-75">See all the products at once.</p>
                                                        <Link to="/#" className="btn btn-light btn-sm btn-hover">Shop Now <i className="ph-arrow-right align-middle"></i></Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={7}>
                                            <Row className="g-0 g-lg-4">
                                                <Col lg={6}>
                                                    <div className="py-3">
                                                        <ul className="dropdown-menu-list list-unstyled mb-0">
                                                            <li>
                                                                <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-checkout-pages">{props.t("checkout-pages")}</p>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/address' className="nav-link" data-key="t-address">{props.t("address")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/order' className="nav-link" data-key="t-track-order">{props.t("track-order")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/payment' className="nav-link" data-key="t-payment">{props.t("payment")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/review' className="nav-link" data-key="t-review">{props.t("review")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/confirm' className="nav-link" data-key="t-confirmation">{props.t("confirmation")}</Link>
                                                            </li>
                                                            <li className="nav-item">
                                                                <Link to='/shop/orderhistory' className="nav-link" data-key="t-my-orders-order-history">{props.t("my-orders-order-history")}</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <ul className="dropdown-menu-list list-unstyled mb-0 py-3">
                                                        <li>
                                                            <p className="mb-2 text-uppercase fs-11 fw-medium text-muted menu-title" data-key="t-support">{props.t("support")}</p>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/shop/shopingcard' className="nav-link" data-key="t-shopping-cart">{props.t("shopping-cart")}</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/shop/checkout' className="nav-link" data-key="t-checkout">{props.t("checkout")}</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/shop/wishList' className="nav-link" data-key="t-wishlist">{props.t("wishlist")}</Link>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </li>

                            <li className="nav-item dropdown dropdown-hover">
                                <Link className="nav-link dropdown-toggle" data-key="t-pages" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        menuShow("pages");
                                    }}>{props.t('pages')}</Link>
                                <ul className={showMenu === "pages" ? "dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu show" : "dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu"}>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-products"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subMenuShow("products");
                                            }}>{props.t('products')}</Link>
                                        <ul className={showSubMenu === "products" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                            <li className="dropdown dropdown-hover">
                                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-grid-view"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        listSubMenuShow("grid-view")
                                                    }}>{props.t('grid-view')}</Link>
                                                <ul className={showPageSubMenu === "grid-view" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                                    <li><Link className="nav-link" to='/products-grid/default' data-key="t-default">{props.t('default')}</Link></li>
                                                    <li><Link className="nav-link" to='/products-grid/sidebar-banner' data-key="t-sidebar-with-banner">{props.t('sidebar-with-banner')}</Link></li>
                                                    <li><Link className="nav-link" to='/products-grid/right' data-key="t-right-sidebar">{props.t('right-sidebar')}</Link></li>
                                                    <li><Link className="nav-link" to='/products-grid' data-key="t-no-sidebar">{props.t('no-sidebar')}</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown dropdown-hover">
                                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-list-view"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        listSubMenuShow("list-view")
                                                    }}>{props.t('list-view')}</Link>
                                                <ul className={showPageSubMenu === "list-view" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                                    <li><Link className="nav-link" to='/product-list/default' data-key="t-default">{props.t('default')}</Link></li>
                                                    <li><Link className="nav-link" to='/product-list/left' data-key="t-left-sidebar">{props.t('left-sidebar')}</Link></li>
                                                    <li><Link className="nav-link" to='/product-list/right' data-key="t-right-sidebar">{props.t('right-sidebar')}</Link></li>
                                                    <li><Link className="nav-link" to='/product-list' data-key="t-no-sidebar">{props.t('no-sidebar')}</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link className="nav-link" to='/product-details' data-key="t-product-details">{props.t('product-details')}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-users"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subMenuShow("users")
                                            }}>{props.t('users')}</Link>
                                        <ul className={showSubMenu === "users" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                            <li><Link className="nav-link" to='/account' data-key="t-my-account">{props.t('my-account')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-signin-basic' data-key="t-sign-in">{props.t('sign-up')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-signup-basic' data-key="t-sign-up">{props.t('sign-in')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-pass-reset-basic' data-key="t-passowrd-reset">{props.t('passowrd-reset')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-pass-change-basic' data-key="t-create-password">{props.t('create-password')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-success-msg-basic' data-key="t-success-message">{props.t('success-message')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-twostep-basic' data-key="t-two-step-verify">{props.t('two-step-verify')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-logout-basic' data-key="t-logout">{props.t('logout')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-404' data-key="t-error-404">{props.t('error-404')}</Link></li>
                                            <li><Link className="nav-link" to='/auth-500' data-key="t-error-500">{props.t('error-500')}</Link></li>
                                            <li><Link className="nav-link" to='/coming-soon' data-key="t-coming-soon">{props.t('coming-soon')}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link to='/products-category' className="nav-link" data-key="t-categories">{props.t('categories')}</Link></li>
                                    <li className="nav-item"><Link to='/about-us' className="nav-link" data-key="t-about">{props.t('about')}</Link></li>
                                    <li className="nav-item"><Link to='/purchase-guide' className="nav-link" data-key="t-purchase-guide">{props.t('purchase-guide')}</Link></li>
                                    <li className="nav-item"><Link to='/terms-conditions' className="nav-link" data-key="t-terms-of-service">{props.t('terms-of-service')}</Link></li>
                                    <li className="nav-item"><Link to='/privacy-policy' className="nav-link" data-key="t-privacy-policy">{props.t('privacy-policy')}</Link></li>
                                    <li className="nav-item"><Link to='/store-locator' className="nav-link" data-key="t-store-locator">{props.t('store-locator')}</Link></li>
                                    <li className="nav-item"><Link to='/ecommerce-faq' className="nav-link" data-key="t-faq">{props.t('faq')}</Link></li>
                                    <li className="nav-item"><Link to='/invoice' className="nav-link" data-key="t-invoice">{props.t('invoice')}</Link></li>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-email-template"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subMenuShow("email-template")
                                            }}>{props.t('email-template')}</Link>
                                        <ul className={showSubMenu === "email-template" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                            <li><Link className="nav-link" to='/email-black-friday' data-key="t-black-friday">{props.t('black-friday')}</Link></li>
                                            <li><Link className="nav-link" to='/email-flash-sale' data-key="t-flash-sale">{props.t('flash-sale')}</Link></li>
                                            <li><Link className="nav-link" to='/email-order-success' data-key="t-order-success">{props.t('order-success')}</Link></li>
                                            <li><Link className="nav-link" to='/email-order-success-2' data-key="t-order-success-2">{props.t('order-success-2')}</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link to="//themes.themesbrand.com/toner/react/components/index" className="nav-link" target="_blank" data-key="t-components">{props.t('components')}<span className="badge bg-danger align-bottom ms-1">1.0</span></Link></li>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-multi-level"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                subMenuShow("multi-level")
                                            }}
                                        >{props.t('multi-level')}</Link>
                                        <ul className={showSubMenu === "multi-level" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                            <li><Link className="nav-link" to="/#" data-key="t-level-1.1">{props.t('level-1.1')}</Link></li>
                                            <li><Link className="nav-link" to="/#" data-key="t-level-1.2">{props.t('level-1.2')}</Link></li>
                                            <li className="dropdown dropdown-hover">
                                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-level-1.3"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        listSubMenuShow("level-1.3")
                                                    }}
                                                >{props.t('level-1.3')}</Link>
                                                <ul className={showPageSubMenu === "level-1.3" ? "dropdown-menu submenu show" : "dropdown-menu submenu"}>
                                                    <li><Link className="nav-link" to="/#" data-key="t-level-2.1">{props.t('level-2.1')}</Link></li>
                                                    <li><Link className="nav-link" to="/#" data-key="t-level-2.2">{props.t('level-2.2')}</Link></li>
                                                    <li className="dropdown dropdown-hover">
                                                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-key="t-level-2.3">{props.t('level-2.3')}</Link>
                                                        <ul className="dropdown-menu submenu">
                                                            <li><Link className="nav-link" to="/#" data-key="t-level-3.1">{props.t('level-3.1')}</Link></li>
                                                            <li><Link className="nav-link" to="/#" data-key="t-level-3.2">{props.t('level-3.2')}</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/contact' data-key="t-contact">{props.t('contact')}</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>

                    <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
                    <div className="d-flex align-items-center">
                        <Button type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShow}>
                            <i className="bx bx-search fs-22"></i>
                        </Button>
                        <SearchModal show={show} handleClose={handleClose} />
                        <div className="topbar-head-dropdown ms-1 header-item">
                            <Button type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" data-bs-toggle="offcanvas" data-bs-target="#ecommerceCart" aria-controls="ecommerceCart" onClick={handlecardShow}>
                                <i className="ph-shopping-cart fs-18"></i>
                                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-danger">4</span>
                            </Button>
                        </div>
                        {/* <CardModal show={card} handleClose={handlecardClose} /> */}

                        <Dropdown className="topbar-head-dropdown ms-2 header-item dropdown-hover-end" align="start">
                            <Dropdown.Toggle className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" bsPrefix="btn">
                                <i className="bi bi-sun align-middle fs-20"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu p-2 dropdown-menu-end" id="light-dark-mode">
                                <Dropdown.Item eventKey="light" onClick={() => props.handleMood("light")}><i className="bi bi-sun align-middle me-2"></i> Default  (light mode)</Dropdown.Item>
                                <Dropdown.Item eventKey="dark" onClick={() => props.handleMood("dark")}><i className="bi bi-moon align-middle me-2"></i> Dark</Dropdown.Item>
                                <Dropdown.Item eventKey="light" onClick={() => props.handleMood("light")}><i className="bi bi-moon-stars align-middle me-2"></i> Auto (system default)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="dropdown header-item dropdown-hover-end">
                            <Dropdown>
                                <Dropdown.Toggle id="page-header-user-dropdown" bsPrefix="btn" className="btn btn-icon btn-topbar btn-link rounded-circle" as="a">
                                    <Image className="rounded-circle header-profile-user" src={avtar1} alt="Header Avatar" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='/shop/orderhistory'><i className="bi bi-cart4 text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Order History</span></Dropdown.Item>
                                    <Dropdown.Item href='/shop/order'><i className="bi bi-truck text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Track Orders</span></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><i className="bi bi-speedometer2 text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Dashboard</span></Dropdown.Item>
                                    <Dropdown.Item href='/ecommerce-faq'><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></Dropdown.Item>
                                    <Dropdown.Item href='/account'><i className="bi bi-coin text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$8451.36</b></span></Dropdown.Item>
                                    <Dropdown.Item href='/account'><span className="badge bg-success-subtle text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></Dropdown.Item>
                                    <Dropdown.Item href='/auth-logout-basic'><i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <CardModal show={card} handleClose={handlecardClose} />
        </React.Fragment>
    )
};

export default withRouter(withTranslation()(Header));