import React from 'react';
import Header from './containers/Header';
import MainContents from './components/MainContents';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContents />
      <Footer />
    </div>
  );
}


export default App;
