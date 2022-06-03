import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

import Header from "../../components/Header";

import {RESTORE_PASSWORD_COD} from "../../consts";

import {httpPasswordRecoveryLogin} from "../../http/userAPI";

import {setError} from "../../store/app/actionApp";

const RestorePassword = () => {
    const navigate = useNavigate();
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
            httpPasswordRecoveryLogin(value).then(date => {
                navigate(RESTORE_PASSWORD_COD,{ state:{ login: value } })
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
                        Введите Email
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <Form.Control
                                required
                                className='my-form-control font-s-14'
                                value={value}
                                type={'email'}
                                onChange={e => setValue(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Email" не может быть пустым</Form.Control.Feedback>
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

export default RestorePassword;