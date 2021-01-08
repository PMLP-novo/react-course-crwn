import React from 'react';
import './StripeCheckoutButton.scss'
import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceInCents = price * 100
  const publicKey = 'pk_test_51I7KJJAx25Zt77bQYj7RqzPk7NF4XkNLOqqiC9Q6APXUSyQqPvqW53ioi6pnrHzTAJ0ARGWANI0ljER4kUr7IiHk00m9Xnklqr'
  return (
    <StripeCheckOut name="Totally legit corp" 
    label="Buy this" 
    description={`Purchase items for $${price}`}
    amout={priceInCents}
    panelLabel='Buy This'
    token={(token)=>alert({token})}
    stripeKey={publicKey}/>

  )
}

export default StripeCheckoutButton;
