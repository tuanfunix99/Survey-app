
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import allActions from '../actions/index';

const Payment = () => {

    const dispatch = useDispatch();

    return <StripeCheckout 
    name='Survey'
    description='1$ for 10 emails'
    amount={100}
    token={token => dispatch(allActions.authAction.handleToken(token))}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
        <button className='btn'>ADD CREDIT</button>
    </StripeCheckout>
}

export default Payment;