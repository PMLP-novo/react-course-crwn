import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'
//import { Test } from './Header.styles';

const Header = () => (
  <div className="header">
    <Link to='/' className='Logo-container'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/contact'>
      CONTACT
    </Link>
    </div>
    
  </div>
);

export default Header;
