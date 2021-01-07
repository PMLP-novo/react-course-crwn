import React from 'react';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart.store'
import CustomBotton from '../CustomButton'
import CartItem from '../CartItem'
//import { Test } from './CartDropdown.styles';
import './CartDropdown.scss'

const CartDropdown = ({items}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {items.map(item=><CartItem item={item} key={item.id}/>)}
    </div>
    <CustomBotton>GO TO CHECKOUT</CustomBotton>
  </div>
);

const mapStateToProps = (state) => ({
  items:selectCartItems(state)
});

export default connect(
  mapStateToProps,
)(CartDropdown);
