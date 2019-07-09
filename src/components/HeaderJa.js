import React from 'react';

const HeaderJa = (props) => {
  const { current } = props.lang;
  const langOption =
    props.lang.select.map((val,index) => <option key={index} value={val}>{val}</option>);

  return (
    <div>
      現在のカート {props.totalQuantity}個 {props.total_price}円
      <select value={current} onChange={e=>props.changeLang(e.target.value)}>
        {langOption}
      </select>
    </div>
  )
}

export default HeaderJa;
