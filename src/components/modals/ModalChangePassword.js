import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap";
import {useSelector} from "react-redux";

import {httpChangePassword} from "../../http/userAPI";

const ModalChangePassword = ({show,onHide,}) => {
    const {user_id} = useSelector( state => state.user.user)

    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const handlerBtn = () => {
        if (!(oldPassword.trim() && newPassword.trim() && confirmPassword.trim())){
            //error!!
            console.log('fields not empty')
            return
        }
        if(newPassword !== confirmPassword){
            //error
            console.log('password not equal')
            return
        }
        httpChangePassword(newPassword,oldPassword,user_id).then(date => {
            onHide()
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')
        })
    }

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
                <Form.Group controlId="formOldPassword" className='mb-3'>
                    <Form.Label className='font-s-18' >Старый пароль</Form.Label>
                    <Form.Control
                        className='my-form-control'
                        value={oldPassword}
                        onChange={ e => setOldPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formNewPassword" className='mb-3'>
                    <Form.Label className='font-s-18' >Новый пароль</Form.Label>
                    <Form.Control
                        className='my-form-control'
                        value={newPassword}
                        onChange={ e => setNewPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" className='mb-5'>
                    <Form.Label className='font-s-18' >Подтвердите пароль</Form.Label>
                    <Form.Control
                        className='my-form-control'
                        value={confirmPassword}
                        onChange={ e => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Изменить пароль</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangePassword;