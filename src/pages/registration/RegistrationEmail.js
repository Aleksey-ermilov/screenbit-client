import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

import {REGISTRATION_PHONE_PASSWORD_ROUTER} from "../../consts";

import Header from "../../components/Header";

const RegistrationEmail = () => {
    const navigate = useNavigate();

    const handlerBtn = () => {
        navigate(REGISTRATION_PHONE_PASSWORD_ROUTER)
    }

    return (
        <div>
            <Header className='header-bar-registration font-s-24 text-center secondary-text p-1' >
                SCREENBIT
            </Header>

            <div
                className='d-flex  justify-content-center align-items-center'
                style={{height: window.innerHeight - 54}}
            >
                <div>
                    <div className='text-center unactive-text font-s-30 mb-3'>Регистрация</div>
                    <div className='text-center unactive-text font-s-16 mb-3'>Вам был выслан код на<br/> почту пожалуйста<br/> подтвердите его</div>
                    <Button
                        className='my-button  p-2 font-s-16 mb-2 d-block mx-auto btn-modal-login btn-radius'
                        onClick={handlerBtn}
                    >Далее</Button>
                </div>

            </div>

        </div>
    );
};

export default RegistrationEmail;