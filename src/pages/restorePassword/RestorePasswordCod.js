import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

import Header from "../../components/Header";

import {RESTORE_PASSWORD_COD, RESTORE_PASSWORD_NEW_PASSWORD} from "../../consts";

import {httpPasswordRecoveryCode} from "../../http/userAPI";

import {setError} from "../../store/app/actionApp";

const RestorePasswordCod = () => {
    const navigate = useNavigate();
    const {state: {login} } = useLocation()
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            httpPasswordRecoveryCode(value,login).then(date => {
                navigate(RESTORE_PASSWORD_NEW_PASSWORD,{ state:{ login } })
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
                        Введите код
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <Form.Control
                                required
                                className='my-form-control font-s-14'
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Код" не может быть пустым</Form.Control.Feedback>
                        </div>

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

export default RestorePasswordCod;