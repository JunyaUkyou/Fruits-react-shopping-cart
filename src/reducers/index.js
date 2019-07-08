import { combineReducers } from 'redux'
import cart from './cart'
import products from './products'
import lang from './lang'
import taxrate from './taxrate'

export default combineReducers({ cart,products,lang,taxrate })
