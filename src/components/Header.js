import React from 'react';
import { getText } from './HeaderText';
//import '../style/header.css';

class Header extends React.Component {
  render() {

    const message = getText(this.props.lang.current);
    const langOption =
      this.props.lang.select.map((val,index) => <option key={index} value={val}>{val}</option>);
    
    return (
      <div className="herder_contens">
        <h1>{message.title}</h1>
        <div>
          {message.your_cart}  {this.props.totalQuantity}{message.quantity} {this.props.total_price}{message.yen}
          <select value={this.props.lang.current} onChange={e=>this.changeLang(e.target.value)}>
            {langOption}
          </select>
        </div>
      </div>
    );
  }

  changeLang = (value) => {
    this.props.changeLang(value);
  }
}

export default Header;
