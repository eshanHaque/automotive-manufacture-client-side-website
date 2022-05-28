import React from 'react';

const Summery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center mt-20 mb-20'>
            <div className="card w-96 bg-base-100 shadow-xl  text-center ">
                <div className="card-body">
                    <h2 className="text-2xl text-center text-emerald-500">20k</h2>
                    <p>Customer Reviews</p>
                </div>
            </div>



            <div className="card w-96 bg-base-100 shadow-xl  text-center ">
                <div className="card-body">
                    <h2 className="text-2xl text-center text-emerald-500">1000K ++</h2>
                    <p>Customers we have</p>
                </div>
            </div>



            <div className="card w-96 bg-base-100 shadow-xl  text-center ">
                <div className="card-body">
                    <h2 className="text-2xl text-center text-emerald-500">120M</h2>
                    <p>Annual Reveneu</p>
                </div>
            </div>
        </div>
    );
};

export default Summery;