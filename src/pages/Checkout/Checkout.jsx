import React from 'react';
import { connect } from 'react-redux';
import './Checkout.scss'
import {createStructuredSelector} from "reselect"
//import { Test } from './Chechout.styles';
import CheckoutItem from '../../components/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeCheckoutButton'
import {selectCartItems, selectTotalPrice} from '../../redux/cart.store'

const CheckoutPage = ({items,total}) => (
  <div className="checkout-page">
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {items.map(item=><CheckoutItem key={item.id} item={item}/>)}
    <div className='total'><span>TOTAL: ${total}</span></div>
    <div className='test-warning'>
      *PLease use the following test creditcard info
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector(
  {items:selectCartItems,
  total:selectTotalPrice})

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutPage);
