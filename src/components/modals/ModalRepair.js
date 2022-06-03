import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Button, Form, Modal} from "react-bootstrap";

import ModalAuth from "./ModalAuth";
import {setComplexRepair, setError, setSimpleRepair} from "../../store/app/actionApp";
import {httpRepair} from "../../http/userAPI";
import {setUser} from "../../store/user/actionUser";

const ModalRepair = ({os,show,onHide,}) => {
    const {isAuth,user} = useSelector((state) => state.user)
    const complexRepair = useSelector((state) => state.app.complexRepair)
    const simpleRepair = useSelector((state) => state.app.simpleRepair)

    const dispatch = useDispatch()

    const [ isShowModalAuth, setIsShowModalAuth ] = useState(false)

    const [device, setDevice] = useState('')
    const [brand, setBrand] = useState('')
    const [problem, setProblem] = useState('')

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {

            if(!isAuth){
                setIsShowModalAuth(true)
            }else {
                const repair = {
                    device,brand,problem,os,
                    simpleRepair: simpleRepair.filter(item => item.selected),
                    complexRepair: complexRepair.filter(item => item.selected)
                }
                httpRepair(repair,user.user_id).then( data => {
                    dispatch(setUser({...user,repair_status:data.repair }))
                    onHide()
                    setProblem('')
                    setBrand('')
                    setDevice('')
                    repair.simpleRepair.forEach( item => dispatch(setSimpleRepair(item.id)) )
                    repair.complexRepair.forEach( item =>dispatch(setComplexRepair(item.id)) )
                }).catch(data => {
                    dispatch(setError(data.response.data.message))
                })
            }

            setValidated(false);
        }
    };

    const totalComplexRepair = complexRepair && (
        complexRepair.filter( item => item.selected === true)
            .reduce((partial_sum, item) => partial_sum + +item.price,0))
    const totalSimpleRepair = simpleRepair && (
        simpleRepair.filter( item => item.selected === true)
        .reduce((partial_sum, item) => partial_sum + +item.price,0))

    return (
        <Modal
            show={show}
            onHide={() => {
                onHide()
                setProblem('')
                setBrand('')
                setDevice('')
            }}
            size='sm'
            centered
            contentClassName='modal-repair'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Заполните поля
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formDevice" className='mb-3'>
                        <Form.Label className='font-s-16' >Устройство</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control'
                            value={device}
                            onChange={ e => setDevice(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Устройство" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBrand" className='mb-3'>
                        <Form.Label className='font-s-16 ' >Бренд</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control'
                            value={brand}
                            onChange={ e => setBrand(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Бренд" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formDescProblem" className='mb-4'>
                        <Form.Label className='font-s-16' >Опишите проблему</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            className='my-form-control big-form-control-modal '
                            value={problem}
                            onChange={ e => setProblem(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Опишите проблему" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>

                    <div className='mb-4'>
                        <Modal.Title
                            className='font-s-20 fw-normal mb-3'
                        >
                            Стандартный ремонт
                        </Modal.Title>
                        <div className='d-flex flex-wrap font-s-12 ' >
                            {
                                simpleRepair && simpleRepair.map( item =>
                                    <span
                                        key={item.id}
                                        className={`me-1 mb-2 ${item.selected ? 'type-repair-modal-active' : 'type-repair-modal'}`}
                                        onClick={() => dispatch(setSimpleRepair(item.id))}
                                    >{item.name}</span>
                                )
                            }
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Modal.Title
                            className='font-s-20 fw-normal mb-3'
                        >
                            Сложный ремонт
                        </Modal.Title>
                        <div className='d-flex flex-wrap font-s-12 ' >
                            {
                                complexRepair && complexRepair.map( item =>
                                    <span
                                        key={item.id}
                                        className={`me-1 mb-2 ${item.selected ? 'type-repair-modal-active' : 'type-repair-modal'}`}
                                        onClick={() => dispatch(setComplexRepair(item.id))}
                                    >{item.name}</span>
                                )
                            }
                        </div>
                    </div>

                    <div className='mb-4 d-flex justify-content-between'>
                        <Modal.Title
                            className='font-s-20 fw-normal mb-3'
                        >
                            Стоимость:
                        </Modal.Title>
                        <Modal.Title
                            className='font-s-20 fw-normal mb-3'
                        >
                            {totalSimpleRepair + totalComplexRepair} р.
                        </Modal.Title>
                    </div>

                    <Button
                        className='my-button w-100 p-2 font-s-18 mb-1'
                        type='submit'
                    >Заказать ремонт</Button>
                </Form>
            </Modal.Body>

            {!isAuth && <ModalAuth onHide={() => setIsShowModalAuth(false)} show={isShowModalAuth}/>}

        </Modal>
    );
};

export default ModalRepair;

