import {
    SET_CART_CLICK_ICON,
    SET_COUNT_FAVORITE,
    SET_FAVORITES,
    ADD_CART,
    DELETE_CART
} from './types'

const initialState = {
    isAuth: true,
    user: {},
    favorites: [],
    cart: [],
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CART_CLICK_ICON: return {
            ...state, cart: (() => {
                if(state.cart.find( item => item.product_id === action.payload.cart.product_id)){
                    return state.cart.filter( item => item.product_id !== action.payload.cart.product_id)
                }
                return [...state.cart, {...action.payload.cart, count: action.payload.count}]
            })()
        }
        case SET_FAVORITES: return {
            ...state, favorites: (() => {
                if(state.favorites.find( item => item.product_id === action.payload.favorite.product_id)){
                    return state.favorites.filter( item => item.product_id !== action.payload.favorite.product_id)
                }
                return [...state.favorites, {...action.payload.favorite, count: action.payload.count}]
            })()
        }
        case SET_COUNT_FAVORITE: return {
            ...state, favorites: state.favorites.map( item => {
                if (item.product_id === action.payload.id){
                    return { ...item, count: action.payload.count}
                }
                return item
            })
        }
        case ADD_CART: return {
            ...state, cart: (() => {
                if(state.cart.find( item => item.product_id === action.payload.item.product_id)){
                    return state.cart.map( i => {
                        if(i.product_id === action.payload.item.product_id){
                            return { ...i, count: action.payload.count}
                        }
                        return i
                    })
                }
                return [ {...action.payload.item, count: action.payload.count}, ...state.cart ]
            })()
                // [ {...action.payload.item, count: action.payload.count }, ...state.cart]
        }
        case DELETE_CART: return {
            ...state, cart: state.cart.filter( item => item.product_id !== action.payload)
        }
        // case SET_FAVORITES: return {
        //     ...state, favorites: action.payload
        // }
        default: return state
    }
}