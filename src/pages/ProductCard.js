import React, {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {Image, Carousel, Button,ListGroup,Tab,Card} from "react-bootstrap";

import Header from "../components/Header";
import ModalCharacteristics from "../components/modals/ModalCharacteristics";
import ModalReviews from "../components/modals/ModalReviews";

import marker from "../icons/png/marker.png";
import person from "../icons/png/person.png";
import favorite from "../icons/png/favoritesActive.png";
import noFavorite from "../icons/png/no-favorites.png";
import noCart from "../icons/png/no-cart-product.png";
import cart from "../icons/png/cart-product.png";

import {CART_ROUTER, LIST_MAP_ROUTER, PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";
import {setCartClickIcon, setFavorites,addCart} from "../store/user/actionUser";
import {setSimilarProducts} from '../store/product/actionProduct'
import Loading from "./Loading";

const ProductCard = () => {
    const { product,similarProducts } = useSelector( state => state.product)
    const {favorites, cart: carts} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const [ isShowCharacteristics, setIsShowCharacteristics ] = useState(false)
    const [ isShowReviews, setIsShowReviews ] = useState(false)

    const navigate = useNavigate();

    useEffect( () => { // fetch product
        dispatch(setSimilarProducts(product.category))
    }, [])

    const handlerAddFavorite = () => {
        dispatch(setFavorites(product,1))
    }
    const handlerAddCart = () => {
        dispatch(setCartClickIcon(product,1))
    }
    const handlerAddCartBtn = () =>{
        dispatch(addCart(product,1))
        navigate(CART_ROUTER)
    }

    const handlerSimilarProducts = id => {
        navigate(`${PRODUCT_CARD_ROUTER}/${id}`)
    }

    if (!Object.keys(product).length){
        return <Loading />
    }
    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div onClick={() => navigate(LIST_MAP_ROUTER)} className='d-flex align-items-center  '>
                        <><Image height={13} width={13} src={marker} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                </div>
            </Header>
            <div className='p-3'>
                <Carousel
                    indicators={false}
                    variant="dark"
                    className='mb-3'
                >
                    {
                        product.img.map( (img,i) => // поменять key
                            <Carousel.Item key={i}>
                                <Image
                                    className="d-block m-auto"
                                    src={img}
                                    height={200}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    }
                </Carousel>
                <div>
                    <h1 className='font-s-22 fw-normal mb-3'>{product.name}</h1>
                    <div className='d-flex justify-content-between'>
                        <div className='font-s-22'>{product.price}р</div>
                        <div>
                            <Image
                                height={30}
                                width={30}
                                onClick={handlerAddFavorite}
                                src={ favorites.find( i => i.product_id === product.product_id) ? favorite : noFavorite}
                                className='ms-3'
                            />
                            <Image
                                onClick={handlerAddCart}
                                src={ carts.find( i => i.product_id === product.product_id) ? cart : noCart }
                                className='ms-3'
                            />
                            <Button
                                onClick={handlerAddCartBtn}
                                className='my-button font-s-20 ms-3 '
                            >Купить</Button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div >
                    <h3 className='font-s-20 fw-normal'>Описание</h3>
                    <p className='font-s-16 product-card-desc-text'>{product.desc}</p>
                    <hr/>
                </div>
                <div>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#characteristics">
                        <ListGroup horizontal>
                            <ListGroup.Item action href="#characteristics" className='z-index-0'>
                                Характеристики
                            </ListGroup.Item>
                            <ListGroup.Item className='a-btn-product-card z-index-0'  onClick={() => setIsShowReviews(true)}  >
                                Отзывы
                            </ListGroup.Item>
                            <ListGroup.Item action href="#accessories" className='z-index-0'>
                                Аксессуары
                            </ListGroup.Item>
                        </ListGroup>

                        <Tab.Content className='mt-3' >
                            <Tab.Pane eventKey="#characteristics">
                                <div >
                                    {
                                        product.characteristics.map( (characteristic, i) => {
                                            if (i>1){
                                                return <div key={i}></div>
                                            }
                                            const keys = Object.keys(characteristic)
                                            return (
                                                <div className='font-s-16 mb-3' key={keys[0]}>
                                                    {keys[0]}
                                                    <div className='mt-2'>{
                                                        characteristic[keys[0]].map( char => {
                                                            const keys = Object.keys(char)
                                                            return (
                                                                <div
                                                                    className='font-s-14 d-flex justify-content-between '
                                                                    key={keys[0]}
                                                                >
                                                                    <div>{keys[0]}</div>
                                                                    <div>{char[keys[0]]}</div>
                                                                </div>)
                                                        })
                                                    }</div>
                                                </div>)
                                        })
                                    }


                                </div>
                                <Button
                                    onClick={() => setIsShowCharacteristics(true)}
                                    className='my-button font-s-12 btn-product-card'
                                >Все характеристики</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#accessories">
                                <div>
                                    <ul>
                                        {product.accessories.map( (accessory,i) =>
                                            <li key={i}>{accessory}</li>
                                        )}
                                    </ul>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    <hr />

                    <h3 className='font-s-20 fw-normal mt-3'>Похожие товары</h3>
                    <div className="similar-products-scroll-menu ">

                        {
                            similarProducts.length ?
                            similarProducts.map( item =>
                                <Card
                                    onClick={()=> handlerSimilarProducts(item.product_id)}
                                    className='product-card font-s-14 mb-2 d-inline-block similar-products-item'
                                    key={item.product_id}
                                >
                                    <Card.Body>
                                        <div >
                                            <Card.Img src={item.img[0]} className='product-card-img mb-2 mx-auto d-block' />
                                            <div className='text-wrap'>{item.name}</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                                :
                                <div
                                    className='unactive-text font-s-30 text-center my-5'
                                >Список пуст</div>
                        }
                    </div>

                </div>
            </div>
            <ModalCharacteristics characteristics={product.characteristics} show={isShowCharacteristics} onHide={() => setIsShowCharacteristics(false)} />
            <ModalReviews reviews={product.reviews} show={isShowReviews} onHide={() => setIsShowReviews(false)} />
        </div>
    );
};

export default ProductCard;