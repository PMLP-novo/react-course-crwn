import React from 'react';
import './CheckoutItem.scss'
import {connect} from 'react-redux'
import {clearCartItem,removeCartItem,addCartItem} from '../../redux/cart.store'

const CheckoutItem = ({dispatch,item}) => (
  <div className="checkout-item">
    <div className='image-container'>
      <img src={item.imageUrl} alt='item'/>
    </div>
    <span className='name'>{item.name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={()=>dispatch(removeCartItem(item))}>&#10094;</div>
    {item.quantity}
    <div className='arrow' onClick={()=>dispatch(addCartItem(item))}>&#10095;</div>
    </span>
    <span className='price'>${item.price}</span>
    <div className='remove' onClick={()=>dispatch(clearCartItem(item.id))}>&#10005;</div>
  </div>
);


export default connect()(CheckoutItem);
//</div>onClick={()=>dispatch(addCartItem(item))}