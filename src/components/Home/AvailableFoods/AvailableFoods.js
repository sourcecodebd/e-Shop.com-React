import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import AvailableFood from '../AvailableFood/AvailableFood';
import './AvailableFoods.css';


const AvailableFoods = () => {
    const { products } = useProducts();
    const [availables, setAvailables] = useState([]);
    useEffect(() => {
        const foundAvailable = products?.filter(product => product.state.toLowerCase() === 'available');
        setAvailables(foundAvailable);
    }, [products]);

    return (
        <div className="available-foods">
            {availables?.slice(0, 6).map(available => <AvailableFood
                available={available}
                key={available.id}
            />)}
        </div>
    );
};


export default AvailableFoods;