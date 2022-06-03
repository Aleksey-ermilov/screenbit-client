import React from 'react';
import {Modal} from "react-bootstrap";

const ModalSuccessPay = ({show,onHide,}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size='sm'
            centered
            contentClassName='modal-repair'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0' />
            <Modal.Body  >
                <div className='unactive-text font-s-20 item-product-ordering mb-3'>Ваш заказ в обработке, подробности можно посмотреть в личном кабинете</div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalSuccessPay;