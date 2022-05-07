import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap";

const ModalChangeUser = ({show,onHide,type='text',title,value = '',setValue}) => {

    const [text,setText] = useState(value)

    const handlerBtn = () => {
        setValue(text)
        setText('')
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
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form.Control
                    type={type}
                    className='my-form-control mb-4'
                    value={text}
                    onChange={ e => setText(e.target.value)}
                />
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Закрыть</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeUser;