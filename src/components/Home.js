import React from 'react';
import HomeJa from './HomeJa';
import HomeEN from './HomeEN';

class Home extends React.Component {
  render() {

    const getHomeContens = () => {
      switch (this.props.lang.current) {
        case '日本語':
          return <HomeJa />;
        case 'English':
          return <HomeEN />;
        default:
          return <HomeJa />;

      }
    }
    const HomeContens = getHomeContens();

    return (
      <div>
        {HomeContens}
      </div>
    )
  }
}


export default Home;
