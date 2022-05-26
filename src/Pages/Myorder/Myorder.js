import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const Myorder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrder(data));
        }
    }, [user])

    return (
        <div className='container mx-auto '>
            <div><h1 className='text-2xl'>My Order</h1></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center'>
                {
                    myOrder.map(order => <Order
                    key = {order._id}
                    order = {order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Myorder;