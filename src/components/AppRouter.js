import React, {useState,useEffect} from 'react';
import {Routes,Route,useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {authRouter, publicRouter} from "../routes";
import {REGISTRATION_ROUTER, REPAIR_ROUTER} from "../consts";

import Layout from "./Layout";
import Repair from "../pages/Repair";

import ModalAuth from "./modals/ModalAuth";

const AppRouter = () => {
    const isAuth = useSelector((state) => state.user.isAuth)

    const location = useLocation()

    const [ isShowModalAuth, setIsShowModalAuth ] = useState(false)

    useEffect( () => {
        if(authRouter.filter( item => location.pathname.includes(item.path)).length ){
            setIsShowModalAuth(true)
        }
    },[location.pathname])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout /> }>
                    {
                        isAuth && authRouter.map(({path, Component}) =>
                            <Route path={path} element={<Component />} exact key={path} />
                        )
                    }
                    {
                        publicRouter.map(({path, Component}) =>
                            <Route
                                index={path===REPAIR_ROUTER ? true : false}
                                path={path}
                                element={<Component />}
                                key={path} />
                        )
                    }
                    <Route path="*" element={<Repair /> } />
                </Route>

            </Routes>
            {!isAuth && <ModalAuth onHide={() => setIsShowModalAuth(false)} show={isShowModalAuth}/>}
        </div>
    );
};

export default AppRouter;