import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button,Form} from "react-bootstrap";

import Header from "../components/Header";

import {HISTORY_PRODUCT_ROUTER, REPAIR_ROUTER} from "../consts";

const Settings = () => {
    const navigate = useNavigate();
    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Настройки
                    </div>
                </div>
            </Header>
            <div className='px-3'>
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
                        onClick={() => navigate(REPAIR_ROUTER)}
                        className='p-3 secondary  btn-exit font-s-18'
                    >Выйти</Button>
                </div>
            </div>

        </div>
    );
};

export default Settings;