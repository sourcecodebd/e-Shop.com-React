import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';
import useProducts from '../../hooks/useProducts';

export const AuthContext = createContext('e-Shop.com')
const AuthProvider = ({ children }) => {
    // const { children } = props;

    const firebase = useFirebase();
    const prod = useProducts();
    const carts = useCart();

    return (
        <AuthContext.Provider value={{ firebase, prod, carts }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;