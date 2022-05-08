import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Card, Image} from "react-bootstrap";

import {handlerText} from "../helper";
import {PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import Header from "../components/Header";
import Counter from "../components/Counter";
import EmptyListMes from "../components/EmptyListMes";

import phone from "../icons/png/img-phone.png";
import imgDefaultUser from "../icons/png/img-default-user.png";
import cart from '../icons/png/cartActive.png'

const HistoryProduct = () => {
    const navigate = useNavigate();

    const handlerCounter = (id,count) => {
        console.log(id,count)
    }

    const handlerDelete = (id) => {
        console.log(id)
    }

    const handlerBtnBuy = (id,count) => {
        console.log(id,count)
    }

    const handlerProductCard = id => {
        navigate(`${PRODUCT_CARD_ROUTER}/${id}`)
    }
    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        История товаров
                    </div>
                </div>
            </Header>

            <div className='head-margin-80'>
                {
                    historyProduct.length ? historyProduct.map( item =>
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
                                        <Card.Text className='font-s-14 title-favorites' >{item.name}</Card.Text>
                                        <Card.Text className='font-s-12 desc-favorites'>{handlerText(item.desc)}</Card.Text>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Card.Text>{item.price}р</Card.Text>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>

                                    <Counter total={+item.count} handlerCount={(count) => handlerCounter(item.product_id,count)} />
                                    <div className='ms-2'>
                                        <Image onClick={() => handlerDelete(item.product_id)} height={20} width={20} src={cart} className='' />
                                        <Button
                                            onClick={() => handlerBtnBuy(item.product_id,item.count)}
                                            className='my-button font-s-18 ms-3 '
                                        >В корзину</Button>
                                    </div>


                                </div>
                            </Card.Body>

                        </Card>
                    ) :
                        <EmptyListMes  mes={'Список пуст'} />
                }
            </div>
        </div>
    );
};

export default HistoryProduct;

const historyProduct = [
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