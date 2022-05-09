import React, {useState} from 'react';
import {useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    return (
        <div className='margin-bottom-footer'>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div onClick={() => navigate(LIST_MAP_ROUTER)} className='d-flex align-items-center  '>
                        <><Marker height={13} width={13} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)} >
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>
            <div className='head-margin-80'>
                {
                    cards.map( item =>
                        <div onClick={() => setIsShow(true)} key={item.title}>
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
            {/*<div className='head-margin-80'>
                {
                    cards.map( item =>
                        <div onClick={() => setIsShow(true)} key={item.title}>
                            <div className='box-repair d-flex justify-content-around '>
                                <><Image height={60} width={60} src={item.img} /></>
                                <div className='text-main-color'>
                                    <div className='fw-bold font-s-28'>{item.title}</div>
                                    <div className='font-s-14'>{item.subtitle}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>*/}

            <ModalRepair show={isShow} onHide={() => setIsShow(false)} />
        </div>
    );
};

export default Repair;