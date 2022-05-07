import {
    SELECTED_CATEGORIES,
    SET_PRODUCTS,
    SET_SORT,
    SEARCH_PRODUCTS, SET_PRODUCT, SET_SIMILAR_PRODUCTS
}
    from './types'

export function setSort (obj) { // сортировку через сервер
    return (dispatch, getState) => {
        const { product: { products } } = getState()
        dispatch({type: SET_SORT, payload: obj})
        dispatch({type: SET_PRODUCTS, payload: compareProducts(obj,obj.type,products) })
    }
}

export function selectedCategories (id) { // сортировку через сервер
    return {type: SELECTED_CATEGORIES, payload: id}
}
export function searchProducts (search) { // сортировку через сервер
    return {type: SEARCH_PRODUCTS, payload: search}
}

export function setProducts (products) {
    return {type: SET_PRODUCTS, payload: products}
}
export function setProduct (product) {
    return {type: SET_PRODUCT, payload: product}
}
export function setSimilarProducts (category) {
    return (dispatch, getState) => {
        const { product: { products } } = getState()
        dispatch({
            type: SET_SIMILAR_PRODUCTS,
            payload: products.filter( item => item.category === category)
        })
    }
}



const compareProducts = (obj,compare,products) => {
    if(obj.id === '2'){
        return  products.sort((a,b) => +a[compare] - +b[compare])
    }
    if(obj.id === '1'){
        return products.sort((a,b) => +b[compare] - +a[compare])
    }
}

/*
export function setError (error) {
    return {type: SET_ERROR, payload: error}
}

export function updateUser (user) {
    return async (dispatch, getState) => {
        try{
            const { user } = getState()

        } catch (e){

        }
    }
}*/