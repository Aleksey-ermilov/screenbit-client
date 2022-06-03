import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

import Header from "../../components/Header";

import {REPAIR_ROUTER} from "../../consts";

import {httpPasswordRecoveryPassword} from "../../http/userAPI";

import {setError} from "../../store/app/actionApp";

const RestorePasswordNewPassword = () => {
    const navigate = useNavigate();
    const {state: {login} } = useLocation()
    const dispatch = useDispatch()

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            if(newPassword !== confirmPassword){
                dispatch(setError('Поле "Новый проль" и "Подтвердите пароль" не равны'))
                return
            }
            httpPasswordRecoveryPassword(newPassword,login).then(date=>{
                navigate(REPAIR_ROUTER)
            }).catch(data => {
                dispatch(setError(data.response.data.message))
            })

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
                    <div className='text-center unactive-text font-s-30 mb-3'>Вход</div>

                    <div className='font-s-16 text-center mb-2 unactive-text'>
                        Создайте пароль
                    </div>
                    <Form className='mx-5' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formNewPassword" className='mb-3'>
                            <Form.Label className='font-s-16 unactive-text' >Новый пароль</Form.Label>
                            <Form.Control
                                required
                                className='my-form-control'
                                value={newPassword}
                                onChange={ e => setNewPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Новый пароль" не может быть пустым</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword" className='mb-5'>
                            <Form.Label className='font-s-16 unactive-text' >Подтвердите пароль</Form.Label>
                            <Form.Control
                                required
                                className='my-form-control'
                                value={confirmPassword}
                                onChange={ e => setConfirmPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Подтвердите пароль" не может быть пустым</Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            className='my-button  p-2 font-s-16 mb-2 d-block mx-auto btn-modal-login btn-radius'
                            type='submit'
                        >Далее</Button>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default RestorePasswordNewPassword;