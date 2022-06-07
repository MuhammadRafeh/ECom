import React, { useState, createContext, useContext } from 'react';

const EcomContext = createContext();

export const ContextProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);

    return (
        <EcomContext.Provider value={{ auth, setAuth }}>
            {children}
        </EcomContext.Provider>
    )
}

export const useEcomContext = () => useContext(EcomContext);
