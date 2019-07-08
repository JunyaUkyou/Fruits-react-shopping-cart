import { WAIT_PRODUCT_LIST, SHOW_PRODUCT_LIST,SHOW_ALL_PRODUCT_LIST } from '../actions'


const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
//    case SHOW_PRODUCT_LIST:
//      return action.payload;
    case SHOW_ALL_PRODUCT_LIST:
      return action.payload;
    case WAIT_PRODUCT_LIST:
      return state;
    default:
      return state
  }
}

export default products
