import React from 'react';
import { getText } from './FooterText';

class Footer extends React.Component {
  render(){
    const message = getText(this.props.lang.current);

    return (
      <div>
        {message.footer_title}
      </div>
    );
  
  }


}

export default Footer;
