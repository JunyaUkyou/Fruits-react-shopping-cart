import React from 'react';
import ButtonAppBar from './ButtonAppBar.js';

import { withRouter } from 'react-router';

class Header extends React.Component {
  render() {    
    return (
      <div className="herder_contens">
        <ButtonAppBar {...this.props} changeLang={this.changeLang}  clickLogo={this.clickLogo} goPage={this.goPage}  />
      </div>
    );
  }

  changeLang = (value) => {
    this.props.changeLang(value);
  }

  clickLogo = () => {
    this.props.history.push('/');
  }

  goPage = url => ( this.props.history.push(url) );

}

export default withRouter(Header);
