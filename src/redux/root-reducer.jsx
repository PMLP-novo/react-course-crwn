import {combineReducers} from 'redux'
import {userReducer} from "./user.store"
import {cartReducer} from "./cart.store"
export default combineReducers({'user':userReducer, "cart":cartReducer})