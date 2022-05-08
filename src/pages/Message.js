import React, {useState,useEffect} from 'react';
import {useLocation,useNavigate } from "react-router-dom";
import {Image,Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

import Header from "../components/Header";
import EmptyListMes from "../components/EmptyListMes";

import close from "../icons/png/close.png";
import clip from '../icons/png/clip.png'
import camera from '../icons/png/camera.png'
import smile from '../icons/png/smile.png'

import {addMessage} from '../store/user/actionUser'

const Message = () => {
    const {state: {subject,id} } = useLocation()
    const navigate = useNavigate();

    const {user, messages} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const [message, setMessage] = useState('')

    useEffect( () => {
        window.scrollBy(0, window.innerHeight);
    }, [])

    const handlerFieldMessage = e => {
        if (e.key === 'Enter'){
            dispatch(addMessage(message,id,user.user_id))
            setMessage('')
            window.scrollBy(0, window.innerHeight);
        }
    }

    const handlerBtnCamera = () => {
        window.navigator.mediaDevices.getUserMedia({
            video:true
        })
    }

    return (
        <div className='margin-bottom-footer' >
            <Header className='header-bar mb-4'  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        {subject}
                    </div>
                    <Image onClick={() => navigate(-1)} height={15} width={15} src={close} />
                </div>
            </Header>
            <div className='p-2 head-margin-80'>
                {
                    messages.find(item => item.id === id).message.length ?
                        messages.find(item => item.id === id).message.map( (item,i) =>
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handlerFieldMessage}
                        className='form-control-message'
                        placeholder={'Сообщение...'}
                    />
                    <a href='file.doc' download><Image onClick={() => window.location = 'file.doc'} className='me-3'  src={clip} width={20} height={20}/></a>
                    <Image onClick={handlerBtnCamera} src={camera} width={20} height={20}/>
                </div>
            </div>
        </div>
    );
};

export default Message;