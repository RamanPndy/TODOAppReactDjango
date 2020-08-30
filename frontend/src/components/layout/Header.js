import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='ui inverted menu' style={{ borderRadius: '0' }}>
        <Link to={`/`} className='item'> TODO App </Link>
      </div>
    );
  }
}

export default Header;