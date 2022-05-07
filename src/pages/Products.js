import React, {useState,useRef} from 'react';
import {useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {Image,Form,Dropdown,Card} from "react-bootstrap";

import Header from "../components/Header";
import Loading from "./Loading";

import person from "../icons/png/person.png";
import favorite from '../icons/png/favoritesActive.png'
import noFavorite from '../icons/png/no-favorites.png'
import cart from '../icons/png/cart-product.png'
import noCart from "../icons/png/no-cart-product.png";

import {PRODUCT_CARD_ROUTER, USER_ROUTER} from "../consts";

import {selectedCategories,setSort,searchProducts,setProduct} from '../store/product/actionProduct'
import {setCartClickIcon,setFavorites} from '../store/user/actionUser'
import EmptyListMes from "../components/EmptyListMes";

const Products = () => {
    const {
        products,sortNewer,sortPrice,
        categories, sort,search
    } = useSelector( state => state.product)
    const {favorites, cart: carts} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [value,setValue] = useState(search)
    let timer = useRef(null)

    const productsFilterByCategories = products.filter( i => categories.some( c => c.checked && (c.name === i.category)) )

    const handlerProductCard = item => {
        dispatch(setProduct(item))
        navigate(`${PRODUCT_CARD_ROUTER}/${item.id}`)
    }
    const handlerAddFavorite = (e,item) => {
        e.stopPropagation()
        dispatch(setFavorites(item,1))
    }
    const handlerAddCart = (e,item) => {
        e.stopPropagation()
        dispatch(setCartClickIcon(item,1))
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

    if (!products.length){
        return <Loading />
    }
    return (
        <div className='margin-bottom-footer'>
            <Header className='header-bar  ' >
                <div >
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <Form.Control
                            value={value}
                            onChange={e => handlerSearchForm(e)}
                            className='my-form-control big-form-control-modal-s-70pr font-s-12 p-1'
                            placeholder={"Поиск"}
                        />
                        <><Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} /></>
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

            <div className='p-3 d-flex flex-wrap '>
                {
                    searchFunc(productsFilterByCategories).length ?
                        searchFunc(productsFilterByCategories).map( item =>
                        <Card
                            onClick={()=> handlerProductCard(item)}
                            className='product-card font-s-14 mb-2'
                            key={item.product_id}
                        >
                            <Card.Body className='d-flex p-2' >
                                <div >
                                    <Card.Img src={item.img[0]} className='product-card-img mb-2' />
                                    <div>{item.name}</div>
                                </div>
                                <div className='product-card-icon'>
                                    <Image
                                        onClick={(e) => handlerAddFavorite(e,item)}
                                        height={15}
                                        width={15}
                                        src={ favorites.find( i => i.product_id === item.product_id) ? favorite : noFavorite}
                                    />
                                    <Image
                                        onClick={(e) => handlerAddCart(e,item)}
                                        height={15}
                                        width={15}
                                        src={ carts.find( i => i.product_id === item.product_id) ? cart : noCart }
                                    />
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