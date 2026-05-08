import { useState, useEffect, createContext } from 'react';

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const defaultTheme =
    localStorage.getItem('theme') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [username, setUsername] = useState(
    localStorage.getItem('username') || '',
  );

  return (
    <GlobalContext.Provider value={{ theme, setTheme, username, setUsername }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
export default GlobalProvider;
