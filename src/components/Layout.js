import React, {useState} from 'react';
import {Outlet,useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux";

import ModalError from "./modals/ModalError";

import NavBar from "./NavBar";

import {REGISTRATION_ROUTER, RESTORE_PASSWORD} from "../consts";
import {setError} from "../store/app/actionApp";

const Layout = () => {
    const location = useLocation()
    const {error} = useSelector(state => state.app)
    const dispatch = useDispatch()

    const [isError, setIsError] = useState(true)

    const handlerModalError = () => {
        dispatch(setError(null))
    }

    return (
        <>
            <Outlet />
            {
                !location.pathname.includes(REGISTRATION_ROUTER) &&
                !location.pathname.includes(RESTORE_PASSWORD) &&
                <NavBar/>
            }
            {error && <ModalError error={error} show={true} onHide={handlerModalError}/>}
        </>
    );
};

export default Layout;