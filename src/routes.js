import {
    AUTH_ROUTER,
    CART_ROUTER,
    FAVORITES_ROUTER,
    HISTORY_PRODUCT_ROUTER,
    LIST_MAP_ROUTER, LOADING_ROUTER,
    MAP_ROUTER,
    MESSAGE_ROUTER,
    MESSAGES_ROUTER,
    ORDERING_ROUTER,
    PRODUCT_CARD_ROUTER,
    PRODUCTS_ROUTER,
    REGISTRATION_EMAIL_ROUTER, REGISTRATION_PHONE_PASSWORD_ROUTER,
    REGISTRATION_PHONE_ROUTER,
    REGISTRATION_ROUTER,
    REPAIR_ROUTER, RESTORE_PASSWORD, RESTORE_PASSWORD_COD, RESTORE_PASSWORD_NEW_PASSWORD,
    SETTING_ROUTER,
    STATUSORDER_ROUTER,
    USER_ROUTER
} from "./consts";

import Cart from "./pages/Cart";
import User from "./pages/User";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import Messages from "./pages/Messages";
import ProductCard from "./pages/ProductCard";
import Products from "./pages/Products";
import Repair from "./pages/Repair";
import ListMap from "./pages/ListMap";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import MapYandex from "./pages/MapYandex";
import StatusOrder from "./pages/StatusOrder";
import HistoryProduct from "./pages/HistoryProduct";
import Ordering from "./pages/Ordering";
import Registration from "./pages/registration/Registration";
import RegistrationEmail from "./pages/registration/RegistrationEmail";
import RegistrationPhone from "./pages/registration/RegistrationPhone";
import RegistrationPhonePassword from "./pages/registration/RegistrationPhonePassword";
import RestorePassword from "./pages/restorePassword/RestorePassword";
import RestorePasswordCod from "./pages/restorePassword/RestorePasswordCod";
import RestorePasswordNewPassword from "./pages/restorePassword/RestorePasswordNewPassword";
import Loading from "./pages/Loading";

export const authRouter = [
    {
        path: USER_ROUTER,
        Component: User
    },
    {
        path: MESSAGES_ROUTER,
        Component: Messages
    },
    {
        path: MESSAGE_ROUTER,
        Component: Message
    },
    {
        path: SETTING_ROUTER,
        Component: Settings
    },
    {
        path: STATUSORDER_ROUTER,
        Component: StatusOrder
    },
    {
        path: HISTORY_PRODUCT_ROUTER,
        Component: HistoryProduct
    },
    {
        path: ORDERING_ROUTER,
        Component: Ordering
    },
]

export const publicRouter = [
    {
        path: CART_ROUTER,
        Component: Cart
    },
    {
        path: AUTH_ROUTER,
        Component: Auth
    },
    {
        path: FAVORITES_ROUTER,
        Component: Favorites
    },
    {
        path: PRODUCT_CARD_ROUTER + '/:id',
        Component: ProductCard
    },
    {
        path: PRODUCTS_ROUTER,
        Component: Products
    },
    {
        path: REPAIR_ROUTER,
        Component: Repair
    },
    {
        path: LIST_MAP_ROUTER,
        Component: ListMap
    },
    {
        path: MAP_ROUTER,
        Component: MapYandex
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Registration
    },
    {
        path: REGISTRATION_EMAIL_ROUTER,
        Component: RegistrationEmail
    },
    {
        path: REGISTRATION_PHONE_ROUTER,
        Component: RegistrationPhone
    },
    {
        path: REGISTRATION_PHONE_PASSWORD_ROUTER,
        Component: RegistrationPhonePassword
    },
    {
        path: RESTORE_PASSWORD,
        Component: RestorePassword
    },
    {
        path: RESTORE_PASSWORD_COD,
        Component: RestorePasswordCod
    },
    {
        path: RESTORE_PASSWORD_NEW_PASSWORD,
        Component: RestorePasswordNewPassword
    },
    {
        path: LOADING_ROUTER,
        Component: Loading
    },
]