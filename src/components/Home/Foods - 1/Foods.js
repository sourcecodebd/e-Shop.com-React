import React, { useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [products] = useProducts();
    const [condition, setCondition] = useState([]);

    const getAvailable = () => {
        const available = products?.filter(product => product.state.toLowerCase() === 'available');
        console.log(available)
        setCondition(available);
    }
    const getLimited = () => {
        const limited = products?.filter(product => product.state.toLowerCase() === 'limited');
        setCondition(limited);

    }

    return (
        <div>
            <button onClick={getAvailable} className="btn-category">Available</button>
            <button onClick={getLimited} className="btn-category">Limited</button>
            <div>
                {condition?.map(food => <Food food={food} key={food.id} />)}
            </div>

        </div>
    );
};

export default Foods;