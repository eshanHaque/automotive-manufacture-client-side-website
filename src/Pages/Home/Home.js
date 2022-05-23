import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='p-5'>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;