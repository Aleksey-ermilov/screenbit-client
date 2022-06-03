import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import {httpAddAddress} from "../../http/userAPI";
import {selectedAddressAction, setAddresses} from "../../store/user/actionUser";
import Loading from "../../pages/Loading";
import {setError} from "../../store/app/actionApp";

const ModalAddAddress = ({show,onHide,}) => {

    const {user_id} = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {

            setLoading(true)
            httpAddAddress(text,user_id).then(date =>{
                dispatch(setAddresses(date.addresses))
                dispatch(selectedAddressAction(date.addresses[0]))
                setText('')
                onHide()
            }).catch(data => {
                dispatch(setError(data.response.data.message))
            }).finally(() => setLoading(false))

            setValidated(false);
        }
    };

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <Form.Control
                            required
                            className='my-form-control'
                            value={text}
                            onChange={ e => setText(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Адрес" не может быть пустым</Form.Control.Feedback>
                    </div>
                    <Button
                        className='my-button w-100 p-2 font-s-18 mb-1'
                        type='submit'
                    >Добавить</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalAddAddress;