import React from 'react';
import Banner from '../Banner/Banner';
import Myreview from '../Myreview/Myreview';
import Products from '../Products/Products';
import Summery from './Summery';

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
            <h3 className='text-center  text-violet-900 text-3xl font-black mt-15 mb-15'>We Got!</h3>
            <Summery></Summery>
            <h3 className='text-center  text-blue-300 text-2xl font-black mt-15 mb-15'>Our Customer Review</h3>
            <Myreview></Myreview>
        </div>
    );
};

export default Home;