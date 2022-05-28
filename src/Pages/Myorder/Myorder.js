import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Order from './Order';
import { signOut } from 'firebase/auth';

const Myorder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://infinite-ridge-15899.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {

                    setMyOrder(data)
                });
        }
    }, [user])

    return (
        <div className='container mx-auto '>
            <h1 className='text-center text-2xl'>My Order</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center mb-10'>
                {
                    myOrder.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Myorder;