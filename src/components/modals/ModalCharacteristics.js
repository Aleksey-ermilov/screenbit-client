import React from 'react';
import {Button, Modal} from "react-bootstrap";

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
                    {
                        characteristics.map( (characteristic, i) => {

                            const keys = Object.keys(characteristic)
                            return (
                                <div className='font-s-16 mb-3' key={keys[0]}>
                                    {keys[0]}
                                    <div className='mt-2'>{
                                        characteristic[keys[0]].map( char => {
                                            const keys = Object.keys(char)
                                            return (
                                                <div
                                                    className='font-s-14 d-flex justify-content-between '
                                                    key={keys[0]}
                                                >
                                                    <div>{keys[0]}</div>
                                                    <div>{char[keys[0]]}</div>
                                                </div>)
                                        })
                                    }</div>
                                </div>)
                        })
                    }


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