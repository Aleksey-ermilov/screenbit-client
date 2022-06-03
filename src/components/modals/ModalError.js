import React from 'react';
import {Modal} from "react-bootstrap";

const ModalError = ({show,onHide,error = 'Error'}) => {

    /*const handlerBtn = () => {
        onHide()
    }*/

    return (
        <div style={{
            display: show ? 'block' : 'none',
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            backgroundColor: 'black',
            opacity: '0.6',
            zIndex: '2000'
        }} >
            <Modal
                show={show}
                onHide={onHide}
                size='sm'
                centered
                style={{zIndex: '2000'}}
                contentClassName='modal-repair'
            >
                <Modal.Header closeButton className='border-bottom-0 pb-0 font-s-18' >
                    Ошибка
                </Modal.Header>
                <Modal.Body  >
                    <div className='color-error font-s-20 item-product-ordering mb-3'>{error}</div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalError;