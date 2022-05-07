import {
    SET_FAVORITES,
    SET_CART_CLICK_ICON,
    SET_COUNT_FAVORITE,
    ADD_CART,
    DELETE_CART
} from './types'

export function setCartClickIcon (cart,count) {
    return { type: SET_CART_CLICK_ICON, payload: {cart,count} }
}
export function setFavorites (favorite,count) {
    return { type: SET_FAVORITES, payload: {favorite,count} }
}
export function setCountFavorite (product_id,count) {
    return { type: SET_COUNT_FAVORITE, payload: {id:product_id,count} }
}
export function addCart (item,count) {
    return { type: ADD_CART, payload: {item,count} }
}
export function deleteCart (product_id) {
    return { type: DELETE_CART, payload: product_id }
}

/*
export function updateUser (user) {
    return async (dispatch, getState) => {
        try{
            const { user } = getState()

        } catch (e){

        }
    }
}*/
