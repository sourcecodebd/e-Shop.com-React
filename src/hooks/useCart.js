import { useState } from 'react';

const useCart = () => {

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);

    return {
        cart,
        count,
        setCart,
        setCount,
    }
}

export default useCart;