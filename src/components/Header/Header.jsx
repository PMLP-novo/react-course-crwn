import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {selectCurrentUser} from '../../redux/user.store'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
//import { Test } from './Header.styles';

const Header = ({currentUser,hidden}) => (
  <div className="header">
    <Link to='/' className='logo-container'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/contact'>
      CONTACT
    </Link>
    {currentUser?
    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
    :
    <Link className='option' to='/signin'>SIGN IN</Link>}
    <CartIcon/>
    </div>
    {!hidden?<CartDropdown/>:null}
  </div>

);

const mapStateToProps = state => ({
  currentUser:selectCurrentUser,
  hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);
