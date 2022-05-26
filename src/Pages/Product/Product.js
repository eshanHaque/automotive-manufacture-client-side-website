import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Product = ({ product, setIsOrder }) => {
    const {_id, name, img, minQty, qty, price, rate } = product;
    const [user] = useAuthState(auth);
    const handlePurchase = event => {
        event.preventDefault();

        const order = {
            orderID: _id,
            productName: name,
            productImg: img,
            productPrice: price,
            userEmail: user?.email,
            userName: user?.displayName
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast(`You orderd, ${name}`)
            }
        })
    }
    return (
        <div>
            <form onSubmit={handlePurchase}>
                <div style={{ height: '600px' }} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>Price: {price}</p>
                        <p>{qty} pieces available</p>
                        <p>Min piece {minQty}</p>
                        <p>Ratings {rate}</p>
                        <input type="submit" value="Place Order" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Product;