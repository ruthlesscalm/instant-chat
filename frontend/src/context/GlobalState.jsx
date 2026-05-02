import { createContext, useState } from 'react';

const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext };
export default GlobalState;
