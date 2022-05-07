import React from 'react';
import {Outlet,useLocation} from 'react-router-dom'

import NavBar from "./NavBar";

import {REGISTRATION_ROUTER, RESTORE_PASSWORD} from "../consts";

const Layout = () => {
    const location = useLocation()

    return (
        <>
            <Outlet />
            {
                !location.pathname.includes(REGISTRATION_ROUTER) &&
                !location.pathname.includes(RESTORE_PASSWORD) &&
                <NavBar/>
            }
        </>
    );
};

export default Layout;