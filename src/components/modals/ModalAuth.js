import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTER, RESTORE_PASSWORD} from "../../consts";

const ModalAuth = ({show,onHide,}) => {
    const navigate = useNavigate();

    const [isPhone, setIsPhone] = useState(false)

    const [value, setValue] = useState('')

    const handlerBtn = () => {
        onHide()
    }

    return (
        <div style={{
            display: show ? 'block' : 'none',
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            backgroundColor: 'black',
            opacity: '0.6'
        }} >
            <Modal
                show={show}
                onHide={onHide}
                size='sm'
                centered
                contentClassName='modal-repair'
            >
                <Modal.Header closeButton className='border-bottom-0 pb-0' />
                <Modal.Body  >
                    <div className='font-s-22 text-center mb-3'>Войти в Акаунт</div>
                    <div className='font-s-16 text-center mb-2'>
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
                    <Form>
                        {
                            isPhone ? <Form.Control
                                placeholder={'Номер телефона'}
                                className='my-form-control mb-2'
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            :
                            <Form.Control
                            placeholder={'Email'}
                            className='my-form-control mb-2'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                            }
                        <Form.Control
                            placeholder={'Пароль'}
                            className='my-form-control mb-2'
                            value={value}
                            onChange={ e => setValue(e.target.value)}
                        />
                    </Form>
                    <div
                        onClick={() => navigate(RESTORE_PASSWORD)}
                        className='font-s-16 mb-3'
                    >Восстановить доступ</div>
                    <Button
                        className='my-button  p-2 font-s-16 mb-2 d-block mx-auto btn-modal-login btn-radius'
                        onClick={handlerBtn}
                    >Войти</Button>
                    <div onClick={() => navigate(REGISTRATION_ROUTER)} className='font-s-16 text-center mb-4'>Зарегистрироваться</div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalAuth;