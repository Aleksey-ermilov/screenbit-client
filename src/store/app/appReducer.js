import {
    SET_COMPLEX_REPAIR,
    SET_SIMPLE_REPAIR,
    SET_LOADING, SET_ERROR
} from './types'

const initialState = {
    complexRepair: [
        {id: '1', name:'Ремонт дисплея', price: '1000', selected: false},
        {id: '2', name:'Замена порта для зарядки', price: '2000', selected: false},
        {id: '3', name:'Зарядка аккумуляторной батареи', price: '3000', selected: false},
    ],
    simpleRepair: [
        {id: '1', name:'Замена стекла', price: '100', selected: false},
        {id: '2', name:'Замена Touch ID', price: '200', selected: false},
        {id: '3', name:'Ремонт дисплея', price: '300', selected: false},
        {id: '4', name:'Замена порта для зарядки', price: '400', selected: false},
        {id: '5', name:'Зарядка аккумуляторной батареи', price: '500', selected: false},
    ],
    loading: false,
    error: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COMPLEX_REPAIR: return {
            ...state, complexRepair: state.complexRepair.map( item => {
                if (item.id === action.payload){
                    return { ...item, selected: !item.selected}
                }
                return item
            })
        }
        case SET_SIMPLE_REPAIR: return {
            ...state, simpleRepair: state.simpleRepair.map( item => {
                if (item.id === action.payload){
                    return { ...item, selected: !item.selected}
                }
                return item
            })
        }
        case SET_LOADING: return {
            ...state, loading: action.payload
        }
        case SET_ERROR: return {
            ...state, error: action.payload
        }
        default: return state
    }
}