import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import {httpChangePassword} from "../../http/userAPI";
import {setError} from "../../store/app/actionApp";

const ModalChangePassword = ({show,onHide,}) => {
    const {user_id} = useSelector( state => state.user.user)
    const dispatch = useDispatch()

    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

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
            httpChangePassword(newPassword,oldPassword,user_id).then(date => {
                onHide()
                setOldPassword('')
                setNewPassword('')
                setConfirmPassword('')
            }).catch(data => {
                dispatch(setError(data.response.data.message))
            })

            setValidated(false);
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size='sm'
            centered
            contentClassName='modal-repair'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Введите пароль
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formOldPassword" className='mb-3'>
                        <Form.Label className='font-s-18' >Старый пароль</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control'
                            value={oldPassword}
                            onChange={ e => setOldPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Старый пароль" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formNewPassword" className='mb-3'>
                        <Form.Label className='font-s-18' >Новый пароль</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control'
                            value={newPassword}
                            onChange={ e => setNewPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Новый пароль" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword" className='mb-5'>
                        <Form.Label className='font-s-18' >Подтвердите пароль</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control'
                            value={confirmPassword}
                            onChange={ e => setConfirmPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Подтвердите пароль" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        className='my-button w-100 p-2 font-s-18 mb-1'
                        type='submit'
                    >Изменить пароль</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangePassword;