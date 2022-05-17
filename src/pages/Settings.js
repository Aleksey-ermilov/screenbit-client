import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";

import Header from "../components/Header";

import {HISTORY_PRODUCT_ROUTER, REPAIR_ROUTER} from "../consts";

import {fetchCart, fetchFavorites, setAuth, setUser} from "../store/user/actionUser";
import {setLoading} from "../store/app/actionApp";
import {registrationUser} from "../http/userAPI";

const Settings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handlerBtnExit = () => {
        navigate(REPAIR_ROUTER)
        dispatch(setAuth(false))
        dispatch(setUser(null))
        dispatch(fetchFavorites([]))
        dispatch(fetchCart([]))
        localStorage.setItem('token',null)
        localStorage.setItem('user',null)
        dispatch(setLoading(true))
        registrationUser().then( data => {
            dispatch(setUser(data.user))
        }).finally(() => dispatch(setLoading(false)))
    }

    return (
        <div className='margin-bottom-address'>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Настройки
                    </div>
                </div>
            </Header>
            <div className='px-3 head-margin-80'>
                <div>
                    <div className='mb-3 font-s-20 d-flex justify-content-between align-items-center'>
                        <div>Уведомления</div>
                        <label className="switch">
                            <input type="checkbox" name={'notifications'} onChange={ e => console.log(e.target.name,e.target.checked)} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div onClick={ () => navigate(HISTORY_PRODUCT_ROUTER)} className='mb-3 font-s-20'>История товаров</div>
                    <div className='mb-3 font-s-20 d-flex justify-content-between align-items-center'>
                        <div>Данные о местоположении</div>
                        <label className="switch">
                            <input type="checkbox" name={'geolacation'} onChange={ e => console.log(e.target.name,e.target.checked)} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div>
                    <Button
                        onClick={handlerBtnExit}
                        className='p-2 secondary  btn-exit font-s-22'
                    >Выйти</Button>
                </div>
            </div>

        </div>
    );
};

export default Settings;