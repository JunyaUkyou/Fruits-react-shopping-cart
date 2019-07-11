import React from 'react';
import { getText } from './HeaderText';
import ButtonAppBar from './ButtonAppBar.js';

class Header extends React.Component {
  render() {

    const message = getText(this.props.lang.current);

    
    return (
      <div className="herder_contens">
        <ButtonAppBar {...this.props} changeLang={this.changeLang} />
        <div>
          {message.your_cart}  {this.props.totalQuantity}{message.quantity} {this.props.total_price}{message.yen}
        </div>
      </div>
    );
  }

  changeLang = (value) => {
    this.props.changeLang(value);
  }
}

export default Header;
