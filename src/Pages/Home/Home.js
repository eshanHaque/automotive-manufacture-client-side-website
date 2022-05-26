import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div className='p-5'><Banner></Banner></div>
            <div className='p-20 text-xl'>
                <p>As a precise connector and components supplier, quality and customer satisfaction have highest priority in our company.  Our quality has been greatly accepted by domestic and international market. We have a own mould design and processing workshop, stamping workshop, injection moulding workshop and auto assembly workshop, which can let us have a full control on product quality and save much cost for our customers. </p>
            </div>
            <h1 className='text-center text-5xl font-black mb-5'>We provide</h1>
            <div className='p-5'>
                <Products></Products>
            </div>
            
        </div>
    );
};

export default Home;