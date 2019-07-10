import React from 'react';

const HeaderJa = (props) => {
  const { current } = props.lang;
  const langOption =
    props.lang.select.map((val,index) => <option key={index} value={val}>{val}</option>);

  return (
    <div>
      Your shopping cart  {props.totalQuantity}quantity {props.total_price}yen
      <select value={current} onChange={e=>props.changeLang(e.target.value)}>
        {langOption}
      </select>
    </div>
  )
}

export default HeaderJa;
