import React from 'react';

const Food = ({ food }) => {
    const { id, title, description } = food;
    return (
        <div className="text-dark">
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Food;