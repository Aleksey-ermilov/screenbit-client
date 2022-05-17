import React from 'react';
import {Button, Modal} from "react-bootstrap";
import Characteristics from "../Characteristics";

const ModalCharacteristics = ({show,onHide,characteristics}) => {

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
                    Все характеристики
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div >
                    <Characteristics characteristics={characteristics}/>
                </div>
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Закрыть</Button>

            </Modal.Body>
        </Modal>
    );
};

export default ModalCharacteristics;