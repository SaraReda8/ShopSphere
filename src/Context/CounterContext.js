import React, { createContext, useState, useContext } from 'react';

// Create the context
const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
    const [quantities, setQuantities] = useState({});

    const increment = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const decrement = (id) => {
        setQuantities((prev) => {
            const newCount = (prev[id] || 0) - 1;
            if (newCount <= 0) {
                const { [id]: _, ...rest } = prev; // Remove the product if count is 0 or less
                return rest;
            }
            return { ...prev, [id]: newCount };
        });
    };

    const getQuantity = (id) => {
        return quantities[id] || 0;
    };

    return (
        <CounterContext.Provider value={{ increment, decrement, getQuantity }}>
            {children}
        </CounterContext.Provider>
    );
};

// Custom hook to use the CounterContext
export const useCounter = () => {
    return useContext(CounterContext);
};