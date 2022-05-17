import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import Header from "../components/Header";

import {MAP_ROUTER, USER_ROUTER} from "../consts";

import Person from "../icons/svgComponents/Person";
import Marker from "../icons/svgComponents/Marker";

import EmptyListMes from "../components/EmptyListMes";
import AddressCard from "../components/AddressCard";

import ModalAddAddress from "../components/modals/ModalAddAddress";
import {httpDeleteAddress} from "../http/userAPI";
import {deleteAddress} from "../store/user/actionUser";

const ListMap = () => {
    const { user_id,addresses } = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [ isShowModalAddAddress, setIsShowModalAddAddress ] = useState(false)

    const handlerDelete = id => {
        httpDeleteAddress(id,user_id).then( date =>{
            dispatch(deleteAddress(id))
        })
    }
    const handlerBtnAddAddress = () => {
        setIsShowModalAddAddress(true)
        // navigate(MAP_ROUTER)
    }

    return (
        <div className='margin-bottom-address '>
            <Header className='header-bar mb-3 head-z-index-5'  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='d-flex align-items-center  '>
                        <><Marker height={13} width={13} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)} >
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>

            <div className='px-3  head-margin-80 '>
                {
                    addresses.length ?
                        addresses.map( item =>
                            <AddressCard key={item.id} item={item} remove={handlerDelete} />
                            )
                        :
                        <EmptyListMes mes={'Список пуст'} />
                }
                <div className='d-flex justify-content-center'>
                    <Button
                        onClick={handlerBtnAddAddress}
                        className='p-3 secondary btn-address '
                    >Добавить пункт</Button>
                </div>

            </div>
            <ModalAddAddress show={isShowModalAddAddress} onHide={() => setIsShowModalAddAddress(false)} />
        </div>
    );
};

export default ListMap;