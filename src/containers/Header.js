import React from 'react';
import { connect } from 'react-redux';
import  Header  from '../components/Header';
import { changeLang } from '../actions';

const geTtotalPrice = (cart,taxrate) => {
  const rate = (100 + taxrate) / 100
  const sum = cart.reduce((a,x) => a+=((x.price * rate) * x.quantity),0);
  return sum;
}
const geTtotalPriceInTax = cart => {
  const sum = cart.reduce((a,x) => a+=(x.price_in_tax * x.quantity),0);
  return sum;
}
const geTtotalQuantity = cart => {
  const sum = cart.reduce((a,x) => a+=x.quantity,0);
  return sum;
}


const mapStateToProps = state => {
  return {
    total_price: geTtotalPrice(state.cart,state.taxrate),
    total_price_intax: geTtotalPriceInTax(state.cart),
    totalQuantity: geTtotalQuantity(state.cart),
    lang: state.lang,
    taxrate: state.taxrate
  };
};

const mapDispatchToProps = dispatch => ({
  changeLang: payload => dispatch(changeLang(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
