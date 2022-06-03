import React from 'react';
import {Image,Card,Button} from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Header from "../components/Header";
import Counter from "../components/Counter";
import EmptyListMes from "../components/EmptyListMes";

import Person from "../icons/svgComponents/Person";
import DeleteSvg from "../icons/svgComponents/DeleteSvg";

import {CART_ROUTER, PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import {setFavorites,setCountFavorite,addCart} from '../store/user/actionUser'

import {handlerText} from '../helper'
import {httpFavorites, httpFavoritesCount} from "../http/userAPI";
import {setError} from "../store/app/actionApp";

const Favorites = () => {
    const navigate = useNavigate();

    const {favorites,user:{user_id}} = useSelector( state => state.user)
    const dispatch = useDispatch()


    const handlerCounter = (product_id,count) => {
        httpFavoritesCount(product_id,count,user_id).then(data => {
            dispatch(setCountFavorite(product_id,count))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
    }

    const handlerDelete = (item) => {
        httpFavorites({...item, count: 1},user_id).then(data => {
            dispatch(setFavorites(item,1))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
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
                    <div onClick={() => navigate(USER_ROUTER)}>
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>

            <div className='head-margin-80'>
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
                                           src={`${process.env.REACT_APP_API_URL}${item.img[0]}`}
                                           className='img-favorites'
                                    />
                                    <div className='w-100 px-2'>
                                        <div className='d-flex justify-content-between '>
                                            <Card.Text className='font-s-14 title-favorites' >{item.name}</Card.Text>
                                            <div className='ms-2' onClick={() => handlerDelete(item)}>
                                                <DeleteSvg  height={15} width={15} />
                                            </div>
                                        </div>
                                        <Card.Text className='font-s-12 desc-favorites'>{handlerText(item.desc)}</Card.Text>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end mb-3 px-2'>
                                    <Card.Text>{item.price}р</Card.Text>
                                </div>
                                <div className='d-flex justify-content-between '>

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