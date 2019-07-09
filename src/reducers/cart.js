import { ADDPRODUCT,CHANGEQUANTITYOFPRODUCT,DELETEPRODUCT } from '../actions'

const initialState = [];

const cart =  (state = initialState, action) => {
  const { product } = action;
  switch (action.type) {
    case ADDPRODUCT:
      const existing = state.some(val => val.id === product.id);
      if(existing){
        return state.map(val => {
          if(val.id === product.id){
            return {...val,quantity:val.quantity + 1};
          }else{
            return val;
          }
        });
      }

      return [
        ...state, { 
          id:product.id,
          quantity:product.quantity,
          price:product.price
        }
      ]
    case DELETEPRODUCT:
      return state.filter(val => val.id !== product.id)
    case CHANGEQUANTITYOFPRODUCT:
      return state.map(val => {
        if(val.id === product.id){
          return {...val,quantity:product.quantity};
        }else{
          return val;
        }
      });
    default:
      return state
  }
}

export default cart
