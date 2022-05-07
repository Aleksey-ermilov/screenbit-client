import React from 'react';
import {Image,Card,Button} from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Header from "../components/Header";
import Counter from "../components/Counter";
import EmptyListMes from "../components/EmptyListMes";

import person from "../icons/png/person.png";
import phone from "../icons/png/img-phone.png";
import imgDefaultUser from "../icons/png/img-default-user.png";
import imgDelete from "../icons/png/delete.png"

import {CART_ROUTER, PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import {setFavorites,setCountFavorite,addCart} from '../store/user/actionUser'

import {handlerText} from '../helper'

const Favorites = () => {
    const navigate = useNavigate();

    const {favorites} = useSelector( state => state.user)
    const dispatch = useDispatch()


    const handlerCounter = (product_id,count) => {
        dispatch(setCountFavorite(product_id,count))
    }

    const handlerDelete = (item) => {
        dispatch(setFavorites(item,1))
    }

    const handlerBtnBuy = (item,count) => {
        dispatch(addCart(item,count))
        navigate(CART_ROUTER)
    }

    const handlerProductCard = id => {
        navigate(`${PRODUCT_CARD_ROUTER}/${id}`)
    }
    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Избранное ({favorites.length})
                    </div>
                    <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                </div>
            </Header>

            <div>
                {
                    favorites.length ? favorites.map( item =>
                        <Card

                            className='secondary shadow-mine m-3'
                            key={item.product_id}
                        >
                            <Card.Body>
                                <div className='d-flex '>
                                    <Image
                                           onClick={()=> handlerProductCard(item.product_id)}
                                           height={100}
                                           style={{width: '100px'}}
                                           src={item.img[0]}
                                           className='img-favorites'
                                    />
                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <Card.Text className='font-s-14 title-favorites' >{item.name}</Card.Text>
                                            <div className='ms-2'>
                                                <Image onClick={() => handlerDelete(item)} height={15} width={15} src={imgDelete} className='' />
                                            </div>
                                        </div>
                                        <Card.Text className='font-s-12 desc-favorites'>{handlerText(item.desc)}</Card.Text>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Card.Text>{item.price}р</Card.Text>
                                </div>
                                <div className='d-flex justify-content-between'>

                                    <Counter total={+item.count} handlerCount={(count) => handlerCounter(item.product_id,count)} />
                                    <Button
                                        onClick={() => handlerBtnBuy(item,item.count)}
                                        className='my-button font-s-18 ms-3 '
                                    >Купить</Button>

                                </div>
                            </Card.Body>

                        </Card>
                    ) :
                        <EmptyListMes />
                }
            </div>
        </div>
    );
};

export default Favorites;

const favorites = [
    {
        name: 'Ноутбук Асус Виво 15,6 олед м Оушоищ-44уше, черный',
        product_id: 'prod_1',
        price: '86900',
        img: [phone,phone,phone,phone,imgDefaultUser],
        count:'2',
        desc: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
    },
    {
        name: 'Ноутбук Асус Виво 15,6 олед м Оушоищ-44уше, черный',
        product_id: 'prod_2',
        price: '9900',
        img: [phone,phone,phone,phone,imgDefaultUser],
        count:1,
        desc: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
    },
    {
        name: 'Ноутбук Асус Виво 15,6 олед м Оушоищ-44уше, черный',
        product_id: 'prod_3',
        price: '10000',
        img: [phone,phone,phone,phone,imgDefaultUser],
        count:'20',
        desc: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
    },
    {
        name: 'Ноутбук Асус Виво 15,6 олед м Оушоищ-44уше, черный',
        product_id: 'prod_4',
        price: '9200',
        img: [phone,phone,phone,phone,imgDefaultUser],
        count:'5',
        desc: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
    },
    {
        name: 'Ноутбук Асус Виво 15,6 олед м Оушоищ-44уше, черный',
        product_id: 'prod_5',
        price: '7777',
        img: [phone,phone,phone,phone,imgDefaultUser],
        count:'4',
        desc: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
            'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
    },
]