import React from 'react';
import { CardElement, useStripe } from '@stripe/react-stripe-js';
const CheckoutForm = () => {
    const stripe = useStripe();
    const handleSubmit = event =>{
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;