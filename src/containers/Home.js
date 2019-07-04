import React from 'react';
import { connect } from 'react-redux';
import  Home  from '../components/Home';

const mapStateToProps = state => {
  return {
    lang: state.lang
  };
};


export default connect(mapStateToProps)(Home)
