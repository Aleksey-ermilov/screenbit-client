import {
    SET_COMPLEX_REPAIR,
    SET_SIMPLE_REPAIR
} from './types'

export function setComplexRepair (id) {
    return {type: SET_COMPLEX_REPAIR, payload: id}
}
export function setSimpleRepair (id) {
    return {type: SET_SIMPLE_REPAIR, payload: id}
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