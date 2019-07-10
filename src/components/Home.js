import React from 'react';
import HomeJa from './HomeJa';
import HomeEN from './HomeEN';
import { getText } from './HomeText';

class Home extends React.Component {
  render() {

    const message = getText(this.props.lang.current);
    console.log(message);
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
