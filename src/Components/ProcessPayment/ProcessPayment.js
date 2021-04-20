import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie91cF2la7Hd9lKfluwAgfWJ6rMVC5g4ifOX79f5DB0pqzWpX4PpmvKu0nyC3ojoo5ay1BsTQdW7d7lMKYdRRtK00aXNkrKLb0');
const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
               <SimpleCardForm></SimpleCardForm>
                
            </Elements>
        </div>
    );
};

export default ProcessPayment;