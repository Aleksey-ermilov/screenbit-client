import React, {useState} from 'react';
import {useNavigate } from "react-router-dom";
import {Image,} from "react-bootstrap";

import Header from "../components/Header";

import marker from '../icons/png/marker.png'
import person from "../icons/png/person.png";
import apple from "../icons/png/apple.png";
import android from "../icons/png/android.png";
import windows from "../icons/png/windows.png";
import macos from "../icons/png/macos.png";

import ModalRepair from "../components/modals/ModalRepair";
import {LIST_MAP_ROUTER, USER_ROUTER} from "../consts";

const cards = [
    {
        title: 'Apple',
        subtitle: 'Заказать ремонт',
        img: apple,
        onClick: () => {
            console.log('1')}
    },
    {
        title: 'Android',
        subtitle: 'Заказать ремонт',
        img: android,
        onClick: () => {}
    },
    {
        title: 'Windows',
        subtitle: 'Заказать ремонт',
        img: windows,
        onClick: () => {}
    },
    {
        title: 'MacOS',
        subtitle: 'Заказать ремонт',
        img: macos,
        onClick: () => {}
    },
]

const Repair = () => {
    const [ isShow, setIsShow ] = useState(false)

    const navigate = useNavigate();

    return (
        <div className='margin-bottom-footer'>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div onClick={() => navigate(LIST_MAP_ROUTER)} className='d-flex align-items-center  '>
                        <><Image height={13} width={13} src={marker} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                </div>
            </Header>
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

            <ModalRepair show={isShow} onHide={() => setIsShow(false)} />
        </div>
    );
};

export default Repair;