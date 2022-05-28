import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4RCZFA0gFaClsmPLaUlDomHuXnz8xiG8UDfqWxt9hosVZCKc43BXqy38jnMb3BGxiiIr2aGWWTph0qUuiz61vK008AtSGIy6');
const Payment = () => {
    const { id } = useParams();
    const url = `https://infinite-ridge-15899.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl justify-center">
                <div className="card-body">
                    <h2 className="card-title">{order.productName}</h2>
                    <p>{order.productPrice}</p>
                    <div className="card-body justify-end">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;