import React from 'react';
import {NavLink,useLocation} from 'react-router-dom'

import Instruments from "../icons/svgComponents/Instruments";
import InstrumentsActive from "../icons/svgComponents/InstrumentsActive";
import ProductSvg from "../icons/svgComponents/ProductSvg";
import ProductActiveSvg from "../icons/svgComponents/ProductActiveSvg";
import FavoritesSvg from "../icons/svgComponents/FavoritesSvg";
import {FavoritesActiveSvg} from "../icons/svgComponents/FavoritesActiveSvg";
import MessagesSvg from "../icons/svgComponents/MessagesSvg";
import MessagesActiveSvg from "../icons/svgComponents/MessagesActiveSvg";
import CartSvg from "../icons/svgComponents/CartSvg";
import {CartActiveSvg} from "../icons/svgComponents/CartActiveSvg";

import {FAVORITES_ROUTER, PRODUCTS_ROUTER, REPAIR_ROUTER,MESSAGES_ROUTER,CART_ROUTER} from "../consts";

const sizeImg = 23

const NavBar = () => {
    const location = useLocation()

    return (
        <div className='nav-bar secondary shadow-bottom-bar font-s-10 text-center d-flex justify-content-around align-items-center'>
            <NavLink to={REPAIR_ROUTER}>
                <div >
                    <div >
                        {location.pathname === REPAIR_ROUTER ?
                            <InstrumentsActive width={sizeImg} height={sizeImg} /> :
                            <Instruments width={sizeImg} height={sizeImg} />
                        }
                    </div>
                    <div className={location.pathname === REPAIR_ROUTER ? 'text-main-color' : ''} >Ремонт</div>
                </div>
            </NavLink>
            <NavLink to={PRODUCTS_ROUTER}>
                <div>
                    <div>
                        {location.pathname === PRODUCTS_ROUTER ?
                            <ProductActiveSvg height={sizeImg} width={sizeImg} /> :
                            <ProductSvg height={sizeImg} width={sizeImg} />
                        }
                    </div>
                    <div className={location.pathname === PRODUCTS_ROUTER ? 'text-main-color' : ''} >Каталог</div>
                </div>
            </NavLink>
            <NavLink to={FAVORITES_ROUTER}>
                 <div>
                     <div>
                         {location.pathname === FAVORITES_ROUTER ?
                             <FavoritesActiveSvg height={sizeImg} width={sizeImg} /> :
                             <FavoritesSvg height={sizeImg} width={sizeImg} />
                         }
                     </div>
                     <div className={location.pathname === FAVORITES_ROUTER ? 'text-main-color' : ''}>Избранное</div>
                 </div>
            </NavLink>
            <NavLink to={MESSAGES_ROUTER}>
                <div>
                    <div>
                        {location.pathname === MESSAGES_ROUTER ?
                            <MessagesActiveSvg height={sizeImg} width={sizeImg} /> :
                            <MessagesSvg height={sizeImg} width={sizeImg} />
                        }
                    </div>
                    <div className={location.pathname === MESSAGES_ROUTER ? 'text-main-color' : ''}>Сообщения</div>
                </div>
            </NavLink>
            <NavLink to={CART_ROUTER}>
                <div>
                    <div>
                        {location.pathname === CART_ROUTER ?
                            <CartActiveSvg height={sizeImg} width={sizeImg} /> :
                            <CartSvg height={sizeImg} width={sizeImg} />
                        }
                    </div>
                    <div className={location.pathname === CART_ROUTER ? 'text-main-color' : ''}>Корзина</div>
                </div>
            </NavLink>
        </div>
    );
};

export default NavBar;