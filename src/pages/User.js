import React, {useState} from 'react';
import {Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {SETTING_ROUTER, STATUSORDER_ROUTER} from "../consts";

import Header from "../components/Header";
import UserCard from "../components/UserCard";

import ModalChangeUser from "../components/modals/ModalChangeUser";
import ModalChangePassword from "../components/modals/ModalChangePassword";
import ModalChangeGender from "../components/modals/ModalChangeGender";
import ModalChangeName from "../components/modals/ModalChangeName";
import ModalChangeImg from "../components/modals/ModalChangeImg";

import Gear from "../icons/svgComponents/Gear";
import EditSvg from "../icons/svgComponents/EditSvg";
import DefaultUserSvg from "../icons/svgComponents/DefaultUserSvg";
import ArrowRight from "../icons/svgComponents/ArrowRight";

import {handlerRoundText} from "../helper";

const User = () => {
    const {user} = useSelector( state => state.user)

    const [ isShowModalBirthday, setIsShowModalBirthday ] = useState(false)
    const [ isShowModalPhone, setIsShowModalPhone ] = useState(false)
    const [ isShowModalEmail, setIsShowModalEmail ] = useState(false)
    const [ isShowModalPassword, setIsShowModalPassword ] = useState(false)
    const [ isShowModalGender, setIsShowModalGender ] = useState(false)
    const [ isShowModalName, setIsShowModalName ] = useState(false)
    const [ isShowModalImg, setIsShowModalImg ] = useState(false)

    const [phone,setPhone] = useState(user.phone)
    const [email,setEmail] = useState(user.email)
    const [img,setImg] = useState(user.img[0])

    const navigate = useNavigate();

    return (
        <div>
            <Header className='header-bar'  >
                <div className='d-flex justify-content-between font-s-20'>
                    <div onClick={() => setIsShowModalImg(true)}>
                        {
                            user.img?.length ?
                                <Image src={`${process.env.REACT_APP_API_URL}${img}`} height={60} width={60} /> :
                                <DefaultUserSvg height={60} width={60} />
                        }
                    </div>
                    <div className='name-user d-inline-block'>
                        {handlerRoundText(`${user.lastname ? user.lastname : '' + ' '} ${user.name} ${user.patronymic ? user.patronymic : '' + ' '}`,30)}
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
                    <div className='me-3 font-s-20'>{user.email ? handlerRoundText(user.email,18) : 'Email'}</div>
                    <div
                        className='card-info-user unactive-text font-s-14'
                    >{user.email ? 'Изменить' : 'Не указано'}</div>
                </UserCard>
                <UserCard onClick={() => setIsShowModalPassword(true)}>
                    <div className='me-3 font-s-20'>Пароль</div>
                </UserCard>

            </div>
            <ModalChangeUser variant={'birthday'} value={user.birthday} type={'date'} title={'Дата Рождения'} show={isShowModalBirthday} onHide={() => setIsShowModalBirthday(false)} />
            <ModalChangeUser variant={'phone'} value={user.phone} type={'tel'} setValue={setPhone} title={'Ввести номер'} show={isShowModalPhone} onHide={() => setIsShowModalPhone(false)} />
            <ModalChangeUser variant={'email'} value={user.email} type={'email'} setValue={setEmail} title={'Ввести E-mail'} show={isShowModalEmail} onHide={() => setIsShowModalEmail(false)} />
            <ModalChangePassword show={isShowModalPassword} onHide={() => setIsShowModalPassword(false)} />
            <ModalChangeGender show={isShowModalGender} onHide={() => setIsShowModalGender(false)} />
            <ModalChangeName show={isShowModalName} onHide={() => setIsShowModalName(false)} />
            <ModalChangeImg getImg={(item) => setImg(item)} show={isShowModalImg} onHide={() => setIsShowModalImg(false)} />
        </div>
    );
};

export default User;
