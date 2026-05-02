import { useContext, useEffect, useState } from 'react';
import MoonLogo from '../assets/moon-light.svg';
import SunLogo from '../assets/sun-light.svg';
import { GlobalContext } from '../context/GlobalState';

const Header = ({ user, username }) => {
    const { theme, setTheme } = useContext(GlobalContext);
    const themeChanger = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
    const getRandomColor = () => {
        if (localStorage.getItem('userBg')) {
            return localStorage.getItem('userBg');
        }
        const r = () => Math.floor(Math.random() * 256);
        return `rgb(${r()}, ${r()}, ${r()})`;
    };

    const [userBg] = useState(getRandomColor());

    useEffect(() => {
        localStorage.setItem('userBg', userBg);
    }, [userBg]);
    return (
        <header className="flex justify-between items-center bg-slate-600 text-white px-3 py-4">
            <div>
                <h1 className="text-3xl">Instant Chat</h1>
            </div>
            <div className="flex gap-7 items-center">
                <div className="flex">
                    <button type="button" onClick={themeChanger}>
                        <img
                            className="w-10"
                            src={theme === 'light' ? MoonLogo : SunLogo}
                            alt="Moon Logo"
                        />
                    </button>
                </div>
                <div
                    className="items-center"
                    style={{ display: user ? 'flex' : 'none' }}
                >
                    <button
                        style={{ backgroundColor: userBg }}
                        type="button"
                        className="h-10 aspect-square rounded-full"
                    >
                        {username.slice(0, 1)}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
