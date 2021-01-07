import React from 'react';
import './CollectionItem.scss'
import CustomBotton from '../CustomButton'
import {connect} from 'react-redux'
import {addCartItem} from '../../redux/cart.store'

const CollectionItem = ({item,addCartItem}) => {
  const {name,price,imageUrl} = item
  return(
<div className="collection-item">
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomBotton onClick={()=>addCartItem(item)}inverted>Add to cart</CustomBotton>
    </div>
  )
};

function mapDispatchToProps(dispatch){
  return {addCartItem:(item)=>dispatch(addCartItem(item))}
}

export default connect(null,mapDispatchToProps)(CollectionItem);
