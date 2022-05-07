import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {REPAIR_ROUTER} from "../../consts";
import Header from "../../components/Header";
import {Button, Form} from "react-bootstrap";

const RestorePasswordNewPassword = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState('')

    const handlerBtn = () => {
        navigate(REPAIR_ROUTER)
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
                    <div className='text-center unactive-text font-s-30 mb-3'>Вход</div>

                    <div className='font-s-16 text-center mb-2 unactive-text'>
                        Создайте пароль
                    </div>
                    <Form className='mb-3'>
                        <Form.Group controlId="formNewPassword" className='mb-3'>
                            <Form.Label className='font-s-16 unactive-text' >Новый пароль</Form.Label>
                            <Form.Control
                                className='my-form-control'
                                value={value}
                                onChange={ e => setValue(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword" className='mb-5'>
                            <Form.Label className='font-s-16 unactive-text' >Подтвердите пароль</Form.Label>
                            <Form.Control
                                className='my-form-control'
                                value={value}
                                onChange={ e => setValue(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Button
                        className='my-button  p-2 font-s-16 mb-2 d-block mx-auto btn-modal-login btn-radius'
                        onClick={handlerBtn}
                    >Далее</Button>
                </div>

            </div>

        </div>
    );
};

export default RestorePasswordNewPassword;