//import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapStateToProps = state => {
  return {
    lang: state.lang
  };
};


export default connect(mapStateToProps)(Footer)
