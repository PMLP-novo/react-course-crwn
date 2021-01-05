import React from 'react';
import './CustomButton.scss'

const CustomBotton = ({children, ...otherProps}) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);


export default CustomBotton;
