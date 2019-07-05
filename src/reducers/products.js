import { WAIT_PRODUCT_LIST, SHOW_PRODUCT_LIST } from '../actions'


const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_LIST:
    console.log(SHOW_PRODUCT_LIST, action.payload);
//      return action.payload[action.lang];
      return action.payload;
    case WAIT_PRODUCT_LIST:
      return state;
    default:
      return state
  }
}

export default products
