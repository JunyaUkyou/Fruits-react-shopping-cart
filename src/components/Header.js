import React from 'react';
import HeaderJa from './HeaderJa';
import HeaderEn from './HeaderEn';
import '../style/header.css';

class Header extends React.Component {
  render() {

    const getHeaderContens = () => {
      switch (this.props.lang.current) {
        case '日本語':
          return <HeaderJa {...this.props}/>;
        case 'English':
          return <HeaderEn {...this.props}/>;
        default:
          return <HeaderJa {...this.props}/>;

      }
    }
    const headerContens = getHeaderContens();
    
    return (
      <div className="herder_contens">
        <h1>Ffuit Shop</h1>
        {headerContens}
      </div>
    );
  }

  changeLang = (value) => {
    this.props.changeLang(value);
  }
}

export default Header;
