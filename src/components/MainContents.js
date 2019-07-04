import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import  Products  from '../containers/Products';
import  Cart  from '../containers/Cart';
import  Home  from '../containers/Home';


const MainContents = () => {
  return (
    <BrowserRouter>
      <div>
           <ul>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/products'>Products</Link></li>
             <li><Link to='/cart'>cart</Link></li>
           </ul>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
      </div>
    </BrowserRouter>
)}


export default MainContents;
