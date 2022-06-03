import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {httpChangeName} from "../../http/userAPI";
import {setUser} from "../../store/user/actionUser";
import {setError} from "../../store/app/actionApp";

const ModalChangeName = ({show,onHide,}) => {

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [patronymic,setPatronymic] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            httpChangeName(name.trim(),lastname.trim(),patronymic.trim(),user.user_id).then(date => {
                dispatch(setUser({...user,name,lastname,patronymic}))
                onHide()
            }).catch(data => {
                dispatch(setError(data.response.data.message))
            })

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
                    Введите данные
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className='mb-3'>
                        <Form.Label className='font-s-18' >Имя</Form.Label>
                        <Form.Control
                            required
                            placeholder={'Имя'}
                            className='my-form-control'
                            value={name}
                            onChange={ e => setName(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Имя" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLastname" className='mb-3'>
                        <Form.Label className='font-s-18' >Фамилия</Form.Label>
                        <Form.Control
                            placeholder={'Фамилия'}
                            className='my-form-control'
                            value={lastname}
                            onChange={ e => setLastname(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPatronymic" className='mb-5'>
                        <Form.Label className='font-s-18' >Отчество</Form.Label>
                        <Form.Control
                            placeholder={'Отчество'}
                            className='my-form-control'
                            value={patronymic}
                            onChange={ e => setPatronymic(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        className='my-button w-100 p-2 font-s-18 mb-1'
                        type='submit'
                        // onClick={handlerBtn}
                    >Сохранить</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeName;