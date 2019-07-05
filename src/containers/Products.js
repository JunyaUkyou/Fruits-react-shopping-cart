import React from 'react';
import  Products  from '../components/Products';
import { connect } from 'react-redux';
import { addProduct, getProductList } from '../actions';

const getProductForLang = (lang) => {
  return getProductList(lang.current)
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    lang:state.lang,
    aaa:getProductForLang(state.lang)
  };
};
const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product)),
  getProductForLang: lang => dispatch(getProductForLang(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
