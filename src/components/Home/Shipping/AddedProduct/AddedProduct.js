import React from 'react';

const AddedProduct = ({ added }) => {
    const { title, price } = added;
    return (
        <div className="bg-blur text-dark row my-2">
            <p className="col-md-6 col-6 d-flex justify-content-center align-items-center">{title}</p>
            <p className="col-md-6 col-6 d-flex justify-content-center align-items-center">{price}</p>
        </div>
    );
};

export default AddedProduct;