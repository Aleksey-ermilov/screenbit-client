import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import {httpChangeGender} from "../../http/userAPI";
import {setUser} from "../../store/user/actionUser";
import {setError} from "../../store/app/actionApp";

const ModalChangeGender = ({show,onHide,value = ''}) => {
    const {user} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const [text,setText] = useState(user.gender)

    const handlerBtn = () => {
        httpChangeGender(text,user.user_id).then(date => {
            dispatch(setUser({...user,gender:text}))
            onHide()
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })

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
                    Укажите пол
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='mb-4 font-s-18'>
                    <Form.Check
                        id={'1'}
                        type={'radio'}
                        label={'Мужской'}
                        name={'gender'}
                        className=' mb-2'
                        checked={text === 'Мужской'}
                        onChange={ e => setText('Мужской')}
                    />
                    <Form.Check
                        id={'2'}
                        type={'radio'}
                        label={'Женский'}
                        name={'gender'}
                        className=' mb-2'
                        checked={text === 'Женский'}
                        onChange={ e => setText('Женский')}
                    />
                </Form>
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Сохранить</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeGender;