import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} =useFirebase();
    return (
        <div>
            <p>User name::: {user ? user.displayName: 'no One'}</p>
        </div>
    );
};

export default Products;