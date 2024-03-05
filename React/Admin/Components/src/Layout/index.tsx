import React, { ReactNode, useEffect } from 'react';
import { createSelector } from 'reselect';

//import actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType,
    changeBodyImageType
} from "slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import TopBar from './TopBar';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    const dispatch: any = useDispatch();

    const selectLeadData = createSelector(
        (state: any) => state.Layout,
        (layoutTypes) => ({
            layoutType: layoutTypes.layoutType,
            layoutThemeType: layoutTypes.layoutThemeType,
            leftSidebarType: layoutTypes.leftSidebarType,
            layoutModeType: layoutTypes.layoutModeType,
            layoutWidthType: layoutTypes.layoutWidthType,
            layoutPositionType: layoutTypes.layoutPositionType,
            topbarThemeType: layoutTypes.topbarThemeType,
            leftsidbarSizeType: layoutTypes.leftsidbarSizeType,
            leftSidebarViewType: layoutTypes.leftSidebarViewType,
            leftSidebarImageType: layoutTypes.leftSidebarImageType,
            bodyImageType: layoutTypes.bodyImageType
        })
    );

    const {
        layoutType,
        layoutThemeType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        bodyImageType
    } = useSelector(selectLeadData);

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||
            layoutThemeType ||
            leftSidebarType ||
            layoutModeType ||
            layoutWidthType ||
            layoutPositionType ||
            topbarThemeType ||
            leftsidbarSizeType ||
            leftSidebarViewType ||
            leftSidebarImageType ||
            bodyImageType
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLeftsidebarViewType(leftSidebarViewType));
            dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeSidebarTheme(leftSidebarType));
            dispatch(changeLayoutWidth(layoutWidthType));
            dispatch(changeLayoutPosition(layoutPositionType));
            dispatch(changeTopbarTheme(topbarThemeType));
            dispatch(changeLayout(layoutType));
            dispatch(changeSidebarImageType(leftSidebarImageType));
            dispatch(changeBodyImageType(bodyImageType));
        }
    }, [layoutType,
        layoutThemeType,
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        bodyImageType,
        dispatch]);

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <TopBar />
                <Header />
                <Sidebar layoutType={layoutType} />
                <div className="main-content">
                    {children}
                    <Footer />
                </div>
            </div>
            <RightSidebar />
        </React.Fragment>
    );
}

export default Layout;