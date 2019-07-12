import React from 'react';
import Header from './containers/Header';
import MainContents from './components/MainContents';
import Footer from './containers/Footer';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import  Products  from './containers/Products';
import  Cart  from './containers/Cart';
import  Home  from './containers/Home';


const App = () => {

  const link_home = <Link to="/">Home</Link>;
  const link_products = <Link to="/products">products</Link>;
  const link_cart = <Link to="/cart">cart</Link>;

  return (
    <div className="App">
      <BrowserRouter>
        <Header  link_home={link_home} link_cart={link_cart} />
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
