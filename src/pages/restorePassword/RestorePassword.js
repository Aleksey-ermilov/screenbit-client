import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {RESTORE_PASSWORD_COD} from "../../consts";
import Header from "../../components/Header";
import {Button, Form} from "react-bootstrap";
import {httpPasswordRecoveryLogin} from "../../http/userAPI";

const RestorePassword = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState('')

    const handlerBtn = () => {
        if (!value.trim()){
            //error!!!
            console.log('field not empty')
            return
        }
        httpPasswordRecoveryLogin(value).then(date => {
            navigate(RESTORE_PASSWORD_COD,{ state:{ login: value } })
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
                        Введите Email
                    </div>
                    <Form className='mb-3'>
                        <Form.Control
                            className='my-form-control mb-2 font-s-14'
                            value={value}
                            type={'email'}
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

export default RestorePassword;