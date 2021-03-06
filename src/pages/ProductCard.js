import React, {useState,useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {Image, Carousel, Button,ListGroup,Tab,Card} from "react-bootstrap";

import Header from "../components/Header";
import ModalCharacteristics from "../components/modals/ModalCharacteristics";
import ModalReviews from "../components/modals/ModalReviews";

import Marker from "../icons/svgComponents/Marker";
import Person from "../icons/svgComponents/Person";
import {FavoritesActiveSvg as Favorites} from "../icons/svgComponents/FavoritesActiveSvg";
import NoFavorites from "../icons/svgComponents/NoFavorites";
import CartProduct from "../icons/svgComponents/CartProduct";
import {CartActiveSvg as NoCart} from "../icons/svgComponents/CartActiveSvg";

import {CART_ROUTER, LIST_MAP_ROUTER, PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import {setCartClickIcon, setFavorites,addCart} from "../store/user/actionUser";
import {setProduct, setReviewProduct, setSimilarProducts} from '../store/product/actionProduct'

import Loading from "./Loading";

import {getProduct, httpSetReviewProduct} from '../http/productApi'
import Characteristics from "../components/Characteristics";
import {httpAddCart, httpCartByIconCart, httpFavorites} from "../http/userAPI";
import {setError} from "../store/app/actionApp";

const ProductCard = () => {
    const { product,similarProducts } = useSelector( state => state.product)
    const {favorites, cart: carts,user: {user_id}} = useSelector( state => state.user)
    const dispatch = useDispatch()
    const {state: {product_id} } = useLocation()

    const [ isShowCharacteristics, setIsShowCharacteristics ] = useState(false)
    const [ isShowReviews, setIsShowReviews ] = useState(false)

    const [loading,setLoading] = useState(true)

    const [showInfo, setShowInfo] = useState('characteristics')

    const navigate = useNavigate();

    useEffect( () => { // fetch product
        getProduct(product_id).then( data => {
            dispatch(setProduct(data))
            dispatch(setSimilarProducts(data.category))
        }).catch(data => {
            navigate(-1)
            dispatch(setError(data.response.data.message))
        }).finally(() => setLoading(false))
    }, [product_id])

    const handlerAddFavorite = () => {
        httpFavorites({...product, count: 1},user_id).then(data => {
            dispatch(setFavorites(product,1))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
    }
    const handlerAddCart = () => {
        httpCartByIconCart(product,1,user_id).then( data => {
            dispatch(setCartClickIcon(product,1))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })

    }
    const handlerAddCartBtn = () =>{
        httpAddCart(product,1,user_id).then(data=> {
            dispatch(addCart(product,1))
            navigate(CART_ROUTER)
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
    }

    const handlerSimilarProducts = id => {
        navigate(`${PRODUCT_CARD_ROUTER}/${id}`,{
            state:
                {
                    product_id: id,
                }
        })
    }

    const handlerReview = (review) => {
        const newProd = {...product, reviews: [review, ...product.reviews]}
        httpSetReviewProduct(newProd).then(date => {
            dispatch(setReviewProduct(review,product_id))
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
    }

    if (loading){
        return <Loading />
    }
    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4 '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div onClick={() => navigate(LIST_MAP_ROUTER)} className='d-flex align-items-center  '>
                        <><Marker height={13} width={13} /></>
                        <div className='ms-2'>?????????????? ??????????</div>
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)}>
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>
            <div className='p-3 head-margin-80'>
                <Carousel
                    indicators={false}
                    variant="dark"
                    className='mb-3'
                >
                    {
                        product.img.map( (img,i) => // ???????????????? key
                            <Carousel.Item key={i}>
                                <Image
                                    className="d-block m-auto"
                                    src={`${process.env.REACT_APP_API_URL}${img}`}
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
                        <div className='font-s-22'>{product.price}??</div>
                        <div className='d-flex align-items-center'>
                            <div onClick={handlerAddFavorite} className='me-3'>
                                {
                                    favorites.find( i => i.product_id === product.product_id) ?
                                        <Favorites height={30} width={30} /> :
                                        <NoFavorites height={30} width={30} />
                                }
                            </div>
                            <div onClick={handlerAddCart}>
                                {
                                    carts.find(i => i.product_id === product.product_id) ?
                                    <CartProduct height={30} width={30}/> :
                                    <NoCart height={30} width={30}/>
                                }
                            </div>
                            <Button
                                onClick={handlerAddCartBtn}
                                className='my-button font-s-20 ms-3 '
                            >????????????</Button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div >
                    <h3 className='font-s-20 fw-normal'>????????????????</h3>
                    <p className='font-s-16 product-card-desc-text'>{product.desc}</p>
                    <hr/>
                </div>
                <div>
                    <div className='d-flex justify-content-around'>
                        <div
                            onClick={() => setShowInfo('characteristics')}
                            className={showInfo === 'characteristics' ? 'list-group-item active' : 'list-group-item'}
                        >????????????????????????????</div>
                        <div
                            onClick={() => setIsShowReviews(true)}
                            className='list-group-item a-btn-product-card z-index-0'
                        >????????????</div>
                        <div
                            className={showInfo === 'accessories' ? 'list-group-item active' : 'list-group-item'}
                            onClick={() => setShowInfo('accessories')}
                        >????????????????????</div>
                    </div>

                    {
                        showInfo === 'characteristics' &&
                            <div>
                                <Characteristics characteristics={product.characteristics}/>
                            </div>
                    }
                    {
                        showInfo === 'accessories' &&
                        <div>
                            <ul>
                                {product.accessories.map( (accessory,i) =>
                                    <li key={i}>{accessory}</li>
                                )}
                            </ul>
                        </div>
                    }
                    <hr />

                    <h3 className='font-s-20 fw-normal mt-3'>?????????????? ????????????</h3>
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
                                            <Card.Img
                                                src={`${process.env.REACT_APP_API_URL}${item.img[0]}`}
                                                className='product-card-img mb-2 mx-auto d-block'
                                            />
                                            <div className='text-wrap'>{item.name}</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                                :
                                <div
                                    className='unactive-text font-s-30 text-center my-5'
                                >???????????? ????????</div>
                        }
                    </div>

                </div>
            </div>
            <ModalCharacteristics characteristics={product.characteristics} show={isShowCharacteristics} onHide={() => setIsShowCharacteristics(false)} />
            <ModalReviews
                setReview={handlerReview}
                reviews={product.reviews}
                show={isShowReviews}
                onHide={() => setIsShowReviews(false)}
            />
        </div>
    );
};

export default ProductCard;

// const characteristics = [["?????????????? ??????",[["????????","????????????"],["???????????????? ????????????","????????????????"],["???????????????? ??????????????","??????????????"]],],["?????????????? ??????", [["????????","????????????"],["???????????????? ????????????","????????????????"],["???????????????? ??????????????","??????????????"]],],]
