import React from 'react';

const Product = ({product}) => {
    const {name, img, minQty, qty, price, rate} = product;
    return (
        <div>
            <div  className="card w-96 bg-base-100 shadow-xl self-stretch">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>{qty} pieces available</p>
                    <p>Min piece {minQty}</p>
                    <p>Ratings {rate}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;