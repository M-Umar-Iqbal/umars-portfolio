import React, { createContext, useState, useContext } from 'react';
import { IAppContextProviderProps } from '../utils/types/AppContext';

const AppContext = createContext({});
const AppContextProvider: React.FC<IAppContextProviderProps> = ({ children }) => {
    const [state, setState] = useState();

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};
const useAppContext = () => useContext(AppContext);
export { AppContextProvider , useAppContext };