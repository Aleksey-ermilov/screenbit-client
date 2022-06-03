import React, {useState,useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import Header from "../components/Header";
import AddressCard from "../components/AddressCard";
import Loading from "./Loading";

import ModalSelectAddress from "../components/modals/ModalSelectAddress";
import ModalLinkCard from "../components/modals/ModalLinkCard";
import ModalSuccessPay from "../components/modals/ModalSuccessPay";
import ModalAddAddress from "../components/modals/ModalAddAddress";

import {REPAIR_ROUTER, USER_ROUTER} from "../consts";

import Person from "../icons/svgComponents/Person";

import {httpChangeAddresses, httpDeleteAddress, httpOrdering} from "../http/userAPI";
import {deleteAddress, deleteCart, setUser,selectedAddressAction} from "../store/user/actionUser";
import {setError} from "../store/app/actionApp";

const Ordering = () => {

    const [ isShowModalSelectAddress, setIsShowModalSelectAddress ] = useState(false)
    const [ isShowModalLinkCard, setIsShowModalLinkCard ] = useState(false)
    const [ isShowModalSuccessPay, setIsShowModalSuccessPay ] = useState(false)
    const [ isShowModalAddAddress, setIsShowModalAddAddress ] = useState(false)

    const {cart,user,selectedAddress} = useSelector( state => state.user)
    const {state: {carts} } = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(false)

    const removeAddress = id => {
        setLoading(true)
        httpDeleteAddress(id,user.user_id).then(date => {
            dispatch(deleteAddress(id))
            dispatch(selectedAddressAction(date.addresses[0]))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        }).finally(() => setLoading(false))
    }

    const handlerSelectAddress = (address) => {
        httpChangeAddresses(address,user.user_id).then(data => {
            dispatch(selectedAddressAction(address))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
    }

    const orderingProduct = () => {
        if (!selectedAddress){
            //error!!!
            console.log('need address')
            return
        }
        setLoading(true)
        httpOrdering(cart,user.user_id,selectedAddress).then(data => {
            setIsShowModalSuccessPay(true)
            dispatch(setUser({...user, order_status: data.statusOrder,history_order:data.history}))
            cart.forEach(item => dispatch(deleteCart(item.product_id)) )
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        }).finally(() => setLoading(false))
    }

    const total = carts && (carts.reduce((partial_sum, a) => partial_sum + (Number(a.price.replace(/[^\d]/g, ''))* +a.count),0))

    if (loading){
        return <Loading />
    }

    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Оформление заказа
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)}>
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>

            <div className='px-3 head-margin-80'>
                <div className='mb-3'>
                    {
                        selectedAddress ?
                            <>
                                <AddressCard item={selectedAddress} remove={removeAddress} />
                                <Button
                                    onClick={() => setIsShowModalSelectAddress(true)}
                                    className='my-button w-75 mx-auto d-block p-2 font-s-18'
                                >Выбрать пункт</Button>
                            </>
                            :
                            <Button
                                className='my-button w-75 mx-auto d-block p-2 font-s-18'
                                onClick={() => setIsShowModalAddAddress(true)}
                            >Добавить адрес</Button>
                    }
                </div>
                <div className='mb-5 font-s-20' >
                    <div className='mb-2'>Способ оплаты</div>
                    <Card className='secondary shadow-mine p-2'>
                        <div>{payment.company}</div>
                        <div>{payment.method}</div>
                        <div onClick={() => setIsShowModalLinkCard(true)}>Привязать карту</div>
                    </Card>
                </div>

                <div className='font-s-20 mb-4 item-product-ordering'>
                    {
                        carts.map( item =>
                            <div key={item.product_id} className='mb-3' >{item.name}</div>
                        )
                    }
                </div>
                <div className='d-flex justify-content-between mb-5'>
                    <div className='font-s-24'>Итого</div>
                    <div className='font-s-20'>{total}</div>
                </div>
                <Button
                    onClick={orderingProduct}
                    className='my-button w-75 mx-auto d-block p-2 font-s-24'
                >Оплатить</Button>
            </div>

            {selectedAddress && <ModalSelectAddress
                addresses={user.addresses}
                getAddress={handlerSelectAddress}
                show={isShowModalSelectAddress}
                onHide={() => setIsShowModalSelectAddress(false)}
            />}
            <ModalLinkCard show={isShowModalLinkCard} onHide={() => setIsShowModalLinkCard(false)} />
            <ModalSuccessPay show={isShowModalSuccessPay} onHide={() => {
                setIsShowModalSuccessPay(false)
                navigate(REPAIR_ROUTER)
            }} />
            <ModalAddAddress show={isShowModalAddAddress} onHide={() => setIsShowModalAddAddress(false)} />

        </div>
    );
};

export default Ordering;

/*const address = {
    id:'1',
    address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
}*/
const payment = {
    company: 'Google Pay',
    method: 'СБП Оплата',
}