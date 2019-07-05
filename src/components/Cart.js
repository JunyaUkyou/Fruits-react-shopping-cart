import React from 'react';
import CartItems from './CartItems';

class Cart extends React.Component {
  render() {
    const inCart = <CartItems {...this.props} changeValu={this.changeValu} clickDelteButton={this.clickDelteButton} />

    return (
      <div>
        <h2>Cart</h2>
        {inCart}
      </div>
    )
  }

  changeValu = (quantity,product_id) => {
    const product = this.props.products[this.props.lang.current].filter(val => val.id === product_id).shift();
    product.quantity = quantity;
    this.props.changeQuantityOfProduct(product);
  }

  clickDelteButton = (e,product_id) => {
    const product = this.props.products[this.props.lang.current].filter(val => val.id === product_id).shift();
    this.props.deleteProduct(product);
  }
}

export default Cart;
