import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const ENDPOINT = `products.json`;
        const URL = `https://raw.githubusercontent.com/sourcecodebd/e-Shop.com-API/main/${ENDPOINT}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(err => console.log(err));
    }, []);
    return { products, setProducts, search, setSearch };
}

export default useProducts;