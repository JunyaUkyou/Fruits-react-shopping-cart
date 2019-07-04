import React from 'react';
import { getText } from './CartText';

const CartItems = (props) => {

  const { cart,total_price_intax,lang } = props;
  const message = getText(lang.current);
  if(cart.length === 0){
    return <p>{message.isEmpty}</p>;
  }

  const options = new Array(10).fill(0).map((val,index) => {
    return <option key={index} value={index + 1}>{index + 1}</option>
  })

  const tableDate = props.cart.map((val,index) => {
    return (
      <tbody key={index}>
        <tr >
          <td><button onClick={e=>props.clickDelteButton(e,val.id)}>{message.deletebutton}</button></td>
          <td>{val.name}</td>
          <td>{val.price_in_tax}</td>
          <td>
            <select value={val.quantity} onChange={e=>props.changeValu(Number(e.target.value),val.id)}>
              {options}
            </select >

          </td>
          <td>{val.price_in_tax * val.quantity}</td>
        </tr>
      </tbody>
    )
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{message.th_name}</th>
            <th>{message.th_price}</th>
            <th>{message.th_quantity}</th>
            <th>{message.th_total}</th>
          </tr>
        </thead>
        {tableDate}
      </table>
      <div>
      {message.total}：{props.total_price_intax}円
      </div>
    </div>
  )
}

export default CartItems;
