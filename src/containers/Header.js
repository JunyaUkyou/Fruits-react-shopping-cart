import React from 'react';
import { connect } from 'react-redux';
import  Header  from '../components/Header';
import { changeLang } from '../actions';

const geTtotalPrice = (cart,products) => {
//  const aaaa = cart.map(val => {
//    return products.filter((val2) => {
//      return val.id === val2.id
//    }).shift();
//  })


//  console.log(cart);
  const sum = cart.reduce((a,x) => a+=(x.price * x.quantity),0);
//  console.log(sum);
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
    total_price: geTtotalPrice(state.cart,state.products),
    total_price_intax: geTtotalPriceInTax(state.cart),
    totalQuantity: geTtotalQuantity(state.cart),
    lang: state.lang
  };
};

const mapDispatchToProps = dispatch => ({
  changeLang: payload => dispatch(changeLang(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
