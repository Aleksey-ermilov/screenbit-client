import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import {httpChangeBirthday, httpChangePhone,httpChangeEmail} from "../../http/userAPI";
import {setUser} from "../../store/user/actionUser";

const ModalChangeUser = ({variant,show,onHide,type='text',title,value=''}) => {
    const {user} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const [text,setText] = useState(value)

    const handlerBtn = () => {
        if (text.trim()){
            if (variant === 'birthday'){
                httpChangeBirthday(text,user.user_id).then(date => {
                    dispatch(setUser({...user,birthday:text}))
                    onHide()
                })
            }
            if (variant === 'phone'){
                httpChangePhone(text,user.user_id).then(date => {
                    dispatch(setUser({...user,phone:text}))
                    onHide()
                })
            }
            if (variant === 'email'){
                httpChangeEmail(text,user.user_id).then(date => {
                    dispatch(setUser({...user,email:text}))
                    onHide()
                })
            }
        }else {
            //error!!!
            console.log('change user error')
        }

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
                    onClick={handlerBtn}
                >Сохранить</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeUser;