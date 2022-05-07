import React from 'react';
import {useLocation,useNavigate } from "react-router-dom";
import {Image,Form} from "react-bootstrap";

import Header from "../components/Header";
import EmptyListMes from "../components/EmptyListMes";

import close from "../icons/png/close.png";
import clip from '../icons/png/clip.png'
import camera from '../icons/png/camera.png'
import smile from '../icons/png/smile.png'

const Message = () => {
    const {state: {mes,subject} } = useLocation()
    const navigate = useNavigate();

    return (
        <div >
            <Header className='header-bar mb-4 head '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        {subject}
                    </div>
                    <Image onClick={() => navigate(-1)} height={15} width={15} src={close} />
                </div>
            </Header>
            <div className='p-2 head-margin'>
                {
                    mes.length ?
                        mes.map( (item,i) =>
                            <div
                                className={`d-flex mb-2 ${item.id.includes('admin') ? 'justify-content-start' : 'justify-content-end'}`}
                                key={i}>
                                <div className='box-message secondary p-1 ' >{item.mes}</div>
                            </div>
                        )
                        :
                        <EmptyListMes mes={'Сообщений нет'} />
                }
                <div className='form-message d-flex p-2 align-items-center'>
                    <Image src={smile} width={25} height={25}/>
                    <Form.Control
                        className='form-control-message'
                        placeholder={'Сообщение...'}
                    />
                    <Image className='me-3' src={clip} width={20} height={20}/>
                    <Image src={camera} width={20} height={20}/>
                </div>
            </div>
        </div>
    );
};

export default Message;