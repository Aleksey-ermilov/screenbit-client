import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {RESTORE_PASSWORD_COD, RESTORE_PASSWORD_NEW_PASSWORD} from "../../consts";
import Header from "../../components/Header";
import {Button, Form} from "react-bootstrap";
import {httpPasswordRecoveryCode} from "../../http/userAPI";

const RestorePasswordCod = () => {
    const navigate = useNavigate();
    const {state: {login} } = useLocation()

    const [value, setValue] = useState('')

    const handlerBtn = () => {
        if (!value.trim()){
            //error!!!
            console.log('field not empty')
            return
        }
        httpPasswordRecoveryCode(value,login).then(date => {
            navigate(RESTORE_PASSWORD_NEW_PASSWORD,{ state:{ login } })
        })
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
                        Введите код
                    </div>
                    <Form className='mb-3'>
                        <Form.Control
                            className='my-form-control mb-2 font-s-14'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
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

export default RestorePasswordCod;