import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='ui inverted menu' style={{ borderRadius: '0' }}>
        <a className='header item'>TODO App</a>
        <Link to={`/`} className='item'> Home </Link>
      </div>
    );
  }
}

export default Header;