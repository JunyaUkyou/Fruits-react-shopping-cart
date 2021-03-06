import React from 'react';
import { getText } from './ProductsText';


class Products extends React.Component {
  constructor(props){
    super(props);

    const product_num = this.props.products.map(val => ({product_id:val.id,num:1}))
    this.state = ({ product_num: product_num });

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.products.length > 1 && prevState.product_num.length === 0){
      const product_num = nextProps.products.map(val => ({product_id:val.id,num:1}))
      return { product_num: product_num };
    }else{
      return null;
    }
  }
  render() {

    const options = new Array(10).fill(0).map((val,index) => {
      return <option key={index} value={index + 1}>{index + 1}</option>
    })
    const taxRate = (this.props.taxrate+100)/100  ;
    const langId = this.props.lang.select.findIndex((val) => val === this.props.lang.current)
    const message = getText(this.props.lang.current);
    const list = this.props.products.map((val,index) => {
      return (
          <li key={val.id}>
            {val.name[langId]}<br />
            {val.memo[langId]}<br />
            {val.price * taxRate}{message.yen} ({message.with_tax}) <br />
            <select onChange={e=>this.changeValu(e.target.value,val.id)} >
              {options}
            </select>
            <button onClick={e=>this.addProduct(e,val.id)}>{message.add_button}</button>
          </li>
      )
    });



    return(
      <div>
        <h2>{message.page_title}</h2>
        <div className="product_area">
          <ul>{list}</ul>
        </div>
      </div>
    )
  }

  changeValu = (selectValue,product_id) => {

      this.setState(state => {
        const product_num = state.product_num.map((val,index) => {
          if(val.product_id === product_id){
            return {product_id:val.product_id,num:Number(selectValue)}
          }else{
            return val
          }
        });
        return {
          product_num,
        };
      });
  }

  addProduct = (e,product_id) => {
    const product = this.props.products.filter(val => val.id === product_id).shift();
    const quantity = this.state.product_num.filter(val => val.product_id === product_id).map(val => val.num).shift();
    product.quantity = quantity;
    this.props.addProduct(product);
  }


}

export default Products;
