import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Image, Button, Card} from "react-bootstrap";

import Header from "../components/Header";
import AddressCard from "../components/AddressCard";

import ModalSelectAddress from "../components/modals/ModalSelectAddress";
import ModalLinkCard from "../components/modals/ModalLinkCard";
import ModalSuccessPay from "../components/modals/ModalSuccessPay";

import {REPAIR_ROUTER, USER_ROUTER} from "../consts";

import person from "../icons/png/person.png";


const Ordering = () => {

    const [ isShowModalSelectAddress, setIsShowModalSelectAddress ] = useState(false)
    const [ isShowModalLinkCard, setIsShowModalLinkCard ] = useState(false)
    const [ isShowModalSuccessPay, setIsShowModalSuccessPay ] = useState(false)

    const {state: {carts} } = useLocation()
    const navigate = useNavigate();

    const removeAddress = id => {
        console.log(id)
    }

    const total = carts && (carts.reduce((partial_sum, a) => partial_sum + (Number(a.price)* +a.count),0))

    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Оформление заказа
                    </div>
                    <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                </div>
            </Header>

            <div className='px-3 head-margin-80'>
                <div className='mb-3'>
                    <AddressCard item={address} remove={removeAddress} />
                    <Button
                        onClick={() => setIsShowModalSelectAddress(true)}
                        className='my-button w-75 mx-auto d-block p-2 font-s-18'
                    >Выбрать пункт</Button>
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
                    onClick={() => setIsShowModalSuccessPay(true)}
                    className='my-button w-75 mx-auto d-block p-2 font-s-24'
                >Оплатить</Button>
            </div>

            <ModalSelectAddress show={isShowModalSelectAddress} onHide={() => setIsShowModalSelectAddress(false)} />
            <ModalLinkCard show={isShowModalLinkCard} onHide={() => setIsShowModalLinkCard(false)} />
            <ModalSuccessPay show={isShowModalSuccessPay} onHide={() => {
                setIsShowModalSuccessPay(false)
                navigate(REPAIR_ROUTER)
            }} />

        </div>
    );
};

export default Ordering;

const address = {
    id:'1',
    address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
}
const payment = {
    company: 'Google Pay',
    method: 'СПБ Оплата',
}