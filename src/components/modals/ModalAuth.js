import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'

import {REGISTRATION_ROUTER, REPAIR_ROUTER, RESTORE_PASSWORD} from "../../consts";

import {login} from "../../http/userAPI";

import {fetchCart, fetchFavorites, selectedAddressAction, setAuth, setUser} from "../../store/user/actionUser";
import {setError} from "../../store/app/actionApp";

const ModalAuth = ({show,onHide,}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [isPhone, setIsPhone] = useState(false)

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            login({email, phone, password}).then( data => {
                dispatch(setUser(data.user))
                dispatch(setAuth(true))
                dispatch(fetchFavorites(data.user.favorites ? data.user.favorites : []))
                dispatch(fetchCart(data.user.cart ? data.user.cart : []))
                dispatch( selectedAddressAction(data.user.addresses.length ? data.user.addresses[0] : null) )
            }).catch( data => {
                dispatch(setError(data.response.data.message))
                navigate(REPAIR_ROUTER);
            })

            setPassword('')
            setEmail('')
            setPhone('')
            onHide()


            setValidated(false);
        }
    };

    const handlerBtnRegistration = () => {
        navigate(REGISTRATION_ROUTER)
        setPassword('')
        setEmail('')
        setPhone('')
        onHide()
    }

    const changePhoneTrue = () => {
        setIsPhone(true)
        setEmail('')
        setPhone('')
    }
    const changePhoneFalse = () => {
        setIsPhone(false)
        setEmail('')
        setPhone('')
    }

    const handlerBtnPasswordRecovery = () => {
        navigate(RESTORE_PASSWORD)
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
                onHide={() => {onHide(); navigate(REPAIR_ROUTER); }}
                size='sm'
                centered
                contentClassName='modal-repair'
            >
                <Modal.Header closeButton className='border-bottom-0 pb-0' />
                <Modal.Body  >
                    <div className='font-s-22 text-center mb-3'>?????????? ?? ????????????</div>
                    <div className='font-s-16 text-center mb-2'>
                        <span
                            onClick={changePhoneTrue}
                            className={isPhone ? 'black-text' : 'unactive-text'}
                        >?????????? ????????????????</span>
                        /
                        <span
                            onClick={changePhoneFalse}
                            className={isPhone ? 'unactive-text' : 'black-text'}
                        >Email</span>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {
                            isPhone ?
                                <div className='mb-2'>
                                    <Form.Control
                                        required
                                        placeholder={'?????????? ????????????????'}
                                        className='my-form-control '
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">???????? "?????????? ????????????????" ???? ?????????? ???????? ????????????</Form.Control.Feedback>
                                </div>
                            :
                            <div className='mb-2'>
                                <Form.Control
                                    required
                                    type='email'
                                    placeholder={'Email'}
                                    className='my-form-control'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">???????? "Email" ???? ?????????? ???????? ????????????</Form.Control.Feedback>
                            </div>
                            }
                        <div className='mb-2'>
                            <Form.Control
                                required
                                placeholder={'????????????'}
                                className='my-form-control'
                                type='password'
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">???????? "????????????" ???? ?????????? ???????? ????????????</Form.Control.Feedback>
                        </div>

                        <div
                            onClick={handlerBtnPasswordRecovery}
                            className='font-s-16 mb-3'
                        >???????????????????????? ????????????</div>
                        <Button
                            className='my-button  p-2 font-s-16 mb-2 d-block mx-auto btn-modal-login btn-radius'
                            type='submit'
                        >??????????</Button>
                    </Form>
                    <div onClick={handlerBtnRegistration} className='font-s-16 text-center mb-4'>????????????????????????????????????</div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalAuth;