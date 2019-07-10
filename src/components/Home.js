import React from 'react';
import { getText } from './HomeText';

class Home extends React.Component {
  render() {

    const message = getText(this.props.lang.current);
    const list = message.notice.map((val,index) => <li key={index}>{val}</li>)

    return (
      <div>
        <h2>{ message.page_title }</h2>
        <p>{ message.welcome }</p>
        <p>{ message.notice_title }</p>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}


export default Home;
