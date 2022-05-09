import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Image} from "react-bootstrap";

import { ORDERING_ROUTER, PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import {handlerText} from "../helper";

import Header from "../components/Header";
import Counter from "../components/Counter";
import EmptyListMes from "../components/EmptyListMes";

import Person from "../icons/svgComponents/Person";
import DeleteSvg from "../icons/svgComponents/DeleteSvg";

import { addCart,deleteCart } from '../store/user/actionUser'

const Cart = () => {
    const navigate = useNavigate();

    const {cart} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const handlerCounter = (item,count) => {
        console.log(item.product_id)
        dispatch(addCart(item,count))
    }

    const handlerDelete = (product_id) => {
        dispatch(deleteCart(product_id))
    }

    const handlerBtnOrder = () => {
        navigate(
            ORDERING_ROUTER,
            {
                state:
                    {
                        carts: cart,
                    }
            }
        )
    }

    const handlerProductCard = id => {
        navigate(`${PRODUCT_CARD_ROUTER}/${id}`)
    }


    return (
        <div className='margin-bottom-footer-cart '>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Корзина ({cart.length})
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)}>
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>

            <div className='head-margin-80'>
                { cart.length ?
                    <div>
                        {
                            cart.map(item =>
                                <Card

                                    className='secondary shadow-mine m-3'
                                    key={item.product_id}
                                >
                                    <Card.Body>
                                        <div className='d-flex '>
                                            <Image
                                                onClick={() => handlerProductCard(item.product_id)}
                                                height={100}
                                                style={{width: '100px'}}
                                                src={item.img[0]}
                                                className='img-favorites'
                                            />
                                            <div className='mb-4'>
                                                <div className='d-flex justify-content-between'>
                                                    <Card.Text className='font-s-14 title-favorites'>{item.name}</Card.Text>
                                                    <div className='ms-2' onClick={() => handlerDelete(item.product_id)}>
                                                        <DeleteSvg height={15} width={15}/>
                                                    </div>
                                                </div>
                                                <Card.Text
                                                    className='font-s-12 desc-favorites'>{handlerText(item.desc)}</Card.Text>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-between '>

                                            <Counter total={+item.count}
                                                     handlerCount={(count) => handlerCounter(item, count)}/>

                                            <Card.Text>{item.price}р</Card.Text>


                                        </div>
                                    </Card.Body>

                                </Card>
                            )
                        }

                        <Button
                            onClick={handlerBtnOrder}
                            className='my-button btn-order-cart p-2 font-s-24 mb-1'
                        >Заказать</Button>

                    </div>
                    :
                    <EmptyListMes/>
                }
            </div>
        </div>
    );
};

export default Cart;
