import React from 'react';
import {Image,} from "react-bootstrap";
import {NavLink,useLocation} from 'react-router-dom'

import instruments from '../icons/png/instruments.png'
import instrumentsActive from '../icons/png/instrumentsActive.png'
import product from '../icons/png/product.png'
import productActive from '../icons/png/productActive.png'
import favorites from '../icons/png/favorites.png'
import favoritesActive from '../icons/png/favoritesActive.png'
import messages from '../icons/png/messages.png'
import messagesActive from '../icons/png/messagesActive.png'
import cart from '../icons/png/cart.png'
import cartActive from '../icons/png/cartActive.png'

import {FAVORITES_ROUTER, PRODUCTS_ROUTER, REPAIR_ROUTER,MESSAGES_ROUTER,CART_ROUTER} from "../consts";

const NavBar = () => {
    const location = useLocation()

    return (
        <div className='nav-bar secondary shadow-bottom-bar font-s-10 text-center d-flex justify-content-around align-items-center'>
            <NavLink to={REPAIR_ROUTER}>
                <div >
                    <div >
                        {location.pathname === REPAIR_ROUTER ?
                            <Image height={29} width={29} src={instrumentsActive} /> :
                            <Image height={29} width={29} src={instruments} />
                        }
                    </div>
                    <div className={location.pathname === REPAIR_ROUTER ? 'text-main-color' : ''} >Ремонт</div>
                </div>
            </NavLink>
            <NavLink to={PRODUCTS_ROUTER}>
                <div>
                    <div>
                        {location.pathname === PRODUCTS_ROUTER ?
                            <Image height={29} width={29} src={productActive} /> :
                            <Image height={29} width={29} src={product} />
                        }
                    </div>
                    <div className={location.pathname === PRODUCTS_ROUTER ? 'text-main-color' : ''} >Каталог</div>
                </div>
            </NavLink>
            <NavLink to={FAVORITES_ROUTER}>
                 <div>
                     <div>
                         {location.pathname === FAVORITES_ROUTER ?
                             <Image height={29} width={29} src={favoritesActive} /> :
                             <Image height={29} width={29} src={favorites} />
                         }
                     </div>
                     <div className={location.pathname === FAVORITES_ROUTER ? 'text-main-color' : ''}>Избранное</div>
                 </div>
            </NavLink>
            <NavLink to={MESSAGES_ROUTER}>
                <div>
                    <div>
                        {location.pathname === MESSAGES_ROUTER ?
                            <Image height={29} width={29} src={messagesActive} /> :
                            <Image height={29} width={29} src={messages} />
                        }
                    </div>
                    <div className={location.pathname === MESSAGES_ROUTER ? 'text-main-color' : ''}>Сообщения</div>
                </div>
            </NavLink>
            <NavLink to={CART_ROUTER}>
                <div>
                    <div>
                        {location.pathname === CART_ROUTER ?
                            <Image height={29} width={29} src={cartActive} /> :
                            <Image height={29} width={29} src={cart} />
                        }
                    </div>
                    <div className={location.pathname === CART_ROUTER ? 'my-link' : ''}>Корзина</div>
                </div>
            </NavLink>
        </div>
    );
};

export default NavBar;