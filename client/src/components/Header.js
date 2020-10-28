import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
    <div className = 'head-title'>
    <Link to='/' className='item'>
        Streamer - ASM Project
      </Link>
    </div>
      
      <div className='right menu head-title'>
        <Link to='/' className='item'>
          All streams
        </Link>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Header;
