import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const ModalChangeGender = ({show,onHide,value = '',setValue}) => {

    const [text,setText] = useState(value)

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
                        // value={text}
                        onChange={ e => {
                            setText(e.target.value)
                            console.log('Мужской',e.target.value)
                        }}
                    />
                    <Form.Check
                        // checked
                        id={'2'}
                        type={'radio'}
                        label={'Женский'}
                        name={'gender'}
                        className=' mb-2'
                        value={'on'}
                        onChange={ e => {
                            setText(e.target.value)
                            console.log('Женский',e.target.value)
                        }}
                    />
                </Form>
                <Button
                    className='my-button w-100 p-2 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Закрыть</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeGender;