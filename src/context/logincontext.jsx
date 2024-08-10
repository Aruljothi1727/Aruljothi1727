import React, { createContext, useState } from 'react';

const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

   
    const login = (values) => {
        if (values.username === 'admin' && values.password === 'admin') {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            alert("Invalid credentials");
        }
    };

    
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};