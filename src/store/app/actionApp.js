import {
    SET_COMPLEX_REPAIR, SET_ERROR, SET_LOADING,
    SET_SIMPLE_REPAIR
} from './types'

export function setComplexRepair (id) {
    return {type: SET_COMPLEX_REPAIR, payload: id}
}
export function setSimpleRepair (id) {
    return {type: SET_SIMPLE_REPAIR, payload: id}
}
export function setLoading (loading) {
    return {type: SET_LOADING, payload: loading}
}
export function setError (error) { return {type: SET_ERROR, payload: error} }
/*
export function updateUser (user) {
    return async (dispatch, getState) => {
        try{
            const { user } = getState()

        } catch (e){

        }
    }
}*/