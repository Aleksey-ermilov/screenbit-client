import React, {useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

import Header from "../components/Header";

import Marker from "../icons/svgComponents/Marker";
import Person from "../icons/svgComponents/Person";
import Apple from "../icons/svgComponents/Apple";
import Android from "../icons/svgComponents/Android";
import Windows from "../icons/svgComponents/Windows";
import MacOS from "../icons/svgComponents/MacOS";

import ModalRepair from "../components/modals/ModalRepair";
import {LIST_MAP_ROUTER, USER_ROUTER} from "../consts";

const cards = [
    {
        title: 'Apple',
        subtitle: 'Заказать ремонт',
        Img: Apple,
        onClick: () => {
            console.log('1')}
    },
    {
        title: 'Android',
        subtitle: 'Заказать ремонт',
        Img: Android,
        onClick: () => {}
    },
    {
        title: 'Windows',
        subtitle: 'Заказать ремонт',
        Img: Windows,
        onClick: () => {}
    },
    {
        title: 'MacOS',
        subtitle: 'Заказать ремонт',
        Img: MacOS,
        onClick: () => {}
    },
]

const sizeImg = 60

const Repair = () => {
    const [ isShow, setIsShow ] = useState(false)
    const [ os, setOs ] = useState('')
    const [promptInstall, setPromptInstall] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("transitionend", handler);
    }, [])

    const onClick = async e => {
        e.preventDefault();
        if (promptInstall) {
            const a = await promptInstall.prompt();
            if (a.outcome === 'accepted'){
                setPromptInstall(null)
            }
        }else{
            return;
        };
    };

    const handlerOrderRepair = title => {
        setOs(title)
        setIsShow(true)
    }

    return (
        <div className='margin-bottom-footer'>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div onClick={() => navigate(LIST_MAP_ROUTER)} className='d-flex align-items-center  '>
                        <><Marker height={13} width={13} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <div className='d-flex align-items-center'>

                        { promptInstall && <Button className='me-3 my-button' onClick={(e) => onClick(e)}>Скачать</Button>}

                        <div onClick={() => navigate(USER_ROUTER)} >
                            <Person height={15} width={15} />
                        </div>
                    </div>
                </div>
            </Header>
            <div className='head-margin-80'>
                {
                    cards.map( item =>
                        <div onClick={() => handlerOrderRepair(item.title)} key={item.title}>
                            <div className='box-repair d-flex justify-content-around '>
                                <><item.Img width={sizeImg} height={sizeImg} /></>
                                <div className='text-main-color'>
                                    <div className='fw-bold font-s-28'>{item.title}</div>
                                    <div className='font-s-14'>{item.subtitle}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


            <ModalRepair os={os} show={isShow} onHide={() => setIsShow(false)}  />
        </div>
    );
};

export default Repair;