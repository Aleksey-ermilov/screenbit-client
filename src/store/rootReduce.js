import { combineReducers } from 'redux'

import {userReducer} from "./user/userReduce";
import {productReducer} from "./product/productReduce";
import {appReducer} from './app/appReducer'

export const rootReduce = combineReducers({
    product: productReducer,
    user: userReducer,
    app: appReducer
})