import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap";

const ModalChangePassword = ({show,onHide,}) => {

    const [value,setValue] = useState('')

    const handlerBtn = () => {

        onHide()
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
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formNewPassword" className='mb-3'>
                    <Form.Label className='font-s-18' >Новый пароль</Form.Label>
                    <Form.Control
                        className='my-form-control'
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" className='mb-5'>
                    <Form.Label className='font-s-18' >Подтвердите пароль</Form.Label>
                    <Form.Control
                        className='my-form-control'
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />
                </Form.Group>
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Закрыть</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangePassword;