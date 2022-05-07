import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const ModalChangeName = ({show,onHide,}) => {
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
                    Введите данные
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formName" className='mb-3'>
                    <Form.Label className='font-s-18' >Имя</Form.Label>
                    <Form.Control
                        placeholder={'Имя'}
                        className='my-form-control'
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formLastname" className='mb-3'>
                    <Form.Label className='font-s-18' >Фамилия</Form.Label>
                    <Form.Control
                        placeholder={'Фамилия'}
                        className='my-form-control'
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPatronymic" className='mb-5'>
                    <Form.Label className='font-s-18' >Отчество</Form.Label>
                    <Form.Control
                        placeholder={'Отчество'}
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

export default ModalChangeName;