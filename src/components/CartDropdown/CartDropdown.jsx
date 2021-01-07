import React from 'react';
import { connect } from 'react-redux';
import {selectCartItems,toggleCartHidden} from '../../redux/cart.store'
import CustomBotton from '../CustomButton'
import CartItem from '../CartItem'
import {withRouter} from 'react-router-dom'
//import { Test } from './CartDropdown.styles';
import './CartDropdown.scss'

const CartDropdown = ({items, history,dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {items.length?
    items.map(item=><CartItem item={item} key={item.id}/>):
    <span className='empty-message'>Your cart is empty</span>}
    </div>
    <CustomBotton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomBotton>
  </div>
);

const mapStateToProps = (state) => ({
  items:selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
