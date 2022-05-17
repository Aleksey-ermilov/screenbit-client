import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import {httpAddAddress} from "../../http/userAPI";
import {selectedAddressAction, setAddresses} from "../../store/user/actionUser";
import Loading from "../../pages/Loading";

const ModalAddAddress = ({show,onHide,}) => {

    const {user_id} = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)

    const handlerBtn = () => {
       if(text.trim()){
           setLoading(true)
           httpAddAddress(text,user_id).then(date =>{
               dispatch(setAddresses(date.addresses))
               dispatch(selectedAddressAction(date.addresses[0]))
               setText('')
               onHide()
           }).finally(() => setLoading(false))
       }else {
           //error!!!
           console.log('Field address not empty')
       }
    }

    if (loading){
        return <Loading />
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
                    Добавить адрес
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form.Control
                    className='my-form-control mb-4'
                    value={text}
                    onChange={ e => setText(e.target.value)}
                />
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Добавить</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalAddAddress;