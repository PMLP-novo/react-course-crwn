import React from 'react';
import './CustomButton.scss'

const CustomBotton = ({children, inverted,...otherProps}) => (
  <button className={`${inverted?'inverted':''} custom-button`} {...otherProps}>
    {children}
  </button>
);


export default CustomBotton;
