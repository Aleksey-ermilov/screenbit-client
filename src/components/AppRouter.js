import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {authRouter, publicRouter} from "../routes";
import {REPAIR_ROUTER} from "../consts";
import Layout from "./Layout";
import Repair from "../pages/Repair";

const AppRouter = () => {
    const isAuth = useSelector((state) => state.user.isAuth)
    return (
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
    );
};

export default AppRouter;