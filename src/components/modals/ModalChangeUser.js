import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import {httpChangeBirthday, httpChangePhone,httpChangeEmail} from "../../http/userAPI";
import {setUser} from "../../store/user/actionUser";
import {setError} from "../../store/app/actionApp";

const ModalChangeUser = ({variant,show,onHide,type='text',title,value=''}) => {
    const {user} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const [text,setText] = useState(value)

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            if (variant === 'birthday'){
                httpChangeBirthday(text,user.user_id).then(date => {
                    dispatch(setUser({...user,birthday:text}))
                    onHide()
                }).catch(data => {
                    dispatch(setError(data.response.data.message))
                })
            }
            if (variant === 'phone'){
                httpChangePhone(text,user.user_id).then(date => {
                    dispatch(setUser({...user,phone:text}))
                    onHide()
                }).catch(data => {
                    dispatch(setError(data.response.data.message))
                })
            }
            if (variant === 'email'){
                httpChangeEmail(text,user.user_id).then(date => {
                    dispatch(setUser({...user,email:text}))
                    onHide()
                }).catch(data => {
                    dispatch(setError(data.response.data.message))
                })
            }

            setValidated(false);
        }
    };

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <Form.Control
                            required
                            type={type}
                            className='my-form-control'
                            value={text}
                            onChange={ e => setText(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле не может быть пустым</Form.Control.Feedback>
                    </div>
                    <Button
                        className='my-button w-100 p-2 font-s-18 mb-1'
                        // onClick={handlerBtn}
                        type='submit'
                    >Сохранить</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeUser;