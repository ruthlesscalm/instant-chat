import { createContext, useState } from 'react';

const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(false);
    return (
        <GlobalContext.Provider value={{ theme, setTheme, user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext };
export default GlobalState;
