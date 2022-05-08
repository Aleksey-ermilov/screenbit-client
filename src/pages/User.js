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
import gear from "../icons/png/gear.png";
import editImg from '../icons/png/edit-img.png'
import arrowRight from '../icons/png/arrow-right-black.png'

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
                    <Image onClick={() => setIsShowModalImg(true)} className='photo-user d-inline-block' src={user.img} height={60} width={60} />
                    <div className='name-user d-inline-block'>
                        {user.fullName}
                        <span className='ms-2'>
                            <Image onClick={() => setIsShowModalName(true)} src={editImg} height={15} width={15} />
                        </span>
                    </div>
                    <Image className='d-inline-block' onClick={() => navigate(SETTING_ROUTER)} height={15} width={15} src={gear} />
                </div>
            </Header>
            <div className='px-3 head-margin-120' >
                <UserCard onClick={() => navigate(STATUSORDER_ROUTER)}>
                    <div className='me-3 font-s-20'>Узнать статус заказа</div>
                    <Image src={arrowRight} height={10} width={10} />
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
    img: imgDefaultImg,// '56a96121-033a-41af-9f4c-2c5602fdc4e6.png'
    favorites: [],
    cart: [],
    history_order: [],
    order_status: []
}