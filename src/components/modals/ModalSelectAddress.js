import React,{useState} from 'react';
import {Button, Card, Form, Modal} from "react-bootstrap";

const ModalSelectAddress = ({addresses,getAddress,show,onHide,}) => {

    const [address, setAddress] = useState(addresses[0])

    const handlerBtn = () => {
        getAddress(address)
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={handlerBtn}
            size='sm'
            centered
            contentClassName='modal-repair'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Выбрать адрес
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: '530px', overflow: 'auto'}} >
                <Form>
                {
                    addresses.length ?
                        addresses.map( item =>
                            <Card className='p-3 mb-2 secondary card-address font-s-18 z-index-0 shadow-mine' key={item.id}>
                                    <Form.Check
                                        label={item.address}
                                        type={'radio'}
                                        name={'selectedAddresses'}
                                        id={item.id}
                                        onChange={() => setAddress(item)}
                                        checked={item.id === address.id}
                                    />
                            </Card>
                        )
                        :
                        <div className='font-s-24 text-center my-4'>Список пуст</div>
                }
                </Form>
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Закрыть</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalSelectAddress;