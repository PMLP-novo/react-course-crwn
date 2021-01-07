import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {userReducer} from "./user.store"
import {cartReducer} from "./cart.store"

const persistsConfig ={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({'user':userReducer, "cart":cartReducer})

export default persistReducer(persistsConfig, rootReducer)
