import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import LimitedFood from '../LimitedFood/LimitedFood';
import './LimitedFoods.css';

const LimitedFoods = () => {
    const { products } = useProducts();
    const [limiteds, setLimiteds] = useState([]);
    useEffect(() => {
        const foundLimited = products?.filter(product => product.state.toLowerCase() === 'limited');
        setLimiteds(foundLimited);
    }, [products]);

    return (
        <div className="limited-foods">
            {limiteds?.slice(0, 6).map(limited => <LimitedFood limited={limited} key={limited.id} />)}
        </div>
    );
};

export default LimitedFoods;