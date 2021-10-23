import { useState } from 'react';

const useCart = () => {

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    const [shipping, setShipping] = useState({});

    return {
        cart,
        count,
        shipping,
        setCart,
        setCount,
        setShipping
    }
}

export default useCart;