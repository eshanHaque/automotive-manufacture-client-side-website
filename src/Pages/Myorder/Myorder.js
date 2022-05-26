import React from 'react';

const Myorder = ({ isorder }) => {
    const {name, img, price} = isorder;
    return (
        <div>
            <div style={{height: '600px'}} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Pay Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myorder;