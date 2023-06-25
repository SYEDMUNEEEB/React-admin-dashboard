import React from 'react';
import Products from './screens/Details';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to the store</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
