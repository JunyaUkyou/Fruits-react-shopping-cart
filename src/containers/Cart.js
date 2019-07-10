import React from 'react';
import  Cart  from '../components/Cart';
import { connect } from 'react-redux';
import { addProduct,deleteProduct,changeQuantityOfProduct,changeLang } from '../actions';

const geTtotalPrice = cart => {
  const sum = cart.reduce((a,x) => a+=(x.price * x.quantity),0);
  return sum;
}

const geTtotalPriceInTax = (cart, taxrate) => {
  const rate = (100 + taxrate) / 100
  const sum = cart.reduce((a,x) => a+=((x.price * rate) * x.quantity),0);
  return sum;
}
const geTtotalQuantity = cart => {
  const sum = cart.reduce((a,x) => a+=x.quantity,0);
  return sum;
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    total_price: geTtotalPrice(state.cart),
    total_price_intax: geTtotalPriceInTax(state.cart, state.taxrate),
    totalQuantity: geTtotalQuantity(state.cart),
    lang: state.lang,
    taxrate: state.taxrate
  };
};
const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product)),
  deleteProduct: product => dispatch(deleteProduct(product)),
  changeQuantityOfProduct: product => dispatch(changeQuantityOfProduct(product)),
  changeLang: payload => dispatch(changeLang(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
