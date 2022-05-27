import React from 'react';

const Order = ({order}) => {
    const { productImg, productName, productPrice, userName, userEmail} = order;
    return (
        <div>
            <div style={{ height: '500px' }} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={productImg} alt="orderImg" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{productName}</h2>
                                <p>Price: {productPrice}</p>
                                <p>Your Name: {userName}</p>
                                <p>Your Email: {userEmail}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Pay</button>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Order;