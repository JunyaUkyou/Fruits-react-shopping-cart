import { combineReducers } from 'redux'
import cart from './cart'
import products from './products'
import lang from './lang'

export default combineReducers({ cart,products,lang })
