import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";

import {REPAIR_ROUTER} from "../../consts";

import Header from "../../components/Header";
import {registrationAuth} from "../../http/userAPI";
import {setLoading} from "../../store/app/actionApp";
import {setAuth, setUser} from "../../store/user/actionUser";

const RegistrationPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {user_id} = useSelector( state => state.user.user)

    const {state: {email,phone} } = useLocation()

    const [password, setPassword] = useState('')

    const handlerBtn = () => {

        registrationAuth({phone,email,password,user_id}).then(data =>{
            dispatch(setLoading(true))
            dispatch(setUser(data.user))
            dispatch(setAuth(true))
            navigate(REPAIR_ROUTER)
        }).finally(() => dispatch(setLoading(true)))
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

                    <div className='font-s-16 text-center mb-2 unactive-text'>
                        Пароль
                    </div>
                    <Form className='mb-3'>
                        <Form.Control
                            type={'password'}
                            className='my-form-control mb-2 font-s-14'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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

export default RegistrationPassword;