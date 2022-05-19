import {
    SET_CART_CLICK_ICON,
    SET_COUNT_FAVORITE,
    SET_FAVORITES,
    ADD_CART,
    DELETE_CART,
    ADD_MESSAGE,
    SET_AUTH,
    SET_USER, FETCH_FAVORITES, FETCH_CART, SET_ADDRESSES, DELETE_ADDRESS, SELECTED_ADDRESS
} from './types'

const initialState = {
    isAuth: false,
    user: null,
    selectedAddress: null,
    messages: [],
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
        }
        case DELETE_CART: return {
            ...state, cart: state.cart.filter( item => item.product_id !== action.payload)
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
        case ADD_MESSAGE: return {
            ...state, messages: state.messages.map( item => {
                if (item.id === action.payload.id){
                    item.message.push({id: action.payload.user_id,mes: action.payload.mes})
                    return item
                }
                return item
            })
        }
        case SET_AUTH: return {
                ...state, isAuth: action.payload
        }
        case SET_USER: return {
            ...state, user: action.payload
        }
        case FETCH_FAVORITES: return {
            ...state, favorites: action.payload
        }
        case FETCH_CART: return {
            ...state, cart: action.payload
        }
        case SET_ADDRESSES: return {
            ...state, user: {...state.user, addresses: action.payload}
        }
        case DELETE_ADDRESS: return {
            ...state, user: {...state.user, addresses: state.user.addresses.filter( item => item.id !== action.payload) }
        }
        case SELECTED_ADDRESS: return {
            ...state, selectedAddress: action.payload
        }
        // case SET_FAVORITES: return {
        //     ...state, favorites: action.payload
        // }
        default: return state
    }
}
/*

const user =  {
    id: '2',
    name: 'Вася',
    lastname: 'Иванов',
    patronymic: 'Висарионович',
    gender: 'Мужской',
    birthday: '15.02.1998',
    user_id: 'auth_2',
    phone: '8 800 800 88 88',
    email: 'email@email.com',
    fullName: 'Иванов Вася Висарионович',
    addresses: '',
    img: imgDefaultImg,// '56a96121-033a-41af-9f4c-2c5602fdc4e6.png'
    favorites: [],
    cart: [],
    history_order: [],
    order_status: []
}*/

/*const messages = [
    {
        id:'1',
        product_id: 'prod_1',
        imgProduct: phone,
        user_id: 'auth_2',
        admin_id: 'admin_15',
        actual: true,
        date: Date.now(),
        subject: 'Apple 14 Apple 14 Apple 14 Apple 14 Apple 14 Apple 14 Apple 14',
        type: 'repair',
        message: [
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },

            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },

        ]
    },
    {
        id:'2',
        product_id: 'prod_3',
        imgProduct: phone,
        user_id: 'auth_1',
        admin_id: 'admin_1',
        actual: true,
        date: Date.now(),
        subject: 'Samsung A51',
        type: 'repair',
        message: [
            {
                id: 'auth_1',
                mes: 'Привет'
            },
            {
                id: 'auth_1',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_1',
                mes: 'Привет'
            },
            {
                id: 'admin_1',
                mes: 'Есть'
            },
            {
                id: 'admin_1',
                mes: 'Тебе чего'
            },
        ]
    },
]*/
