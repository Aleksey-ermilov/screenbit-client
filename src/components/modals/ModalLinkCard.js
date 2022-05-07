import React from 'react';
import {Button, Modal, Form} from "react-bootstrap";

const ModalLinkCard = ({show,onHide,}) => {

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
            <Modal.Header closeButton className='border-bottom-0 pb-0' />
            <Modal.Body >
                <Form.Control
                    className='my-form-control mb-2 font-s-16'
                    placeholder={'Номер карты'}
                />
                <div className='d-flex justify-content-between mb-4'>
                    <Form.Control
                        className='my-form-control font-s-16 me-3'
                        placeholder={'Срок действия'}
                    />
                    <Form.Control
                        className='my-form-control font-s-16'
                        placeholder={'CVV/CVC'}
                    />
                </div>


                <Button
                    className='my-button w-100 p-2 font-s-24 mb-1'
                    onClick={() => handlerBtn()}
                >Добавить</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalLinkCard;