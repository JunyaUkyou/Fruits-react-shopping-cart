import React from 'react';
import  Products  from '../components/Products';
import { connect } from 'react-redux';
import { addProduct } from '../actions';

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
