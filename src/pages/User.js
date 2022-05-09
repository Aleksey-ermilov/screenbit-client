import React, {useState} from 'react';
import {Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import {SETTING_ROUTER, STATUSORDER_ROUTER} from "../consts";

import Header from "../components/Header";
import UserCard from "../components/UserCard";

import ModalChangeUser from "../components/modals/ModalChangeUser";
import ModalChangePassword from "../components/modals/ModalChangePassword";
import ModalChangeGender from "../components/modals/ModalChangeGender";
import ModalChangeName from "../components/modals/ModalChangeName";
import ModalChangeImg from "../components/modals/ModalChangeImg";

import imgDefaultImg from '../icons/png/img-default-user-2.png'

import Gear from "../icons/svgComponents/Gear";
import EditSvg from "../icons/svgComponents/EditSvg";
import DefaultUserSvg from "../icons/svgComponents/DefaultUserSvg";
import ArrowRight from "../icons/svgComponents/ArrowRight";

const User = () => {
    const [ isShowModalBirthday, setIsShowModalBirthday ] = useState(false)
    const [ isShowModalPhone, setIsShowModalPhone ] = useState(false)
    const [ isShowModalEmail, setIsShowModalEmail ] = useState(false)
    const [ isShowModalPassword, setIsShowModalPassword ] = useState(false)
    const [ isShowModalGender, setIsShowModalGender ] = useState(false)
    const [ isShowModalName, setIsShowModalName ] = useState(false)
    const [ isShowModalImg, setIsShowModalImg ] = useState(false)

    const [birthday,setBirthday] = useState(user.birthday)
    const [phone,setPhone] = useState(user.phone)
    const [email,setEmail] = useState(user.email)

    const navigate = useNavigate();

    return (
        <div>
            <Header className='header-bar'  >
                <div className='d-flex justify-content-between font-s-20'>
                    <div onClick={() => setIsShowModalImg(true)}>
                        {
                            user.img.length ?
                                <Image src={user.img[0]} height={60} width={60} /> :
                                <DefaultUserSvg height={60} width={60} />
                        }
                    </div>
                    {/*<Image onClick={() => setIsShowModalImg(true)} className='photo-user d-inline-block' src={user.img} height={60} width={60} />*/}
                    <div className='name-user d-inline-block'>
                        {user.fullName}
                        <span className='ms-2' onClick={() => setIsShowModalName(true)}>
                            <EditSvg height={15} width={15} />
                        </span>
                    </div>
                    <div onClick={() => navigate(SETTING_ROUTER)}>
                        <Gear height={15} width={15} />
                    </div>
                </div>
            </Header>
            <div className='px-3 head-margin-120' >
                <UserCard onClick={() => navigate(STATUSORDER_ROUTER)}>
                    <div className='me-3 font-s-20'>Узнать статус заказа</div>
                    <ArrowRight height={15} width={15} />
                </UserCard>
                <UserCard onClick={() => setIsShowModalBirthday(true)}>
                    <div className='me-3 font-s-20'>Дата Рождения</div>
                    <div
                        className='card-info-user unactive-text font-s-14'
                    >{user.birthday ? user.birthday : 'Не указано'}</div>
                </UserCard>
                <UserCard onClick={() => setIsShowModalGender(true)} >
                    <div className='me-3 font-s-20'>Пол</div>
                    <div
                        className='card-info-user unactive-text font-s-14'
                    >
                        {user.gender ?
                            <>
                                <span className={user.gender === 'Мужской'? 'text-black': 'unactive-text'}>Мужской</span>
                                <span>/</span>
                                <span className={user.gender === 'Женский'? 'text-black': 'unactive-text'}>Женский</span>
                            </>
                            :
                            'Не указано'}

                    </div>
                </UserCard>
                <UserCard onClick={() => setIsShowModalPhone(true)}>
                    <div className='me-3 font-s-20'>{user.phone ? user.phone : 'Телефон'}</div>
                    <div
                        className='card-info-user unactive-text font-s-14'
                    >{user.phone ? 'Изменить' : 'Не указано'}</div>
                </UserCard>
                <UserCard onClick={() => setIsShowModalEmail(true)}>
                    <div className='me-3 font-s-20'>{user.email ? user.email : 'Email'}</div>
                    <div
                        className='card-info-user unactive-text font-s-14'
                    >{user.email ? 'Изменить' : 'Не указано'}</div>
                </UserCard>
                <UserCard onClick={() => setIsShowModalPassword(true)}>
                    <div className='me-3 font-s-20'>Пароль</div>
                </UserCard>

            </div>
            <ModalChangeUser type={'date'} setValue={setBirthday} title={'Дата Рождения'} show={isShowModalBirthday} onHide={() => setIsShowModalBirthday(false)} />
            <ModalChangeUser type={'tel'} setValue={setPhone} title={'Ввести номер'} show={isShowModalPhone} onHide={() => setIsShowModalPhone(false)} />
            <ModalChangeUser type={'email'} setValue={setEmail} title={'Ввести E-mail'} show={isShowModalEmail} onHide={() => setIsShowModalEmail(false)} />
            <ModalChangePassword show={isShowModalPassword} onHide={() => setIsShowModalPassword(false)} />
            <ModalChangeGender show={isShowModalGender} onHide={() => setIsShowModalGender(false)} />
            <ModalChangeName show={isShowModalName} onHide={() => setIsShowModalName(false)} />
            <ModalChangeImg show={isShowModalImg} onHide={() => setIsShowModalImg(false)} />
        </div>
    );
};

export default User;

const user = {
    id: '2',
    name: 'Вася',
    lastname: 'Иванов',
    patronymic: 'Висарионович',
    gender: 'Мужской',
    birthday: '15.02.1998',
    user_id: 'auth_2',
    phone: '8 800 800 88 88',
    email: 'email@email.com',
    fullName: 'Иванов Вася Висарионович',
    addresses: '',
    img: [imgDefaultImg],// '56a96121-033a-41af-9f4c-2c5602fdc4e6.png'
    favorites: [],
    cart: [],
    history_order: [],
    order_status: []
}