import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { changeLayoutMood, changeThemeMood } from 'slices/thunk';
import TopBar from './TopBar';
import Footer from './Footer';
import Header from "./Header";
import OnlineChat from 'Components/OnlineChat';
import { MainModal } from 'Components/MainModal';
import { createSelector } from 'reselect';

const Layout = (props: any) => {

    let location = useLocation();
    const dispatch: any = useDispatch();

    const selectProperties = createSelector(
        (state: any) => state.Layout,
        (layout) => ({
            footerModeType: layout.footerModeType,
            layoutThemeMode: layout.layoutThemeMode
        })
    )

    const { footerModeType, layoutThemeMode } = useSelector(selectProperties);

    //change footer theme on review page
    const footertheme = props.isLight ? "light" : "dark";

    //change them mode
    const handleThemeMood = (value: any) => {
        if (changeThemeMood) {
            dispatch(changeThemeMood(value))
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };
    //top arrow icone function
    const ScrollbarTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    useEffect(() => {
        if (footerModeType || layoutThemeMode) {
            dispatch(changeLayoutMood(footertheme));
            dispatch(changeThemeMood(layoutThemeMode));
        }
    }, [layoutThemeMode, dispatch, footertheme, footerModeType]);

    return (
        <React.Fragment>
            {location.pathname && <MainModal location={location.pathname} />}
            <TopBar />
            <Header handleMood={handleThemeMood} />
            {props.children}
            <Footer />
            <Link to="//themes.themesbrand.com/toner/react/backend/dashboard"
                target='_blank'
                className="btn btn-warning position-fixed bottom-0 start-0 m-5 z-3 btn-hover d-none d-lg-block">
                <i className="bi bi-database align-middle me-1"></i> Backend</Link>
            <OnlineChat />
            <Button
                onClick={() => ScrollbarTop()}
                variant="info"
                className="btn-icon"
                style={{ bottom: "50px"}}
                id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </Button>

        </React.Fragment>
    );
}

export default Layout;