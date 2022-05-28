import React from 'react';

const Blogs = () => {
    return (
        <div className='m-32'>
            <div className='mt-10 mb-10'>
                <h1 className='text-2xl'>In array of products how can we implement  a search to find product by name?</h1>
                <p>We can implement the search by using customhook. or destructuring the product component by component. it will implement the search.</p>
            </div>
            <div className='mt-10 mb-10'>
                <h1 className='text-2xl'>Why we dont set the state directly in react?</h1>
                <p>We dont set the state directly in react cause if we set the state directly we will loose controll of it. and also it does not set the state immidietly. and its make a pending state. thats why we don't set the state directly.</p>
            </div>
            <div className='mt-10 mb-10'>
                <h1 className='text-2xl'> What are the different ways to manage a site in a React app?</h1>
                <p>There are 2 different ways to manage a state in a react app. We can set a state directly, or set a state with make other components.</p>
            </div>
        </div>
    );
};

export default Blogs;