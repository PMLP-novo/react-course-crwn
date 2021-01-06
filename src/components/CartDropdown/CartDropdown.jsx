import React from 'react';
import { connect } from 'react-redux';
import CustomBotton from '../CustomButton'
//import { Test } from './CartDropdown.styles';
import './CartDropdown.scss'

const CartDropdown = (props) => (
  <div className="cart-dropdown">
    <div className='cart-items'/>
    <CustomBotton>GO TO CHECKOUT</CustomBotton>
  </div>
);

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartDropdown);
