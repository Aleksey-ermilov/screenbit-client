import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'

import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";
import {REGISTRATION_EMAIL_ROUTER, REGISTRATION_PHONE_PASSWORD_ROUTER, REGISTRATION_PHONE_ROUTER} from "../../consts";

const Registration = () => {
    const navigate = useNavigate();

    const [isPhone, setIsPhone] = useState(false)

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            isPhone ? navigate(REGISTRATION_PHONE_PASSWORD_ROUTER,{ state:{phone,} })
                :
                navigate(REGISTRATION_PHONE_PASSWORD_ROUTER,{ state:{email,} })

            setValidated(false);
        }
    };

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

                    <div className='font-s-16 text-center mb-2 '>
                        <span
                            onClick={() => setIsPhone(true)}
                            className={isPhone ? 'black-text' : 'unactive-text'}
                        >Номер телефона</span>
                        /
                        <span
                            onClick={() => setIsPhone(false)}
                            className={isPhone ? 'unactive-text' : 'black-text'}
                        >Email</span>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {
                            isPhone ?
                                <div className='mb-3'>
                                    <Form.Control
                                        required
                                        type={'tel'}
                                        placeholder={'Номер телефона'}
                                        className='my-form-control font-s-14'
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">Поле "Номер телефона" не может быть пустым</Form.Control.Feedback>
                                </div>
                                :
                                <div className='mb-3'>
                                    <Form.Control
                                        required
                                        type={'email'}
                                        placeholder={'Email'}
                                        className='my-form-control  font-s-14'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">Поле "Email" не может быть пустым</Form.Control.Feedback>
                                </div>
                        }

                        <Button
                            className='my-button  p-2 font-s-16 mb-2 d-block mx-auto btn-modal-login btn-radius'
                            type='submit'
                        >Зарегистрироваться</Button>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default Registration;