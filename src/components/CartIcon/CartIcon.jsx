import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.scss'
import {toggleCartHidden,selectCartItemCount} from '../../redux/cart.store'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'

const CartIcon = ({itemCount,toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
    </div>
  
);

const mapStateToProps = state => ({
  itemCount:selectCartItemCount(state)
})

const mapDispatchToProps = dispatch =>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
})


export default connect(
  mapStateToProps,mapDispatchToProps
)(CartIcon);
