import React, {useState,useRef,useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {Form,Dropdown,Card} from "react-bootstrap";

import Header from "../components/Header";
import Loading from "./Loading";
import EmptyListMes from "../components/EmptyListMes";

import Person from "../icons/svgComponents/Person";
import {FavoritesActiveSvg as Favorites} from "../icons/svgComponents/FavoritesActiveSvg";
import NoFavorites from "../icons/svgComponents/NoFavorites";
import CartProduct from "../icons/svgComponents/CartProduct";
import {CartActiveSvg as NoCart} from "../icons/svgComponents/CartActiveSvg";

import {PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import {selectedCategories, setSort, searchProducts, setProducts} from '../store/product/actionProduct'
import {setCartClickIcon, setFavorites} from '../store/user/actionUser'

import {getProducts} from "../http/productApi";
import {httpCartByIconCart, httpFavorites} from "../http/userAPI";

const Products = () => {
    const {
        products,sortNewer,sortPrice,
        categories, sort,search
    } = useSelector( state => state.product)
    const {favorites, cart: carts,user: {user_id}} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [loading,setLoading] = useState(true)
    const [value,setValue] = useState(search)
    let timer = useRef(null)

    useEffect( () => {
        getProducts().then( data => {
            dispatch(setProducts(data.rows))
        }).finally(() => setLoading(false))
    },[])

    const productsFilterByCategories = products.filter( i => categories.some( c => c.checked && (c.name === i.category)) )
    const handlerProductCard = item => {
        navigate(`${PRODUCT_CARD_ROUTER}/${item.product_id}`,{
            state:
                {
                    product_id: item.product_id,
                }
        })
    }
    const handlerAddFavorite = (e,item) => {
        e.stopPropagation()
        httpFavorites({...item, count: 1},user_id).then(data => {
            dispatch(setFavorites(item,1))
        })

    }
    const handlerAddCart = (e,item) => {
        e.stopPropagation()
        httpCartByIconCart(item,1,user_id).then( data => {
            dispatch(setCartClickIcon(item,1))
        })
    }
    const handlerSearchForm = e => {
        if(timer.current !== null){
            clearTimeout(timer.current)
            timer.current = null
        }
        setValue(e.target.value)
        timer.current = setTimeout( () => {
            dispatch(searchProducts(e.target.value))
        },1000)
    }
    const searchFunc = arr => {
        if (search === ''){
            return arr
        }
        return arr.filter( item => item.name.includes(search))
    }

    if (loading){
        return <Loading />
    }
    return (
        <div className='margin-bottom-footer'>
            <Header className='header-bar head ' >
                <div >
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <Form.Control
                            value={value}
                            onChange={e => handlerSearchForm(e)}
                            className='my-form-control big-form-control-modal-s-85pr font-s-12 p-1'
                            placeholder={"Поиск"}
                        />
                        <div onClick={() => navigate(USER_ROUTER)} >
                            <Person height={15} width={15} />
                        </div>
                    </div>
                    <div>
                        <Form className='d-flex flex-wrap font-s-12 '>
                            {
                                categories.map( item =>
                                    <Form.Check
                                        checked={ item.checked }
                                        onChange={ () => dispatch(selectedCategories(item.id))}
                                        key={item.id}
                                        className='me-3 mb-1'
                                        type={'checkbox'}
                                        id={item.id}
                                        label={item.name}
                                    />
                                )
                            }
                        </Form>
                    </div>
                    <div className='d-flex'>
                        <Dropdown className='me-3'>
                            <Dropdown.Toggle
                                className='font-s-12'
                                as={'span'}
                                id="dropdown-basic"
                            >
                                По новизне
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='my-dropdown-menu font-s-14'>
                                {
                                    sortNewer.map(item =>
                                        <Dropdown.Item
                                            className={sort.id === item.id && sort.type === item.type ? 'my-dropdown-menu-item-active' : ''}
                                            onClick={ () => dispatch(setSort(item))}
                                            key={item.id}
                                        >{item.name}</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle
                                className='font-s-12'
                                as={'span'}
                                id="dropdown-basic"
                            >
                                По цене
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='my-dropdown-menu font-s-14'>
                                {
                                    sortPrice.map(item =>
                                        <Dropdown.Item
                                            className={sort.id === item.id && sort.type === item.type ? 'my-dropdown-menu-item-active' : ''}
                                            onClick={ () => dispatch(setSort(item))}
                                            key={item.id}
                                        >{item.name}</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Header>

            <div className='p-3 d-flex flex-wrap justify-content-around head-margin-150' >
                {
                    searchFunc(productsFilterByCategories).length ?
                        searchFunc(productsFilterByCategories).map( item =>
                        <Card
                            onClick={()=> handlerProductCard(item)}
                            className='product-card font-s-14 mb-2'
                            key={item.product_id}
                        >
                            <Card.Body className='d-flex p-2 justify-content-between'  >
                                <div >
                                    <Card.Img src={`${process.env.REACT_APP_API_URL}${item.img[0]}`} className='product-card-img mb-2' />
                                    <div>{item.name}</div>
                                </div>
                                <div className='product-card-icon'>
                                    <div onClick={(e) => handlerAddFavorite(e,item)}>
                                        {
                                            favorites.find(i => i.product_id === item.product_id) ?
                                            <Favorites height={20} width={20}/> :
                                            <NoFavorites height={20} width={20}/>
                                        }
                                    </div>
                                    <div onClick={(e) => handlerAddCart(e,item)}>
                                        {
                                            carts.find( i => i.product_id === item.product_id) ?
                                                <CartProduct height={20} width={20} /> :
                                                <NoCart height={20} width={20} />
                                        }
                                    </div>
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

export default Products;