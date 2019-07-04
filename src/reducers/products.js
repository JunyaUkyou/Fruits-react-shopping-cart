//import { ADDTODO,TOGGLE } from '../actions'

const initialState = [
  {
    id:1,
    name:'りんご',
    memo:'とっても美味しいりんごです',
    price:100,
    price_in_tax:108,
  },
  {
    id:2,
    name:'みかん',
    memo:'とっても美味しいみかんです',
    price:200,
    price_in_tax:216,
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default products
