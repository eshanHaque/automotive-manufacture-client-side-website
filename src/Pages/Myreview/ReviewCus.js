import React from 'react';

const ReviewCus = ({ review }) => {
    const { name, desc, rating } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{name}</h2>
                <p>{desc}</p>
                <p>{rating}</p>
                
            </div>
        </div>
    );
};

export default ReviewCus;